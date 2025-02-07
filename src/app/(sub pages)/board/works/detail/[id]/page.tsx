import React from 'react';

interface WorkDetailProps {
  params: { id: string };
}
const Detail = ({ params }: WorkDetailProps) => {
  return <div>id : {params.id}</div>;
};

export default Detail;
