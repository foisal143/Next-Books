import React, { useState } from 'react';
import { BoltIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <nav className="h-20 flex px-5 justify-between items-center bg-slate-100 md:px-12">
      <Link to="/">
        <div className="flex w-fit px-2 justify-center items-center">
          <BoltIcon className="h-5 w-5 mt-1 me-1 text-blue-500"></BoltIcon>
          <span className="font-semibold text-3xl">nextPage</span>
        </div>
      </Link>
      {/* resoponsive for small devaice */}
      <span
        onClick={() => setIsopen(!isOpen)}
        className="md:hidden cursor-pointer"
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6 "></XMarkIcon>
        ) : (
          <Bars3Icon className="w-6 h-6 "></Bars3Icon>
        )}
      </span>
      <div
        className={`absolute top-20 ${
          isOpen ? 'right-0' : '-right-96'
        }  md:static duration-200 md:w-1/4 md:first-letter flex justify-evenly p-5 bg-slate-100 md:p-0 flex-col md:flex-row items-center`}
      >
        <NavLink
          to="/"
          className={({ isActive }) => isActive && 'text-blue-500'}
        >
          Home
        </NavLink>
        <NavLink
          to="/books"
          className={({ isActive }) => isActive && 'text-blue-500'}
        >
          Books
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive && 'text-blue-500'}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
