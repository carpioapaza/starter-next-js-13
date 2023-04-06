import Image from 'next/image';
import './Card.css';

const Card = ({data}) => {
  return (
    <div className='Card'>
      <p>Name: {data.name}</p>
      <p>Type: {data.type ? data.type : 'No type'}</p>
      <p>Created: {data.created}</p>
      {/* {<Image fill alt={data.name} src={data.image} /> && <></>} */}
      {<Image fill alt={data.name} src={data.image} /> && <></>}
    </div>
  );
};

export default Card;
