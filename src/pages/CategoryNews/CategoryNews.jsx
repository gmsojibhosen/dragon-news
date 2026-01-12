import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();
    console.log(id)
    return (
      <div>
            <h2 className='font-semibold text-xl'>Dragon News Home {id}</h2>
      </div>
    );
};

export default CategoryNews;