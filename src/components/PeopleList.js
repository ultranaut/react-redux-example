import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPerson } from '../actions';

class PeopleList extends Component {
  renderList() {
    return this.props.people.map((person, idx) => {
      return (
        <div className="item" key={idx}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectPerson(person)}
            >
              Select
            </button>
          </div>
          <div className="content">{person.first}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { people: state.people };
};

export default connect(mapStateToProps, { selectPerson })(PeopleList);
