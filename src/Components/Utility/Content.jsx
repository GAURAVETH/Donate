import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
import IMG1 from "../../assets/img1.jpg";
import IMG2 from "../../assets/img2.jpg";
import IMG3 from "../../assets/img3.jpg";
import IMG4 from "../../assets/img4.jpg";
import IMG5 from "../../assets/img5.jpg";
import IMG6 from "../../assets/img6.jpg";
import '../../index.css';

const Content = () => {
  const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  // Automatic sliding effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 6000); // Slide every 6 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Function to go to the next slide
  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsTransitioning(true);
  };

  // Reset position when the last image slides out
  useEffect(() => {
    if (currentIndex === images.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 6000); // Timeout matches the transition time for smooth effect
    }
  }, [currentIndex, images.length]);

  // GSAP animation setup
  const contentRef = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const donateRef = useRef(null);
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();
    tl.from(contentRef.current, {
      scale: 0,
      duration: 0.5,
      delay: 2,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out"
    });

    tl.from(h1Ref.current, {
      x: -30,
      duration: 0.2,
      delay: 0.2,
      opacity: 0,
      stagger: 0.2,
    });

    tl.from(h2Ref.current, {
      x: 30,
      duration: 0.2,
      delay: 0.2,
      opacity: 0,
      stagger: 0.2,
    });

    tl.from(donateRef.current, {
      scale: 0,
      duration: 0.4,
      delay: 0.2,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Hover effect using GSAP for scaling
    const handleMouseEnter = () => {
      gsap.to(donateRef.current, {
        scale: 1.1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(donateRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    // Add event listeners
    const donateButton = donateRef.current;
    donateButton.addEventListener('mouseenter', handleMouseEnter);
    donateButton.addEventListener('mouseleave', handleMouseLeave);

    // Scroll-triggered animation
    const isMobile = window.innerWidth < 768; // Adjust based on your mobile breakpoint
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: isMobile ? 50 : 100 }, // Adjust Y value for mobile
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 40%",
          end: "bottom 30%",
          scrub: true,
        },
      }
    );

    // Cleanup event listeners on unmount
    return () => {
      donateButton.removeEventListener('mouseenter', handleMouseEnter);
      donateButton.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={contentRef} className="relative bg-background text-center">
      {/* Image slider container */}
      <div className="relative items-center overflow-hidden">
        <div
          ref={sliderRef}
          className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {/* Loop through the images array twice for the seamless effect */}
          {[...images, ...images].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-auto max-h-screen object-cover flex-shrink-0"
              style={{ width: "100%", height: "100vh" }}
            />
          ))}
        </div>
        {/* Text and button container */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-background bg-opacity-50 p-8">
          <h2 ref={h1Ref} className="text-3xl text-white caveat-font mb-2 font-playfair custom-underline">Helping Them Today</h2>
          <h1 ref={h2Ref} className="text-8xl font-bold text-primary mb-4">Help the Poor <br /> in Need</h1>
          <Link
            to="/donation"
            ref={donateRef}
            className="flex justify-center items-center gap-2 mt-3 py-3 px-8 rounded-full bg-primary text-xl font-semibold transition-colors duration-500"
          >
            <h2>Donate</h2>
          </Link>
        </div>
      </div>

      {/* Additional Content */}
      <div ref={boxRef} className="relative top3 sm:ml-5 sm:mr-5 xl:ml-52 xl:mr-52 bg-white shadow-lg rounded-md border-2">
        {/* Container for cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-6 rounded-2xl">
          {/* Card 1 */}
          <div className="p-9 text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <img alt="Become Volunteer" src="https://openui.fly.dev/openui/24x24.svg?text=🤝" className="w-full h-full" />
            </div>
            <h3 className="text-lg font-semibold">Become Volunteer</h3>
            <p className="mt-2 text-gray-500">
              Become a volunteer if you are motivated & ready to support people and the community.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-9 text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <img alt="Quick Fundraise" src="https://openui.fly.dev/openui/24x24.svg?text=💰" className="w-full h-full" />
            </div>
            <h3 className="text-lg font-semibold">Quick Fundraise</h3>
            <p className="mt-2 text-gray-500">
              The simplest and quickest way to make a donation, so you can support people in need.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-9 text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <img alt="Start Donating" src="https://openui.fly.dev/openui/24x24.svg?text=🎁" className="w-full h-full" />
            </div>
            <h3 className="text-lg font-semibold">Start Donating</h3>
            <p className="mt-2 text-gray-500">
              Start donating for our campaigns to support poor people and children returning to school.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
