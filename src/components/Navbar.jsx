import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="navbar ">
    <Link className='logo' to="/">
          <img src="/nr.png" alt="Logo" />
        </Link>
    <nav className=''>
      <ul className='flex gap-4 items-center'>
        {currentPath !== '/' && <li><Link to="/">Home</Link></li>}
        {currentPath !== '/about' && <li><Link to="/about">About</Link></li>}
        {currentPath !== '/projects' && <li><Link to="/projects">Projects</Link></li>}
        {currentPath !== '/contact' && <li><Link to="/contact">Contact</Link></li>}
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
