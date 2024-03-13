import Image from 'next/image';
import React from 'react';

const Photos = () => {
  return (
    <div className="flex  justify-center mb-10">
      <div className="lg:w-1/2 md:w-1/2 ">
        <div className=" h-1/2 ">
          <Image
            className="w-full h-auto "
            src="/images/IMG_7533.jpg"
            alt="Image"
            width={640} // Specify the width here
            height={427} // Optionally specify the height
            layout="responsive" // Specify the layout
            objectFit="cover" // Specify the objectFit
          />
        </div>
      </div>
    </div>
  );
};

export default Photos;
