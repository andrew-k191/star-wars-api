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

  // const fetchStarWarsApi = a

  // We need to make an HTTP request using Axios here
  componentDidMount() {
    axios
      .get('https://swapi.dev/api/people/1')
      .then((response) => {
        console.log(response.data.name);
        // Remember setState is asynchronous, so your information will not render when you are expecting it to
        // this.setState({
        //   characterData: response.data,
        // });
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
