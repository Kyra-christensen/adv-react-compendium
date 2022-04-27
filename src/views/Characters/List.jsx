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
  
}