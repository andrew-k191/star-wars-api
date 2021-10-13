import React from 'react';
import Table from 'react-bootstrap/Table';

class StarWarsTable extends React.Component {
  // should I make my API call here or in App.js?

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
      </Table>
    );
  }
}

export default StarWarsTable;
