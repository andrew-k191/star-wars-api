import React from 'react';
import axios from 'axios';
import StarWarsTable from './components/StarWarsTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swapiCharacters: [],
    };
    // this.fetchSwapiSpecies = this.fetchSwapiSpecies.bind(this);
    // this.fetchSwapiHomeworlds = this.fetchSwapiHomeworlds(this);
    this.fetchSwapiCharacters = this.fetchSwapiCharacters.bind(this);
  }

  async fetchSwapiSpecies(swapiCharacter) {
    if (swapiCharacter.species.length === 0) {
      swapiCharacter['characterSpecies'] = 'Human';
    } else {
      const fetchSpecies = await axios(swapiCharacter.species[0]);
      swapiCharacter['characterSpecies'] = fetchSpecies.data.name;
    }
  }

  async fetchSwapiHomeworlds(swapiCharacter) {
    const fetchHomeworlds = await axios(swapiCharacter.homeworld);
    swapiCharacter['characterHomeworld'] = fetchHomeworlds.data.name;
  }

  async fetchSwapiCharacters(swapiRequest) {
    const swapiCharacters = await axios(swapiRequest);
    swapiCharacters.data.results.forEach((swapiCharacter) => {
      this.fetchSwapiHomeworlds(swapiCharacter);
      this.fetchSwapiSpecies(swapiCharacter);
    });
    // set the State of SWAPI Array of character objects
    this.setState({
      swapiCharacters: swapiCharacters.data.results,
    });
  }

  componentDidMount() {
    this.fetchSwapiCharacters('https://swapi.dev/api/people');
  }

  render() {
    return (
      <div>
        <h1>Star Wars API</h1>
        <StarWarsTable swapiCharacters={this.state.swapiCharacters} />
      </div>
    );
  }
}

export default App;
