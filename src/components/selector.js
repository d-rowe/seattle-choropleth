import React from 'react';
import { setEntry } from '../store/actions/index';
import { connect } from 'react-redux';
import '../styles/components/selector.css';

const entries = {
  'Median Age': 'MEDIAN_AGE',
  'Median Household Income ($)': 'MEDIAN_HH_INC_PAST_12MO_DOLLAR',
  'Unemployment (%)': 'PERCENT_UNEMPLOYED',
  'Median Gross Rent ($)': 'MEDIAN_GROSS_RENT',
  'Median Housing Unit Value ($)': 'HU_VALUE_MEDIAN_DOLLARS',
  'Graduated High School (%)': 'PCNT_HIGHSCHOOL_GRAD_OR_HIGHER',
  "Bachelor's Degree (%)": 'PCT_BACHELOR_DEGREE_OR_HIGHER',
  'Living In Poverty (%)': 'PCT_POPULATION_UNDER_POVERTY',
  'Vacant Housing Units (%)': 'PCT_VACANT_HU',
  'People of Color (%)': 'PCT_PERSON_OF_COLOR',
  'Housing Unit Ownership (%)': 'PCT_OWN_OCC_HU',
  'People Per Acre': 'POP_DENSITY_ACRE',
  'Households Per Acre': 'HH_DENSITY_ACRE'
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
