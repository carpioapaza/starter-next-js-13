import Link from 'next/link';
import Card from '../../components/Card/Card';
import {Routes} from '../../models/routes.model';
import {getCharacters} from './services';

const fetchCharacters = async () => {
  return await getCharacters();
};
const Characters = async () => {
  const characters = await fetchCharacters();
  return (
    <>
      <Link href={Routes.HOME}>Home</Link>
      <Link href={Routes.LOCATIONS}>Locations</Link>
      {characters.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </>
  );
};

export default Characters;
