import React from 'react';
import Image from "../../assets/img3.jpg"; // Ensure the image path is correct
import '../../index.css'; // Tailwind CSS import

const HelpSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-40 bg-white py-40 px-8 md:px-20 lg:px-52">
            {/* Left Section - Image */}
            <div className="relative lg:w-1/4">
                {/* Orange background behind the image */}
                <div className="absolute inset-0  bg-orange-500 rounded-xl shadow-lg -ml-5 -mb-5 mr-5 mt-5"></div>
                
                {/* Image */}
                <img
                    src={Image}
                    alt="Helping Poor"
                    className="relative w-full h-auto max-h-[500px] rounded-xl object-cover shadow-lg"
                />
            </div>

            {/* Right Section - Text */}
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12 text-gray-800">
                <h3 className="text-orange-500 font-bold mb-2">Helping Today</h3>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Our Goal is to Help Poor People</h1>
                <p className="text-gray-600 mb-4">
                    Today, we supported the education of 20000 children born in poor families across 12 underdeveloped countries over the world.
                    In the future, our goals are:
                </p>
                <ul className="list-none mb-6 space-y-3">
                    <li className="flex items-center text-gray-600">
                        <span className="bg-orange-500 text-white p-2 rounded-full mr-2">✔️</span>
                        Have enough food for life.
                    </li>
                    <li className="flex items-center text-gray-600">
                        <span className="bg-orange-500 text-white p-2 rounded-full mr-2">✔️</span>
                        Poor children can return to school.
                    </li>
                    <li className="flex items-center text-gray-600">
                        <span className="bg-orange-500 text-white p-2 rounded-full mr-2">✔️</span>
                        Support poor people to have better jobs.
                    </li>
                </ul>

                {/* Bottom Statistics */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center">
                    <div className="flex items-center space-x-3">
                        <div className="text-orange-500 text-3xl font-bold">86,700</div>
                        <div className="text-gray-600">Successful Campaigns</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpSection;
