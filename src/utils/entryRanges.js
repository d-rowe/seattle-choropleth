import geojson from '../geojson/census.geojson';
import { json } from 'd3';

const entryRanges = new Promise((resolve, reject) => {
  json(geojson).then(entry => resolve(mergeValues(entry.features)));
});

const mergeValues = features => {
  let merged = {};
  features.forEach(f => {
    const props = f.properties;
    Object.keys(props).forEach(p => {
      if (merged[p]) {
        merged[p].push(props[p]);
      } else {
        merged[p] = [props[p]];
      }
    });
  });

  let ranged = {};
  Object.keys(merged).forEach(m => {
    const vals = merged[m];
    const [min, max] = [Math.min(...vals), Math.max(...vals)];
    ranged[m] = [min, max];
  });
  return ranged;
};

export default entryRanges;
