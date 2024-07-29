import React from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'
import './Pages.css'

const main = () => {
  return (
    <>
    <Navbar />
    
    <div className="main-container">
      <div className="maintext">
<p>Turning ideas into real</p>
<p>life <span>products </span>is my</p>
<p>calling.</p>

      </div>
      
 <Link to="/projects">
        <div className="viewProjectsBtn">
          View Projects
        </div>
      </Link>

    </div>
  </>
  )
}

export default main
