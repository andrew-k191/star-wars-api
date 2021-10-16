import axios from 'axios';
import React from 'react';
import Table from 'react-bootstrap/Table';

class StarWarsTable extends React.Component {
  render() {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth date</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Homeworld</th>
            <th>Species</th>
          </tr>
        </thead>
        <tbody>
          {/* Each row should contain all the relevant information about each character */}
          {/* <tr>
            <td>{this.state.characterData[0].name}</td>
            <td>{this.state.characterData[0].birth_year}</td>
            <td>{this.state.characterData[0].height}</td>
          </tr> */}
        </tbody>
      </Table>
    );
  }
}

export default StarWarsTable;
