"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 shadow-lg">
      {/* Logo */}
      <div className="flex-shrink-0 ml-6">
      <Image
  src="https://kitpro.site/vetheal/wp-content/uploads/sites/64/2022/01/european-cat-2021-08-26-18-00-50-utc.png"
  alt="European Cat"
  width={120}
  height={250}
  className="h-12"
/>

      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden mr-6">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Menu */}
      <ul className={`flex-col md:flex-row md:flex gap-6 items-center text-white mr-6 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
        <li className="relative group">
          <Link href="https://kitpro.site/vetheal/template-kit/home/">
             Home
          </Link>
        </li>
        <li>
          <Link href="/pages/about-us">
             About Us
          </Link>
        </li>
        <li className="relative group">
          <Link href="#">
             Services
          </Link>
          <ul className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block">
            <li>
              <Link href="#">
                 List 1
              </Link>
            </li>
            <li>
              <Link href="#">
                 List 2
              </Link>
            </li>
            <li>
              <Link href="#">
                 List 3
              </Link>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <Link href="#">
             Page
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
