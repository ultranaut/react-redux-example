import React from 'react';
import { connect } from 'react-redux';

const SelectedPerson = ({ person }) => {
  if (!person) {
    return <h3>Select a person</h3>;
  }
  return (
    <div>
      <h3>Details:</h3>
      <p>
        First: {person.first}
        <br />
        Last: {person.last}
        <br />
        Occupation: {person.occupation}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    person: state.selectedPerson,
  };
};

export default connect(mapStateToProps)(SelectedPerson);
