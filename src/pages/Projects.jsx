import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };
  return (
    < >
      <Navbar />
      <div className="toast">
        <div 
          id="toast-default" 
          className={`flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 ${!isVisible ? 'hidden' : ''}`} 
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
            {/* Replaced SVG with an image */}
            <img src="/circle-user-round.svg" alt="Folder icon" className=" w-4 h-4" />
            <span className="sr-only">Folder icon</span>
          </div>
          <div className="ms-3 text-sm font-normal">Visit Contact Page: <Link to="/contact">"Contact"</Link></div>
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            onClick={handleClose}
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
          </button>
        </div>
      </div>


<div className="project-container mt-12 mb-10 flex flex-wrap gap-4">
{/* 1st */}

<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
  >
    <img
      src="/typeform.png"
      alt="card-image"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="p-4 sm:p-6">
    <h5 className="block mb-2 font-sans text-lg sm:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Typeform
    </h5>
    <p className="block font-sans text-sm sm:text-base antialiased font-light leading-relaxed text-inherit">
    The Typeform clone is developed with Next.js, Node.js, MongoDB, Tailwind CSS. It offers a user-friendly interface for customizable form creation, featuring a modern responsive design and robust data management using MongoDB.</p>
  </div>
  <div className="p-4 sm:p-6 pt-0">
    <a target='/' href="https://typeform-nr.vercel.app/"><button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button"
    >
      Visit &gt;
    </button></a>
  </div>
</div>

<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
  >
    <img
      src="/bento.png"
      alt="card-image"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="p-4 sm:p-6">
    <h5 className="block mb-2 font-sans text-lg sm:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Bento
    </h5>
    <p className="block font-sans text-sm sm:text-base antialiased font-light leading-relaxed text-inherit">
    Bento is designed and developed using Next.js, Node.js, MongoDB, and Tailwind CSS. It provides an intuitive interface for organizing and sharing digital content, enhanced by a sleek, responsive design and effective data management.</p>
  </div>
  <div className="p-4 sm:p-6 pt-0">
    <a target='/' href="https://bento-clone-nr.vercel.app/"><button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button"
    >
      Visit &gt;
    </button></a>
  </div>
</div>

<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
  >
    <img
      src="/cuvette.png"
      alt="card-image"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="p-4 sm:p-6">
    <h5 className="block mb-2 font-sans text-lg sm:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Cuvette
    </h5>
    <p className="block font-sans text-sm sm:text-base antialiased font-light leading-relaxed text-inherit">
    Cuvette, created with React, Node.js, MongoDB, and Tailwind CSS, features an instinctive interface for job creation, viewing, and applications. Its sleek, responsive design is complemented by efficient data management.</p>
  </div>
  <div className="p-4 sm:p-6 pt-0">
    <a target='/' href="https://cuvette-job.vercel.app/"><button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button"
    >
      Visit &gt;
    </button></a>
  </div>
</div>

<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
  >
    <img
      src="/musicSchool.jpg"
      alt="card-image"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="p-4 sm:p-6">
    <h5 className="block mb-2 font-sans text-lg sm:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Music School
    </h5>
    <p className="block font-sans text-sm sm:text-base antialiased font-light leading-relaxed text-inherit">
    The website is a music learning platform built with Next.js, offering various courses and resources for users to enhance their skills. It features a responsive design, providing a seamless learning experience across devices.</p>
  </div>
  <div className="p-4 sm:p-6 pt-0">
    <a target='/' href="https://music-schooldev.vercel.app/"><button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button"
    >
      Visit &gt;
    </button></a>
  </div>
</div>

<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
  >
    <img
      src="/chatting.jpg"
      alt="card-image"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="p-4 sm:p-6">
    <h5 className="block mb-2 font-sans text-lg sm:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Chatify
    </h5>
    <p className="block font-sans text-sm sm:text-base antialiased font-light leading-relaxed text-inherit">
    The application is a chat group platform developed with React and Firebase, allowing users to engage in conversations with others using their names. It features Google authentication for seamless login and user management.</p>
  </div>
  <div className="p-4 sm:p-6 pt-0">
    <a target='/' href="https://nidhish-dev.github.io/Chatify/"><button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button"
    >
      Visit &gt;
    </button></a>
  </div>
</div>

{/* 2nd */}
<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
  >
    <img
      src="/moviesx.jpg"
      alt="card-image"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="p-4 sm:p-6">
    <h5 className="block mb-2 font-sans text-lg sm:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      MoviesX
    </h5>
    <p className="block font-sans text-sm sm:text-base antialiased font-light leading-relaxed text-inherit">
    Built with React, this application allows users to search for movies and view their release years. It leverages API integration to fetch and display detailed movie information, enhancing user interaction and data accessibility.</p>
  </div>
  <div className="p-4 sm:p-6 pt-0">
    <a target='/' href="https://nidhishr7.github.io/MoviesX/"><button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button"
    >
      Visit &gt;
    </button></a>
  </div>
</div>

{/* 3rd */}
<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
  >
    <img
      src="/neeraj.jpg"
      alt="card-image"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="p-4 sm:p-6">
    <h5 className="block mb-2 font-sans text-lg sm:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Neeraj's Portfolio
    </h5>
    <p className="block font-sans text-sm sm:text-base antialiased font-light leading-relaxed text-inherit">
    This project focuses on frontend development with React. It serves as a portfolio, featuring an integrated Figma prototype to showcase design and interactive elements, demonstrating both visual and technical skills.</p>
  </div>
  <div className="p-4 sm:p-6 pt-0">
    <a target='/' href="https://neeraj-design.github.io/Portfolio/"><button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button"
    >
      Visit &gt;
    </button></a>
  </div>
</div>

{/* 4th */}

<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
  >
    <img
      src="/contactme.png"
      alt="card-image"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="p-4 sm:p-6">
    <h5 className="block mb-2 font-sans text-lg sm:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Contact ME
    </h5>
    <p className="block font-sans text-sm sm:text-base antialiased font-light leading-relaxed text-inherit">
    This webpage is a contact form developed with React, allowing users to enter their details. Submitted information is securely sent and stored in a Firebase database, ensuring efficient data management and retrieval.</p>
  </div>
  <div className="p-4 sm:p-6 pt-0">
    <a target='/' href="https://nidhish-dev.github.io/Contact_me/"><button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button"
    >
      Visit &gt;
    </button></a>
  </div>
</div>

{/* 5th */}
<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
  >
    <img
      src="/weather.jpg"
      alt="card-image"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="p-4 sm:p-6">
    <h5 className="block mb-2 font-sans text-lg sm:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Weather
    </h5>
    <p className="block font-sans text-sm sm:text-base antialiased font-light leading-relaxed text-inherit">
    This weather app, created using HTML, CSS, and JavaScript, fetches weather data via API. Users can search for weather conditions and view detailed information for numerous locations, providing comprehensive weather insights.</p>
  </div>
  <div className="p-4 sm:p-6 pt-0">
    <a target='/' href="https://nidhish-dev.github.io/Weather/"><button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button"
    >
      Visit &gt;
    </button></a>
  </div>
</div>

{/* 6th */}
<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
  >
    <img
      src="/microsoft.jpg"
      alt="card-image"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="p-4 sm:p-6">
    <h5 className="block mb-2 font-sans text-lg sm:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Microsoft Clone
    </h5>
    <p className="block font-sans text-sm sm:text-base antialiased font-light leading-relaxed text-inherit">
    I created a basic clone of the Microsoft website using HTML and CSS. This project replicates the site’s layout and design, demonstrating fundamental web development skills and proficiency in front-end technologies.</p>
  </div>
  <div className="p-4 sm:p-6 pt-0">
    <a target='/' href="https://nidhish-dev.github.io/Microsoft_clone/"><button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button"
    >
      Visit &gt;
    </button></a>
  </div>
</div>
 </div>
    </>
  )
}

export default Projects
