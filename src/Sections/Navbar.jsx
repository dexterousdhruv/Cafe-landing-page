import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false)

 
  const openMenu = () => {
    menu ? setMenu(false) : setMenu(true)
  }

  

  return (
    <header className="= max-container z-[5] absolute top-10 left-[50%] translate-x-[-50%] max-sm:w-full justify-center flex ">
      <nav className=" max-w-screen-lg mx-auto relative max-sm:w-full max-sm:flex justify-center text-lg text-white ">

      <ul className={`max-sm:bg-[rgba(255,255,255,0.1)] max-sm:backdrop-blur-[15px] max-sm:shadow-xl max-sm:rounded-lg sm:flex justify-center items-center text-nowrap gap-x-12 md:gap-x-20 sm:py-6 max-sm:absolute max-sm:top-[105%] max-sm:left max-sm:bg- max-sm:w-full max-sm:opacity-0 max-sm:pointer-events-none duration-150 ${menu ? 'max-sm:opacity-100 max-sm:pointer-events-auto ' : ""} `}>
          <li className="hover:opacity-85 duration-150 max-sm:nav-item">Process</li>
          <li className="hover:opacity-85 max-sm:nav-item duration-150">Our Menu</li>
          <li className="w-40 hidden sm:block"></li>
          <li className="hover:opacity-85  max-sm:nav-item duration-150">Find us</li>
          <li className="hover:opacity-85 max-sm:nav-item duration-150 ">Contact </li>
        </ul>
        <img
          src={logo}
          alt="logo"
          className="sm:absolute top-[50%] left-[50%] z-10 w-20 sm:translate-x-[-50%] sm:translate-y-[-50%]"
          onClick={openMenu}
        />
      </nav>
    </header>
  );
};

export default Navbar;
