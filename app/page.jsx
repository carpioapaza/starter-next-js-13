import Link from 'next/link';
import {Routes} from '../models/routes.model';
import Collar from '../public/images/collar.webp';
import Image from 'next/image';
import {collarBlur} from './models/collar.blur';
import Categories from '../components/Categories/Categories';
import Hero from '../components/Hero/Hero';
const App = () => {
  return (
    <div style={{padding: '8rem 0'}}>
      {/* <h1>Welcome to Rick and Morty App</h1>
      <h1>What do you want to see ? </h1>
      <Link href={Routes.CHARACTERS}>Characters</Link>
      <Link href={Routes.LOCATIONS}>Locations</Link>
      <Image
        src={Collar}
        blurDataURL={collarBlur}
        placeholder='blur'
        alt='Images'
        priority
      /> */}
      <Hero />

      <Categories />
      {/* <Image alt='Images' src={Collar} blurDataURL='OJO imagen enbase64' /> */}
    </div>
  );
};

export default App;
