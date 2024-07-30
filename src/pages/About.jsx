import React from 'react'
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { FaCopy } from "react-icons/fa";
import './Pages.css'
const About = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 2000);
  };
  return (
    <>
      <Navbar />
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
          <p>SKILLS</p>
        </div>
        <div className="skills">
          <div className="skill">
            HTML
          </div>
          <div className="skill">
            CSS
          </div>
          <div className="skill">
            JAVASCRIPT
          </div>
          <div className="skill">
            JAVA
          </div>
          <div className="skill">
            REACT
          </div>
          <div className="skill">
            NEXTJS
          </div>
          <div className="skill">
            NODEJS
          </div>
          <div className="skill">
            EXPRESS
          </div>
          <div className="skill">
            MONGODB
          </div>
          <div className="skill">
            DOCKER
          </div>
          <div className="skill">
            FIREBASE
          </div>
          <div className="skill">
            FIGMA
          </div>
          <div className="skill">
            PHOTOSHOP
          </div>
          
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
                    className={
                      copied === "codenidhish07@gmail.com" ? "copied" : ""
                    }
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
  )
}

export default About
