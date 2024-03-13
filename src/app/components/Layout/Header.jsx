"use client"

import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <nav className="bg-[#121212] p-2 ">
      <div className="container mx-auto flex justify-between items-center">
      <Link legacyBehavior href="/">
            <h1 className="text-white   font-serif text-xl">HOME</h1>
          </Link>
        <div className="flex space-x-4">
          <Link legacyBehavior href="#PhotoSlider">
            <a className="text-white  font-serif text-xl">WORK</a>
          </Link>
          <Link legacyBehavior href="#contact">
            <a className="text-white  font-serif text-xl">CONTACT</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
