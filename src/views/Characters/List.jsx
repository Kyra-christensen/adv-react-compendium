import { useEffect, useState } from "react";

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
    const getCharacters = async () => {
      const res = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters?perPage=10');
      const data = await res.json();
      console.log(data)
      const characterData = data.map((character) => ({
        img: character.PicUrl,
        name: character.Name,
        species: character.Species
      }));

      setCharacters(characterData);
      
    }
    getCharacters();
    setLoading(false);
  }, []);

  if (loading) return (
    <>
      <div>Loading...</div>
    </>
  );

  return (
    <>
      <h3>Characters of Futurama</h3>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' placeholder='Search for a character' value={search} onChange={e => setSearch(e.target.value)}></input>
          <button>Search</button>
        </label>
      </form>

      {
        search 
          ? results.map((character, i) => {
            return (
              <div className='all-characters' key={character.name}>
                <div className='characters' >
                  <img src={character.img} alt='Pic of Character' />
                  <h2>{character.name}</h2>
                  <p>{character.species}</p>
                </div>
              </div>
            )
          })
          : characters.map((character, i) => {
            return (
              <div className='all-characters' key={character.name}>
                <div className='characters' >
                  <img src={character.img} alt='Pic of Character' />
                  <h2>{character.name}</h2>
                  <p>{character.species}</p>
                </div>
              </div>
            )
          })
      }
    </>
  )
}