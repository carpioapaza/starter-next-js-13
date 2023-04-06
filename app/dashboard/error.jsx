'use client';
const {useEffect} = require('react');

const error = ({error, reset}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Something went error</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
};

export default error;
