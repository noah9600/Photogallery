import Image from 'next/image';
import React from 'react';

const Photos = () => {
  return (
    <div className="flex  justify-center mb-10">
      <div className="lg:w-1/2 md:w-1/2 ">
        <div className=" h-1/2 ">
          <Image
            className="w-full h-auto "
            src="/images/g.jpg"
            alt="Image"
            width={640}
            height={427}
            layout="responsive"
            objectFit="cover"

          />
        </div>
      </div>
    </div>
  );
};

export default Photos;
