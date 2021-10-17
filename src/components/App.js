import React from 'react';
import axios from 'axios';
import StarWarsTable from './StarWarsTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // this state should keep track of characters information, since 10 is the maximum,
      characterData: {
        name: '',
      },
    };
  }

  // async fetchStarWarsApi() {
  //   // Need to make HTTP request using Axios here
  //   await axios
  //     .get('https://swapi.dev/api/people')
  //     .then((response) => {
  //       console.log(response.data);
  //       this.setState({
  //         characterData: response.data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  componentDidMount() {
    axios
      .get('https://swapi.dev/api/people/1')
      .then((response) => {
        const starWarsApiData = response.data;
        console.log(starWarsApiData);

        this.setState((prevState) => ({
          ...prevState,
          name: starWarsApiData[0].name,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Star Wars API</h1>
        {/* <StarWarsTable /> */}
        {/* <StarWarsTable characterData={this.state.characterData} /> */}
      </div>
    );
  }
}

export default App;
