import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
      <div className="flex items-center bg-base-300 p-4 mt-7.5">
        <p className="bg-secondary text-white py-2 px-3 font-semibold text-lg">
          Letest
        </p>
        <Marquee pauseOnHover = {true} speed={50} className='flex gap-5'>
          <p className=" text-primary py-2 px-3 font-semibold text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, asperiores enim perspiciatis
          </p>

          <p className=" text-primary py-2 px-3 font-semibold text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, asperiores enim perspiciatis
          </p>

          <p className=" text-primary py-2 px-3 font-semibold text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, asperiores enim perspiciatis
          </p>
        </Marquee>
      </div>
    );
};

export default LatestNews;