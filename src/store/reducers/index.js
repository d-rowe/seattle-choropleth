const initState = { entry: 'MEDIAN_AGE' };

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_ENTRY':
      return { entry: action.entry };
    default:
      return state;
  }
};

export default rootReducer;
