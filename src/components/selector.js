import React from 'react';
import { setEntry } from '../store/actions/index';
import { connect } from 'react-redux';
import '../styles/components/selector.css';

const entries = {
  Demographics: {
    Age: 'MEDIAN_AGE',
    'Household Income': 'MEDIAN_HH_INC_PAST_12MO_DOLLAR',
    'People of Color': 'PCT_PERSON_OF_COLOR',
    'High School Education': 'PCNT_HIGHSCHOOL_GRAD_OR_HIGHER',
    'Undergraduate Education': 'PCT_BACHELOR_DEGREE_OR_HIGHER',
    Poverty: 'PCT_POPULATION_UNDER_POVERTY',
    Unemployment: 'PERCENT_UNEMPLOYED'
  },
  Density: {
    'Population Density': 'POP_DENSITY_ACRE'
  },
  Housing: {
    Rent: 'MEDIAN_GROSS_RENT',
    'House Price': 'HU_VALUE_MEDIAN_DOLLARS',
    'Vacant Houses': 'PCT_VACANT_HU',
    'House Ownership': 'PCT_OWN_OCC_HU'
  }
};

let nameKeys = {};
Object.keys(entries).forEach(category => {
  Object.keys(entries[category]).forEach(
    name => (nameKeys[name] = entries[category][name])
  );
});

const Selector = ({ setEntry }) => {
  const options = Object.keys(entries).map((category, i) => (
    <optgroup label={category} key={i}>
      {Object.keys(entries[category]).map((name, j) => (
        <option key={j}>{name}</option>
      ))}
    </optgroup>
  ));
  return (
    <select
      onChange={e => setEntry(nameKeys[e.target.value])}
      className='entry-select'
    >
      {options}
    </select>
  );
};

const mapDispatchToProps = dispatch => ({
  setEntry: entry => dispatch(setEntry(entry))
});

export default connect(
  null,
  mapDispatchToProps
)(Selector);
