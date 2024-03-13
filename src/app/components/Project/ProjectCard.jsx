import Link from 'next/link';
import React from 'react';

const ProjectCard = ({imgUrl, title}) => {
    return (
        <div className='max-w-[1000px] h-[700px]  m-auto py-16 px-4 relative'>
          <div className='max-w-sm h-full '
               style={{background: `url(${imgUrl})`  }} >
       </div>
          <div className='text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4'>
              <h5 className='text-xl font-semibold mb-2'>{title}</h5>
          </div>
      </div>
    )
  }
  
export default ProjectCard;
