import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [setShowMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-4 py-6 md:px-20 lg:px-32 bg-transparent">
        <img
          className="w-28 md:w-40 lg:w-44 xl:w-52"
          src={assets.logo}
          alt=""
        />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Homebase
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            Our Essence
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Our Creations
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Voices of Trust
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
          Sign Up
        </button>

        <img
          src={assets.menu_icon}
          className="md:hidden w-7 ml-auto cursor-pointer"
          alt=""
          onClick={() => setShowMobileMenu(true)}
        />

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            showMobileMenu ? "fixed w-full" : "h-0 w-0"
          }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
        >
          <div className="flex justify-end p-6 cursor-pointer">
            <img
              src={assets.cross_icon}
              className="w-6"
              alt=""
              onClick={() => setShowMobileMenu(false)}
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Header"
              className="px-4 py-2 rounded-full inline-block"
            >
              Homebase
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#About"
              className="px-4 py-2 rounded-full inline-block"
            >
              Our Essence
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Projects"
              className="px-4 py-2 rounded-full inline-block"
            >
              Our Creations
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Testimonials"
              className="px-4 py-2 rounded-full inline-block"
            >
              Voices of Trust
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
