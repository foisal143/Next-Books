import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import Lottie from 'lottie-react';
import animate from './home.json';
const Home = () => {
  return (
    <div className="md:flex justify-between md:px-12 items-center flex-col-reverse md:flex-row">
      <div className="md:w-1/2 w-full p-5">
        <span className="bg-yellow-300 px-5 font-semibold text-sm rounded-xl">
          On Sale!
        </span>
        <h1 className="text-[39px] font-bold">
          A reader lives a <br /> thousand lives{' '}
          <span className="text-sky-500">before he dies</span>
        </h1>
        <br />
        <p className=" w-11/12 text-xl">
          Books are a uniquely portable magic. Books serve to show a man that
          those original thoughts of his aren’t very new after all. The man who
          does not read good books is no better than the man who can’t.
        </p>
        <div className="flex justify-between  w-fit my-5 items-center">
          <Link to="/books">
            <button className="px-8 flex justify-evenly uppercase py-4 rounded-md bg-blue-400   h-fit items-center hover:bg-blue-700 text-white">
              Visit Store{' '}
              <ShoppingCartIcon className="w-5 ms-1 h-5"></ShoppingCartIcon>
            </button>
          </Link>
          <Link to="/about">
            <span className="ms-5 hover:text-blue-500">Learn more</span>
          </Link>
        </div>
      </div>
      <div className="md:w-2/5">
        <Lottie animationData={animate} loop={true}></Lottie>
      </div>
    </div>
  );
};

export default Home;
