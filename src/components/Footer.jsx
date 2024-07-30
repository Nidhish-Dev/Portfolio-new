import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className="footer-container">
        <div className="leftfoot">Copyright © 2024 | Developed by Nidhish Rathore. All right reserved.</div>

        <div className="rightfoot">
            <a target='/' href="https://github.com/Nidhish-Dev">
            <img className='githubimg' src="/github.png" alt="" />
            </a>
        </div>
    </div>
    </>
  )
}

export default Footer