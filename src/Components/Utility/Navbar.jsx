import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react'; 
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import useLogout from "../../hooks/useLogout";
import DarkMode from '../DarkMode';
import { useAuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { authUser } = useAuthContext(); // Use authUser from AuthContext
  const { logout } = useLogout(); // Use logout from useLogout
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  const imgRef = useRef(null);
  const pRef = useRef(null);
  const navRef = useRef(null);

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
  }, []); 


  const NavLinks = authUser
    ? [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Organization", link: "/organization" },
        { id: 3, name: "Feedback", link: "/feedback" },
        { id: 4, name: "Contact", link: "/contact" },
        { id: 5, name: "Logout", action: logout }, // Add logout function
      ]
    : [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Contact", link: "/contact" },
        { id: 3, name: "Login", link: "/login" },
      ];

  return (
    <div className="z-[9999] text-black dark:bg-gray-900 dark:text-white duration-300 py-2">
      <div className="container py-0 md:py-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img ref={imgRef} src={Logo} alt="Logo" className='w-20' />
            <p ref={pRef} className="text-3xl transition-colors duration-500 font-bold">
              Donate
            </p>
          </div>

          <nav ref={navRef} className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map(({ id, name, link, action }) => (
                <li key={id} className="py-4">
                  {action ? (
                    <button
                      onClick={action} // Use action for logout
                      className="text-xl font-semibold hover:text-purple-500 py-2 border-b-2 border-transparent hover:border-orange-500 transition-colors duration-500"
                    >
                      {name}
                    </button>
                  ) : (
                    <Link
                      to={link}
                      className="text-xl font-semibold hover:text-purple-500 py-2 border-b-2 border-transparent hover:border-orange-500 transition-colors duration-500"
                    >
                      {name}
                    </Link>
                  )}
                </li>
              ))}

              <DarkMode />
            </ul>
          </nav>

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

        {showMenu && (
          <nav ref={navRef} className="md:hidden block">
            <ul className="flex flex-col items-center gap-4 mt-4">
              {NavLinks.map(({ id, name, link, action }) => (
                <li key={id}>
                  {action ? (
                    <button
                      onClick={action} // Use action for logout
                      className="text-xl font-semibold hover:text-purple-500 py-2 hover:border-orange-500 border-b-2 border-transparent transition-colors duration-500"
                    >
                      {name}
                    </button>
                  ) : (
                    <Link
                      to={link}
                      className="text-xl font-semibold hover:text-purple-500 py-2 hover:border-orange-500 border-b-2 border-transparent transition-colors duration-500"
                    >
                      {name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
