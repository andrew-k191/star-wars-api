import React from 'react';
import StarWarsTable from './StarWarsTable';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Star Wars API</h1>
        <StarWarsTable />
      </div>
    );
  }
}

export default App;
