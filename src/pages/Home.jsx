import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Pages.css'


const Home = () => {
  return (
   <>
   
   <div className="home-container">
    
   <p>Hello, I&apos;m</p>
      <p className='home-name'>Nidhish Rathore</p>
      <div className='desig-home'>

      <span >"Software Engineer"</span>
      </div>
      <Link to="/home">
        <div className="getStartedbtn">Get Started</div>
      </Link>
   </div>
   <Footer />
   </>
  )
}

export default Home
