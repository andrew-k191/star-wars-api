import React from 'react';
import Table from 'react-bootstrap/Table';

const StarWarsTable = (props) => {
  return (
    <Table striped bordered hover>
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
        {props.characterData.map((character) => {
          return (
            <tr key={character.name}>
              <td>{character.name}</td>
              <td>{character.birth_year}</td>
              <td>{character.height}</td>
              <td>{character.mass}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default StarWarsTable;
