import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleDefiClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.reload();
    }, 1000); // Thời gian chờ 1 giây trước khi load lại trang
  };

  return (
<div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#00d8ff]">
            <a href="#DEFI" onClick={handleDefiClick}>
              DEFI
            </a>
          </h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center">
            <li className="hover:text-blue-500 transition-transform transform">
              <a href="#Platform">Platform</a>
            </li>
            <li className="hover:text-blue-500 transition-transform transform">
              <a href="#Developers">Developers</a>
            </li>
            <li className="hover:text-blue-500 transition-transform transform">
              <a href="#Community">Community</a>
            </li>
            <li className="hover:text-blue-500 transition-transform transform">
              <a href="#About">About</a>
            </li>
            <button className="ml-4 transition-transform transform hover:scale-110 hover:opacity-70 "><a href="#UseDefi">Use Defi</a></button>
          </ul>
          
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li className="text-2xl">
              <a href="#Platform">Platform</a>
            </li>
            <li className="text-2xl">
              <a href="#Developers">Developers</a>
            </li>
            <li className="text-2xl">
              <a href="#Community">Community</a>
            </li>
            <li className="text-2xl">
              <a href="#About">About</a>
            </li>
            <button className="m-8 transition-transform transform hover:scale-110 ">Use Defi</button>
          </ul>
        </div>
      </div>
      {isLoading && <div className="loading-overlay"></div>}
    </div>
    
  );
};

export default Navbar;
