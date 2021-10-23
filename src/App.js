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
  }

  async fetchSwapiCharacters() {
    const swapiResponse = await axios('https://swapi.dev/api/people');
    const swapiCharacters = swapiResponse.data.results;
    for (let swapiCharacter of swapiCharacters) {
      const homeworldResponse = await axios(swapiCharacter.homeworld);
      const characterHomeworld = homeworldResponse.data.name;
      // Append homeworld/planet to each SWAPI character object
      swapiCharacter['planet'] = characterHomeworld;
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
