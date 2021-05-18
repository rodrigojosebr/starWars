import React, { useState, useEffect } from 'react';
import { getData } from '../../Services/api';
import CardCharacter from '../../Components/CardCharacter';
import * as Styled from './Character.styles';

function Character() {
  const [character, setCharacter] = useState([]);
  const baseURL = 'https://swapi.dev/api/people/'

  async function fetchData() {
    const response = await getData(baseURL)
    setCharacter(response.results)
  }

  useEffect(() => { fetchData() }, []);

  return (
    <div>
      <h1>Personagens</h1>
      <Styled.CharacterList>
        {character.map((character) => <CardCharacter character={character} key={character.name} />)}
      </Styled.CharacterList>
    </div>
  );
}

export default Character;