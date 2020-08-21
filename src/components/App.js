import React from 'react';
import PeopleList from './PeopleList';
import SelectedPerson from './SelectedPerson';

function App() {
  return (
    <div className="ui segment">
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <PeopleList />
          </div>
          <div className="column eight wide">
            <SelectedPerson />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
