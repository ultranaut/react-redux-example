export const selectPerson = (person) => {
  return {
    type: 'SELECT_PERSON',
    person,
  };
};
