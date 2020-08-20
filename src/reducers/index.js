import { combineReducers } from 'redux';

const peopleReducer = () => {
  // Yep, it's a static list
  return [
    { first: 'John', last: 'Shearer', occupation: 'Pilot' },
    { first: 'Jeff', last: 'Smith', occupation: 'Plumber' },
    { first: 'Carol', last: 'Roberts', occupation: 'Surgeon' },
    { first: 'Steve', last: 'Stevens', occupation: 'Robot' },
  ];
};

const selectedPersonReducer = (selectedPerson = null, action) => {
  if (action.type === 'SELECT_PERSON') {
    return action.payload;
  }
  return selectedPerson;
};

export default combineReducers({
  people: peopleReducer,
  selectedPerson: selectedPersonReducer,
});
