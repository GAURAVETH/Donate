import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Utility/Navbar';
import IMG1 from "../../assets/medicines.png";
import IMG2 from "../../assets/cloths.png";
import IMG3 from "../../assets/grocery.png";
import IMG4 from "../../assets/books.png";
import IMG5 from "../../assets/electronic.png";
import IMG6 from "../../assets/furniture.png";

const Donation_Items_Links = [
    {
        id: 1,
        name: "Medicine Donate",
        link: "/medicine-donation",
        image: IMG1
    },
    {
        id: 2,
        name: "Cloth Donate",
        link: "/cloth-donation",
        image: IMG2
    },
    {
        id: 3,
        name: "Grocery Donate",
        link: "/grocery-donation",
        image: IMG3
    },
    {
        id: 4,
        name: "Books Donate",
        link: "/book-donation",
        image: IMG4
    },
    {
        id: 5,
        name: "Electronic Items Donate",
        link: "/electronic-donation",
        image: IMG5
    },
    {
        id: 6,
        name: "Furniture Donate",
        link: "/furniture-donation",
        image: IMG6
    },
]


const Donate_Items = () => {
    return (
        <>
            <div className="sticky top-0 z-10 backdrop-blur-[20px]">
                <Navbar />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10 min-h-[90vh] dark:bg-gray-900  place-items-center">
                {Donation_Items_Links.map(({ id, name, link, image }) => (
                    <Link key={id} to={link} className="hover:no-underline">
                        <div className="flex flex-col justify-between items-center bg-zinc-100 dark:bg-gray-800 dark:text-white p-4 rounded-lg transform hover:scale-105 transition-transform duration-300 h-full">
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

export default Donate_Items
