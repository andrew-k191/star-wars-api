import React from 'react';
import axios from 'axios';
import StarWarsTable from './components/StarWarsTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swapiCharacters: [],
    };
    this.fetchSwapiCharacters = this.fetchSwapiCharacters.bind(this);
    this.fetchSwapiSpecies = this.fetchSwapiSpecies.bind(this);
  }

  async fetchSwapiSpecies(swapiCharacter) {
    const characterSpeciesArray = swapiCharacter.species;
    const speciesPromise = characterSpeciesArray.map(async (speciesUrl) => {
      const speciesResponse = await axios(speciesUrl);
      return speciesResponse;
    });

    const speciesPromiseResolved = await Promise.all(speciesPromise);

    if (
      Array.isArray(speciesPromiseResolved) &&
      speciesPromiseResolved.length !== 0
    ) {
      speciesPromiseResolved.forEach((resolvedPromise) => {
        const speciesName = resolvedPromise.data.name;
        swapiCharacter['speciesName'] = speciesName;
      });
      // const speciesName = speciesPromiseResolved[0].data.name;
      // swapiCharacter['speciesName'] = speciesName;
    } else {
      swapiCharacter['speciesName'] = 'Human';
    }
  }

  async fetchSwapiCharacters() {
    const swapiResponse = await axios('https://swapi.dev/api/people');
    const swapiCharacters = swapiResponse.data.results;
    for (let swapiCharacter of swapiCharacters) {
      const homeworldResponse = await axios(swapiCharacter.homeworld);
      const characterHomeworld = homeworldResponse.data.name;
      // Append homeworld/planet to each SWAPI character object
      swapiCharacter['planet'] = characterHomeworld;

      this.fetchSwapiSpecies(swapiCharacter);
      console.log(swapiCharacter.species);
    }
    this.setState({
      swapiCharacters: swapiCharacters,
    });
  }

  componentDidMount() {
    this.fetchSwapiCharacters();
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
