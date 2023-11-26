import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';
import { useNavigation } from 'react-router-dom';
import Spinar from '../Spinar';
const Books = () => {
  const { books } = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === 'loading') {
    return <Spinar></Spinar>;
  }
  return (
    <div className="grid my-12 px-12 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {books.map(book => (
        <Book book={book}></Book>
      ))}
    </div>
  );
};

export default Books;
