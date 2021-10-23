import React from 'react';
import axios from 'axios';
import StarWarsTable from './components/StarWarsTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      homeworld: [],
    };
    this.fetchStarWarsApi = this.fetchStarWarsApi.bind(this);
    this.fetchHomeworld = this.fetchHomeworld.bind(this);
  }

  fetchStarWarsApi(httpRequest) {
    axios
      .get(httpRequest)
      .then((response) => {
        const characterData = response.data;
        console.log('CharacterData is: ', characterData.results);
        this.setState(
          {
            characters: characterData.results,
          },
          // Callback function
          () => {
            for (let character of characterData.results) {
              this.fetchHomeworld(character);
            }
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  fetchHomeworld(character) {
    const homeworldUrl = character.homeworld;
    axios.get(homeworldUrl).then((response) => {
      const homeworldData = response.data;
      console.log('Character Name: ', character.name);
      console.log("This character's homeworld is: ", homeworldData.name);
      const homeworlds = this.state.homeworld;

      // this.setState({
      //   homeworld: [...homeworlds, ([character.name] = homeworldData.name)],
      // });
    });
  }

  componentDidMount() {
    this.fetchStarWarsApi('https://swapi.dev/api/people');
  }

  render() {
    return (
      <div>
        <h1>Star Wars API</h1>
        <StarWarsTable
          characters={this.state.characters}
          homeworld={this.state.homeworld}
        />
      </div>
    );
  }
}

export default App;
