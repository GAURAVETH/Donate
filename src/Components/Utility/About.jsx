import React from 'react';
import Volunteer from "../../assets/volunteer2.jpg";

const About = () => {
    return (
        <div>
            <section className="py-12 bg-gray-100 dark:bg-gray-800">
                <div className="container mx-auto px-6 lg:px-12">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
                        About Us
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-10 items-center">

                        {/* Left Section: Image */}
                        <div className="lg:w-1/2">
                            <img
                                src={Volunteer}
                                alt="Volunteers helping"
                                className="rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Right Section: Text Content */}
                        <div className="lg:w-1/2">
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                                At <span className="font-bold">Donate</span>, our mission is to help
                                underprivileged communities by offering support in areas such as
                                education, food, and employment. With your help, we've already
                                impacted the lives of 20,000 children across 12 underdeveloped
                                countries, ensuring they have access to better opportunities and a brighter future.
                            </p>
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                                Our vision is simple yet powerful: to empower the poor and needy,
                                providing them with the resources they need to lead better lives.
                                Through our efforts, we aim to:
                            </p>
                            <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 mb-6">
                                <li>Ensure every person has access to enough food for survival.</li>
                                <li>Help children return to school and complete their education.</li>
                                <li>Support individuals in finding sustainable employment.</li>
                            </ul>
                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                We believe in the power of community, and with your continued support,
                                we can make the world a better place for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Terms and Conditions & Footer */}
            <section className="flex items-center justify-between bg-gray-900 sm:px-2 md:px-10 lg:px-52 py-4 text-center">
                <p className="text-sm text-gray-400">
                    <a href="/terms-and-conditions" className="underline hover:text-white">
                        Terms and Conditions
                    </a>
                </p>
                <p className="text-sm text-gray-400">
                    Made by 
                    <a href="https://www.codzgaurav.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white ml-1">
                        CodzGaurav
                    </a>
                </p>
                <p className="text-sm text-gray-400">
                    &copy; 2024 Donate. All rights reserved.
                </p>
            </section>
        </div>
    );
};

export default About;
