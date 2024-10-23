import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Utility/Navbar';
import IMG1 from "../../assets/donate-items.png";
import IMG2 from "../../assets/get-items.png";

const DonationLinks = [
  {
    id: 1,
    name: "Donate Items",
    link: "/donate-items",
    image: IMG1
  },
  {
    id: 2,
    name: "Get Items",
    link: "/get-items",
    image: IMG2
  }
]


const Donate = () => {
  return (
    <>
      <div className="sticky top-0 z-10 backdrop-blur-[20px]">
        <Navbar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-10 h-[90vh] place-items-center">
        {DonationLinks.map(({ id, name, link, image }) => (
          <Link key={id} to={link} className="hover:no-underline">
            <div className="flex flex-col justify-between items-center bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300 h-full">
              <h1 className="text-lg font-semibold mb-5" style={{ fontSize: '25px' }}>{name}</h1>
              <img src={image} alt={name} className="mb-2" style={{ width: '400px', height: '400px' }} />
              <p className="text-zinc-700 dark:text-zinc-300 pt-5">{name} content goes here...</p>
            </div>
          </Link>
        ))}
      </div>

    </>
  )
}

export default Donate
