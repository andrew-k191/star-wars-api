import React from 'react';
import axios from 'axios';
import StarWarsTable from './components/StarWarsTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterData: [],
      homeworld: '',
    };
    this.fetchStarWarsApi = this.fetchStarWarsApi.bind(this);
  }

  fetchStarWarsApi(httpRequest) {
    axios
      .get(httpRequest)
      .then((response) => {
        const responseData = response.data;
        console.log('CharacterData is: ', responseData.results);
        this.setState({
          characterData: responseData.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.fetchStarWarsApi('https://swapi.dev/api/people');
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
