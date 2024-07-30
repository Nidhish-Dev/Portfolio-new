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
          <div className="ms-3 text-sm font-normal">Vist Contact Page: <Link to="/contact">"Contact"</Link></div>
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
      <div className="project-container">
      Projects Will be added soon!
      </div>
    </>
  )
}

export default Projects
