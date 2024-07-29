import './App.css'
import Manager from './components/Manager'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Main from './pages/Main'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {

  return (
   <>
    <div className="font-sans">

    <Router>
    <Manager />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      </Router>
      </div>
      </>
  )
}

export default App
