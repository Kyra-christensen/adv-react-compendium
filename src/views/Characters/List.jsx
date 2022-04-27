import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import CharacterCard from "../../components/Character/Card";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (search) {
      const filteredCharacters = characters.filter(characters => characters.name.includes(search));
      setResults(filteredCharacters);
    }
  }

  useEffect(() => {
    async function getCharacters() {
      const res = await fetch('httpsfuturamaapi.herokuapp.com/api/v2/characters?perPage=10');
      const data = await res.json();
      const characterData = data.results;
      const character = characterData.map((character) => ({
        img: character.PicUrl,
        name: character.Name,
        species: character.Species
      }));

      setCharacters(character);
    }
    getCharacters();
    setLoading(false);
  }, []);

  if (loading) return (
    <>
      <div>Loading...</div>
    </>
  );
  
}