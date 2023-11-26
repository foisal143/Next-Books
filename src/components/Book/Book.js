import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';
import Spinar from '../Spinar';
const Book = ({ book }) => {
  const navigation = useNavigation();
  if (navigation.state === 'loading') {
    return <Spinar></Spinar>;
  }
  const { title, price, isbn13, image, subtitle } = book;
  return (
    <Link to={`/books/${isbn13}`}>
      <div className="relative  shadow-md transform transition-all hover:-translate-y-2 duration-200 rounded-md cursor-pointer overflow-hidden">
        <img className=" object-cover h-80 w-full" src={image} alt="" />
        <div className="bg-black opacity-0 h-full hover:opacity-100 transition-all duration-200 px-6  bg-opacity-50 text-white absolute inset-0 flex flex-col items-baseline justify-between">
          <div>
            <h2 className="text-xl font-bold  py-4">{title}</h2>
            <p>{subtitle.slice(0, 50)}...</p>
          </div>

          <p className="  mb-5">Price: {price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
