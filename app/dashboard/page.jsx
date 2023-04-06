import Image from 'next/image';

async function getData() {
  const response = await fetch('https://rickandmortyapi.com/api/character/2');
  return response.json();
}
const DashboardPage = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <Image width='100' height='100' src={data.image} alt={data.name} />
    </div>
  );
};
export default DashboardPage;
