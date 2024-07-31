import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./Pages.css";

const main = () => {
  return (
    <>
      <Navbar />

      <div className="main-container">
        <div className="maintext">
          <p>Turning ideas into real</p>
          <p>
            life <span>products </span>is my
          </p>
          <p>calling.</p>
        </div>
        <Link to="/projects">
          <div className="viewProjectsBtn">View Projects</div>
        </Link>
      </div>
      <div className="know-more " style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <p>Dive Into My Journey -
        <Link to="/about">ABOUT</Link></p>
      </div>
      {/* <hr className="main-hr" /> */}
      <div className="repoHeading">
          <div className="vertical-line"></div>
          <p>Some Popular Repositories</p>
        </div>
        <p className="repoHeading"></p>
      <div className="repo-container mt-8 mb-10 flex flex-wrap gap-4">
{/* 1st */}

<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
  >
    <img
      src="/repo-nodejs.jpg"
      alt="card-image"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="p-4 sm:p-6">
    <h5 className="block mb-2 font-sans text-lg sm:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      NODEJS
    </h5>
    <p className="block font-sans text-sm sm:text-base antialiased font-light leading-relaxed text-inherit">
    I have all my Node.js and backend project code stored in this repository, containing all the essential files, configurations, and dependencies for development and deployment.</p>
  </div>
  <div className="p-4 sm:p-6 pt-0">
    <a target='/' href="https://github.com/Nidhish-Dev/NodeJS"><button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button"
    >
      View &gt;
    </button></a>
  </div>
</div>

{/* 2nd */}
<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
  >
    <img
      src="/repo-portfolio.png"
      alt="card-image"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="p-4 sm:p-6">
    <h5 className="block mb-2 font-sans text-lg sm:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      PORTFOLIO
    </h5>
    <p className="block font-sans text-sm sm:text-base antialiased font-light leading-relaxed text-inherit">
    All my portfolio code, following best practices with React, is stored in this repository. It includes components, styling, and configurations for a robust, efficient application.</p>
  </div>
  <div className="p-4 sm:p-6 pt-0">
    <a target='/' href="https://github.com/Nidhish-Dev/Portfolio-new"><button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button"
    >
      View &gt;
    </button></a>
  </div>
</div>

{/* 3rd */}
<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
  >
    <img
      src="/repo-projects.jpg"
      alt="card-image"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="p-4 sm:p-6">
    <h5 className="block mb-2 font-sans text-lg sm:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      PROJECTS
    </h5>
    <p className="block font-sans text-sm sm:text-base antialiased font-light leading-relaxed text-inherit">
    This repository contains all my full-stack dynamic projects, utilizing the MERN stack and some using EJS. It includes complete codebases and configurations for each project.</p>
  </div>
  <div className="p-4 sm:p-6 pt-0">
    <a target='/' href="https://github.com/Nidhish-Dev/Portfolio-new"><button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button"
    >
      View &gt;
    </button></a>
  </div>
</div>

<p>Explore additional repositories for more projects and code examples. On <a target="/" href="https://github.com/Nidhish-Dev?tab=repositories">Github</a></p>
      </div>
    </>
  );
};

export default main;
