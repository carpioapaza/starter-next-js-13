import React from 'react';
import {notFound} from 'next/navigation';
const NotFoundComponent = () => {
  notFound();
  return <div>Esto ni lo vaz a ver</div>;
};

export default NotFoundComponent;
