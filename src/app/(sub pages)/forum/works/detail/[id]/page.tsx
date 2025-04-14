import React from 'react';

interface WorkDetailProps {
  params: { id: string };
}
const page = ({ params }: WorkDetailProps) => {
  return <div>id : {params.id}</div>;
};

export default page;
