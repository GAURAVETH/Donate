import React from 'react';
import Navbar from '../Utility/Navbar';
import Content from '../Utility/Content';
import HelpSection from '../Utility/HelpSection';
import About from '../Utility/About';

const Home = () => {
  return (
    <>
      <div className="sticky top-0 z-10 backdrop-blur-[20px]">
        <Navbar />
      </div>
      <div className="">
      <Content />
      <HelpSection />
      <About />
      </div>
    </>
  );
};

export default Home;
