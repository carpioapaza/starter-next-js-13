'use client';
import {GiRing, GiDropEarrings, GiPearlNecklace} from 'react-icons/gi';
import {FaCircleNotch} from 'react-icons/fa';
import Link from 'next/link';
import './Categories.scss';
import Image from 'next/image';

import Ring from '../../public/images/test/ring2.webp';
// import Earring from '../../public/images/test/earring2.webp';
// import Necklace from '../../public/images/test/necklace1.webp';
// import Bracalet from '../../public/images/test/bracalet2.webp';

// import {
//   bracelet2,
//   earring2,
//   necklace1,
//   ring2,
// } from '../../public/images/categories';

const Categories = () => {
  return (
    <div className='categories'>
      <Link href='/' className='categories__link'>
        Anillos <GiRing />
        {/* <img className='categories__img' src='bracelet2.webp' alt='Anillos' /> */}
        <Image fill className='categories__img' src={Ring} alt='Anillos' />
      </Link>
      <Link href='/' className='categories__link'>
        Aretes <GiDropEarrings />
        <Image fill className='categories__img' src={Ring} alt='earring' />
      </Link>
      <Link href='/' className='categories__link'>
        Pulseras <FaCircleNotch />
        <Image fill className='categories__img' src={Ring} alt='bracalet' />
      </Link>
      <Link href='/' className='categories__link'>
        Collares <GiPearlNecklace />
        <Image fill className='categories__img' src={Ring} alt='Necklace' />
      </Link>
    </div>
  );
};

export default Categories;
