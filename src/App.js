import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { useNavigation } from 'react-router-dom';
import Spinar from './components/Spinar';

const App = () => {
  const navigation = useNavigation();
  if (navigation.state === 'loading') {
    return <Spinar></Spinar>;
  }
  return (
    <>
      <Navbar></Navbar>
      <div className=" min-h-[calc(100vh-145px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
