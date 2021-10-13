import React from 'react';
import StarWarsTable from './StarWarsTable';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // this state should keep track of characters information, since 10 is the maximum,
      CharacterData: {
        name: '',
      },
    };
  }

  // We need to make an HTTP request using Axios here
  componentDidMount() {
    axios
      .get('https://swapi.dev/api/people')
      .then((response) => {
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
