import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CharacterCard from '../../components/Character/Card';

export default function CharacterDetail() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    const getCharacter = async () => {
      const res = await fetch(`https://www.officeapi.dev/api/characters?search=${name}`);
      const { data } = await res.json();
      const characterData = {
        img: `${data.PicUrl}`,
        name: `${data.Name}`,
        species: `${data.Species}`,
        planet: `${data.Planet}`,
        profession: `${data.Profession}`,
        voiceBy: `${data.VoicedBy}`
      };

      setCharacter(characterData);
      setLoading(false);
    };
    getCharacter();
  }, [name]);

  return (
    <>
      <img src={data.img} />
    </>
  );
}