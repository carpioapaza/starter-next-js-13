'use client';
import {useState, useEffect, useRef} from 'react';
import {GrPrevious, GrNext} from 'react-icons/gr';
import {BsBookmark} from 'react-icons/bs';
// import axios from 'axios';
import Link from 'next/link';
import './Hero.scss';

const Hero = () => {
  const items = [
    {
      _id: '1',
      name: 'Render 1',
      images: [
        {url: 'https://picsum.photos/200/300'},
        {url: 'https://picsum.photos/id/237/200/300'},
      ],
    },
    {
      _id: '2',
      name: 'Render 2',
      images: [
        {url: 'https://picsum.photos/seed/picsum/200/300'},
        {url: 'https://picsum.photos/200/300?grayscale'},
      ],
    },
    {
      _id: '3',
      name: 'Render 3',
      images: [
        {url: 'https://picsum.photos/200/300/?blur'},
        {url: 'https://picsum.photos/200/300?random=7'},
      ],
    },
    {
      _id: '1111',
      name: 'Render 3',
      images: [
        {url: 'https://picsum.photos/200/300?random=6'},
        {url: 'https://picsum.photos/200/300/?blur'},
      ],
    },
    {
      _id: '4',
      name: 'Render 3',
      images: [
        {url: 'https://picsum.photos/200/300?random=5'},
        {url: 'https://picsum.photos/200/300/?blur'},
      ],
    },
    {
      _id: '5',
      name: 'Render 3',
      images: [
        {url: 'https://picsum.photos/200/300/?blur'},
        {url: 'https://picsum.photos/200/300?random=1'},
      ],
    },
    {
      _id: '6',
      name: 'Render 3',
      images: [
        {url: 'https://picsum.photos/200/300?random=4'},
        {url: 'https://picsum.photos/200/300/?blur'},
      ],
    },
    {
      _id: '7',
      name: 'Render 3',
      images: [
        {url: 'https://picsum.photos/200/300?random=3'},
        {url: 'https://picsum.photos/200/300/?blur'},
      ],
    },
    {
      _id: '8',
      name: 'Render 3',
      images: [
        {url: 'https://picsum.photos/200/300?random=2'},
        {url: 'https://picsum.photos/200/300/?blur'},
      ],
    },
  ];

  // const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselItemWidth = 310;

  // useEffect(() => {
  //   const getJewelry = async () => {
  //     try {
  //       const {data} = await axios.get(
  //         'http://localhost:8082/api/limited-edition'
  //       );
  //       setItems(data.jewelry);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getJewelry();
  // }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isPaused, items.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const renderCarouselItems = () => {
    return items.map((item) => (
      <Link
        className='hero__carousel-link'
        href={`item/${item.id}`}
        key={item._id}
      >
        {item && item.images && item.images[0] && (
          <img
            className='hero__carousel-img'
            src={item.images[0].url}
            alt={item.name}
          />
        )}
        <div className='hero__carousel-content'>
          <div className='hero__carousel-text'>
            <div className='hero__carousel-caption'>{item.name}</div>
          </div>
          <button className='hero__carousel-save'>
            <BsBookmark />
          </button>
        </div>
      </Link>
    ));
  };

  const carouselRef = useRef(null);
  const numItemsToShow = Math.round(items.length / 2);
  const translateX = -(carouselItemWidth * activeIndex);

  if (items.length === 0) {
    return <div>Cargando</div>;
  }

  return (
    <div className='hero'>
      <h1 className='hero__title ml-padding'>Últimos renders</h1>
      <div className='hero__carousel'>
        <div
          className='hero__carousel-wrapper'
          style={{transform: `translateX(${translateX}px)`}}
          ref={carouselRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {renderCarouselItems()}
        </div>
        <button
          className='hero__carousel-button hero__carousel-button--prev'
          onClick={handlePrev}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <GrPrevious />
        </button>
        <button
          className='hero__carousel-button hero__carousel-button--next'
          onClick={handleNext}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
};
export default Hero;

// 'use client';
// import {useState, useEffect, useRef} from 'react';
// import {GrPrevious, GrNext} from 'react-icons/gr';
// import {BsBookmark} from 'react-icons/bs';
// import Link from 'next/link';
// import './Hero.scss';

// const Hero = () => {
//   const items = [
//     {
//       _id: '1',
//       name: 'Render 1',
//       images: [
//         {url: 'https://picsum.photos/200/300'},
//         {url: 'https://picsum.photos/id/237/200/300'},
//       ],
//     },
//     {
//       _id: '2',
//       name: 'Render 2',
//       images: [
//         {url: 'https://picsum.photos/seed/picsum/200/300'},
//         {url: 'https://picsum.photos/200/300?grayscale'},
//       ],
//     },
//     {
//       _id: '3',
//       name: 'Render 3',
//       images: [
//         {url: 'https://picsum.photos/200/300/?blur'},
//         {url: 'https://picsum.photos/200/300?random=7'},
//       ],
//     },
//     {
//       _id: '1111',
//       name: 'Render 3',
//       images: [
//         {url: 'https://picsum.photos/200/300?random=6'},
//         {url: 'https://picsum.photos/200/300/?blur'},
//       ],
//     },
//     {
//       _id: '4',
//       name: 'Render 3',
//       images: [
//         {url: 'https://picsum.photos/200/300?random=5'},
//         {url: 'https://picsum.photos/200/300/?blur'},
//       ],
//     },
//     {
//       _id: '5',
//       name: 'Render 3',
//       images: [
//         {url: 'https://picsum.photos/200/300/?blur'},
//         {url: 'https://picsum.photos/200/300?random=1'},
//       ],
//     },
//     {
//       _id: '6',
//       name: 'Render 3',
//       images: [
//         {url: 'https://picsum.photos/200/300?random=4'},
//         {url: 'https://picsum.photos/200/300/?blur'},
//       ],
//     },
//     {
//       _id: '7',
//       name: 'Render 3',
//       images: [
//         {url: 'https://picsum.photos/200/300?random=3'},
//         {url: 'https://picsum.photos/200/300/?blur'},
//       ],
//     },
//     {
//       _id: '8',
//       name: 'Render 3',
//       images: [
//         {url: 'https://picsum.photos/200/300?random=2'},
//         {url: 'https://picsum.photos/200/300/?blur'},
//       ],
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const itemsLength = Math.round(items.length / 2);
//   const carouselItemWidth = 310;
//   const numItemsToShow = itemsLength;

//   const handlePrev = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? numItemsToShow - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === numItemsToShow - 1 ? 0 : prevIndex + 1
//     );
//   };
//   const translateX = -(carouselItemWidth * activeIndex);
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     if (!isPaused) {
//       const interval = setInterval(() => {
//         setActiveIndex((prevIndex) =>
//           prevIndex === numItemsToShow - 1 ? 0 : prevIndex + 1
//         );
//       }, 1500);
//       return () => clearInterval(interval);
//     }
//   }, [isPaused, numItemsToShow]);

//   const handleMouseEnter = () => {
//     setIsPaused(true);
//   };

//   const handleMouseLeave = () => {
//     setIsPaused(false);
//   };

//   return (
//     <div className='hero'>
//       <h1 className='hero__title ml-padding'>Últimos renders</h1>
//       <div className='hero__carousel'>
//         <div
//           className='hero__carousel-wrapper'
//           style={{transform: `translateX(${translateX}px)`}}
//           ref={carouselRef}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           {items.map((item) => (
//             <Link
//               className='hero__carousel-link'
//               // to={`/editon/${item._id}`}
//               // to={`item/${item._id}`}
//               href={`/item${item._id}`}
//               key={item._id}
//             >
//               <img
//                 className='hero__carousel-img'
//                 src={item.images[0].url}
//                 alt={item.name}
//               />
//               <div className='hero__carousel-content'>
//                 <div className='hero__carousel-text'>
//                   <div className='hero__carousel-caption'>{item.name}</div>
//                 </div>
//                 <button className='hero__carousel-save'>
//                   <BsBookmark />
//                 </button>
//               </div>
//             </Link>
//           ))}
//         </div>
//         <button
//           className='hero__carousel-button hero__carousel-button--prev'
//           onClick={handlePrev}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <GrPrevious />
//         </button>
//         <button
//           className='hero__carousel-button hero__carousel-button--next'
//           onClick={handleNext}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <GrNext />
//         </button>
//       </div>
//     </div>
//   );
// };
// export default Hero;
