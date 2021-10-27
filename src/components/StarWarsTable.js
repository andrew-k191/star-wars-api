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
        {props.swapiCharacters.map((swapiCharacter) => {
          return (
            <tr key={swapiCharacter.name}>
              <td>{swapiCharacter.name}</td>
              <td>{swapiCharacter.birth_year}</td>
              <td>{swapiCharacter.height}</td>
              <td>{swapiCharacter.mass}</td>
              <td>{swapiCharacter.planet}</td>
              <td>{swapiCharacter.speciesName}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default StarWarsTable;
