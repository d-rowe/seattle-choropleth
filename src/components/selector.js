import React from 'react';
import { setEntry } from '../store/actions/index';
import { connect } from 'react-redux';
import '../styles/components/selector.css'

const entries = {
  'Median Age': 'MEDIAN_AGE',
  'Median Household Income': 'MEDIAN_HH_INC_PAST_12MO_DOLLAR',
  'Median Gross Rent': 'MEDIAN_GROSS_RENT',
  'Percent Own Occupied Housing Unit':'PCT_OWN_OCC_HU',
  Population: 'TOTAL_POPULATION'
};

const Selector = ({setEntry}) => {
  const options = Object.keys(entries).map((key, i) => (
    <option key={i}>{key}</option>
  ));
  return (
    <select onChange={e => setEntry(entries[e.target.value])} className='entry-select'>
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
