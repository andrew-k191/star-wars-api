import React from 'react';
import axios from 'axios';
import StarWarsTable from './components/StarWarsTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterData: [],
    };
  }

  getStarWarsData() {
    axios
      .get('https://swapi.dev/api/people')
      .then((response) => {
        const starWarsApiData = response.data;
        console.log(
          'Character data returning from App.js:',
          starWarsApiData.results
        );

        this.setState({
          characterData: starWarsApiData.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getStarWarsData();
  }

  render() {
    return (
      <div>
        <h1>Star Wars API</h1>
        <StarWarsTable characterData={this.state.characterData} />
      </div>
    );
  }
}

export default App;
