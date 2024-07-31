import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { FaCopy } from "react-icons/fa";
import './Pages.css';
import { Link } from "react-router-dom";

const About = () => {
  const [copied, setCopied] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 2000);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <Navbar />
      <div className="toast">
        <div 
          id="toast-default" 
          className={`flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 ${!isVisible ? 'hidden' : ''}`} 
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
            {/* Replaced SVG with an image */}
            <img src="/folder-.svg" alt="Folder icon" className=" w-4 h-4" />
            <span className="sr-only">Folder icon</span>
          </div>
          <div className="ms-3 text-sm font-normal">Browse Projects: <Link to="/projects">"Projects"</Link></div>
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
      <div className="about-container">
        <div className="about-heading">
          <div className="vertical-line"></div>
          <p>ABOUT</p>
        </div>
        <div className="about-text">
          I&apos;m Nidhish Rathore, a Full-Stack software engineer with a robust background in the MERN stack, encompassing MongoDB, Express.js, React, and Node.js, as well as Java for backend development. My expertise also includes working with Next.js to build high-performance, server-side rendered applications. I have a proven track record in designing and implementing dynamic web solutions and scalable backend systems. With a keen eye for detail and a passion for technology, I am committed to delivering exceptional user experiences and driving projects from concept to successful completion.
        </div>
        <div className="skill-heading">
          <div className="vertical-line"></div>
          <p>JOURNEY</p>
        </div>
        <div className='journey-container'>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Class 10th</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        I completed my Class 10th in 2022, from Hisar, Haryana.
        </p>
        
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2024</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Class 12</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        I completed my Class 12th in 2024, from Delhi, India.
        </p>
      </li>
      <li className="ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none  text-white">2024</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">First Year</h3>
        <p className="text-base font-normal text-white ">
        I am currently in my first year of B.Tech in Computer Science and Engineering at SRM University, KTR (Chennai), pursuing my undergraduate studies and exploring various aspects of technology.
        </p>
      </li>
    </ol>
</div>

        <div className="skill-heading">
          <div className="vertical-line"></div>
          <p>SKILLS</p>
        </div>
        <div className="skills">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JAVASCRIPT</div>
          <div className="skill">JAVA</div>
          <div className="skill">REACT</div>
          <div className="skill">NEXTJS</div>
          <div className="skill">NODEJS</div>
          <div className="skill">EXPRESS</div>
          <div className="skill">MONGODB</div>
          <div className="skill">DOCKER</div>
          <div className="skill">FIREBASE</div>
          <div className="skill">FIGMA</div>
          <div className="skill">PHOTOSHOP</div>
        </div>
        <div className="contact-heading">
          <div className="vertical-line"></div>
          <p>CONTACT</p>
        </div>
        <div className="contactsection">
          <div>
            <div className='contact-items'>
              <p>
                codenidhish07@gmail.com
                <span
                  className="copy-button"
                  onClick={() => handleCopy("codenidhish07@gmail.com")}
                >
                  <FaCopy
                    className={copied === "codenidhish07@gmail.com" ? "copied" : ""}
                  />
                </span>
              </p>
            </div>
            <div className='contact-items'>
              <p>
                +91 870-8295706
                <span
                  className="copy-button"
                  onClick={() => handleCopy("+91 870-8295706")}
                >
                  <FaCopy
                    className={copied === "+91 870-8295706" ? "copied" : ""}
                  />
                </span>
              </p>
            </div>
          </div>
          <div className="githublink">
            <a target='/' href="https://github.com/Nidhish-Dev">
              <img className="aboutgithub" src="/github.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
