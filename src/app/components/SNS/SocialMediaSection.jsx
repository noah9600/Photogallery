import React from 'react';
import { FaTwitter, FaInstagram,  } from 'react-icons/fa';

const SocialMediaSection = () => {
  return (
    <div className="container p-12 flex justify-center relative">
      <div className="flex flex-row items-center">
        <a
          href="https://twitter.com/your_twitter_handle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600"
        >
          <FaTwitter size="50px" />
        </a>
        <a
          href="https://www.instagram.com/your_instagram_handle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 hover:text-red-600 ml-9"
        >
          <FaInstagram size="50px" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaSection;
