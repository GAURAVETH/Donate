import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react'; // Make sure to import the custom hook
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { GoHeartFill } from "react-icons/go";
import DarkMode from '../DarkMode';

const NavLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Organization", link: "/organization" },
  { id: 3, name: "Feedback", link: "/feedback" },
  { id: 4, name: "Contact", link: "/contact" },
  { id: 5, name: "Login", link: "/login" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  const imgRef = useRef(null);
  const pRef = useRef(null);
  const navRef = useRef(null);

  // Using the custom useGSAP hook
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(imgRef.current, {
      y: -30,
      duration: 0.6,
      delay: 0.3,
      opacity: 0,
      stagger: 0.2,
    });

    tl.from(pRef.current, {
      y: -30,
      duration: 0.3,
      delay: 0.3,
      opacity: 0,
      stagger: 0.2,
    });

    tl.from(navRef.current.children, {
      y: -30,
      duration: 0.3,
      delay: 0.3,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out"
    });



  }, []);  // No dependencies, so the animation runs once on mount

  return (
    <div className="z-[9999] text-black dark:bg-gray-900 dark:text-white duration-300 py-2 ">
      <div className="container py-0 md:py-0">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img ref={imgRef} src={Logo} alt="Logo" className='w-20' />
            <p ref={pRef} className="text-3xl transition-colors duration-500 font-bold">
              Donate
            </p>
          </div>

          {/* Desktop Menu Section */}
          <nav className="hidden md:block">
            <ul ref={navRef} className="flex items-center gap-8">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link to={link} className="text-xl font-semibold hover:text-purple-500 py-2 hover:border-primary border-b-2 border-transparent transition-colors duration-500">
                    {name}
                  </Link>
                </li>
              ))}
              <div className="flex justify-center items-center gap-2 p-3 rounded-full bg-primary text-xl font-semibold transition-colors duration-500">
                <GoHeartFill style={{ fill: "white" }} size={30} />
                Donation
              </div>

              {/* Dark Mode Toggle */}
              <DarkMode />
            </ul>
          </nav>

          {/* Mobile View Sidebar */}
          <div className="md:hidden block">
            <div className="flex items-center gap-4">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer" size={30} />
              ) : (
                <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer" size={30} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
