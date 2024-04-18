import React from "react";

const Footer = () => {
  const year = new Date();

  return (
    <section className="max-container bg-light-gray">
      <div className="flex justify-center items-center flex-col px-4 py-16 md:py-[7%]">
        <h1 className="text-center tracking-wide mb-4 text-xl min-[400px]:text-2xl min-[550px]:text-3xl sm:text-4xl md:text-[2.8rem] xl:text-[3.2rem] sm:mb-6 lg:mb-8 xl:mb-10">
          Would you like to hear from us?
        </h1>
        <h3 className="text-center leading-7 text-lg min-[550px]:text-xl sm:text-2xl md:text-[1.7rem] xl:text-3xl">
          Submit your email address for our newsletter
        </h3>

        <input
          type="email"
          name="email"
          placeholder="yourname@email.com"
          className="w-[250px] bg-transparent text-pencil-gray text-center text-lg outline-none px-4 py-2 mt-6 lg:mt-8 lg:text-xl xl:mt-12 "
        />
      </div>
      
      <ul className='w-full bg-dark-gray flex flex-col justify-center items-center px-[5%] py-4 text-center tracking-wide gap-2 sm:flex-row sm:justify-between '>
        <li className="text-pencil-gray ">All rights reserved &copy; {year.getFullYear()} </li>
        <li className="text-pencil-gray ">Developed by Dhruv Verma</li>
        <li className="text-pencil-gray ">Powered by Tailwind CSS</li>
      </ul>
    </section>
  );
};

export default Footer;
