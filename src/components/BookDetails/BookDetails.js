import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';
import Spinar from '../Spinar';
const BookDetails = () => {
  const [isToggle, setIsToggle] = useState(true);
  const book = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === 'loading') {
    return <Spinar></Spinar>;
  }
  const {
    year,
    url,
    title,
    rating,
    publisher,
    price,
    language,
    desc,
    image,
    authors,
  } = book;

  return (
    <div className="md:px-12 my-12 w-11/12 mx-auto p-8 border-2 border-slate-200 rounded flex flex-col md:flex-row justify-between items-center">
      <div>
        <img src={image} alt="" />
      </div>
      <div className=" w-full md:w-2/4">
        <span className="bg-yellow-400 px-5  rounded-3xl">Brand New</span>
        <h1 className="text-3xl font-semibold">{title}</h1>
        <div className="my-5">
          <p>
            <span className="font-semibold">Author: </span> {authors}
          </p>
          <p>
            <span className="font-semibold">Publisher: </span> {publisher}
          </p>
          <p>
            <span className="font-semibold">Year: </span> {year}
          </p>
          <p>
            <span className="font-semibold">Ratings: </span> {rating}
          </p>
        </div>
        <p>
          {isToggle ? desc.slice(0, 100) : desc}......
          <span
            className="text-blue-600 font-semibold cursor-pointer"
            onClick={() => setIsToggle(!isToggle)}
          >
            {isToggle ? 'Readmore' : 'Readless'}
          </span>
        </p>
        <div className="my-6 flex justify-between items-center w-fit">
          <a
            className="px-8 me-5 py-3 rounded-md bg-blue-400 hover:bg-blue-600"
            href={url}
          >
            Buy Now
          </a>
          <p className="text-2xl">
            <span className="font-semibold">Price: </span> {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
