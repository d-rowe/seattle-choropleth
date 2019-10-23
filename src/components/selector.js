import React from 'react';
import { setEntry } from '../store/actions/index';
import { connect } from 'react-redux';
import '../styles/components/selector.css';

const entries = {
  'Age': 'MEDIAN_AGE',
  'Household Income': 'MEDIAN_HH_INC_PAST_12MO_DOLLAR',
  'Unemployment': 'PERCENT_UNEMPLOYED',
  'Rent': 'MEDIAN_GROSS_RENT',
  'House Price': 'HU_VALUE_MEDIAN_DOLLARS',
  'High School Education': 'PCNT_HIGHSCHOOL_GRAD_OR_HIGHER',
  "Undergraduate Education": 'PCT_BACHELOR_DEGREE_OR_HIGHER',
  'Poverty': 'PCT_POPULATION_UNDER_POVERTY',
  'Vacant Houses': 'PCT_VACANT_HU',
  'People of Color': 'PCT_PERSON_OF_COLOR',
  'House Ownership': 'PCT_OWN_OCC_HU',
  'Population Density': 'POP_DENSITY_ACRE',
};

const Selector = ({ setEntry }) => {
  const options = Object.keys(entries).map((key, i) => (
    <option key={i}>{key}</option>
  ));
  return (
    <select
      onChange={e => setEntry(entries[e.target.value])}
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
