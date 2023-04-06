import Link from 'next/link';
import Card from '../../components/Card/Card';
import {Routes} from '../../models/routes.model';
import {getLocations} from './services';

const fetchLocations = async () => {
  return await getLocations();
};

const Locations = async () => {
  const locations = await fetchLocations();
  console.log(locations);
  return (
    <>
      <Link href={Routes.HOME}>Home</Link>
      <Link href={Routes.CHARACTERS}>Characters</Link>
      {locations.map((location) => (
        <Card key={location.id} data={location} />
      ))}
    </>
  );
};

export default Locations;
