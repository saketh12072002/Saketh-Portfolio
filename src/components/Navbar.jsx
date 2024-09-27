import logo from "../assets/Sakethlogo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

import {FaInstagram} from "react-icons/fa";

const Navbar = () => {

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/1tseCHWMr-HREelIp6shzEqFTOD8ApJ3X/view?usp=sharing', '_blank');
  };
  return (
    <nav className="mb-15 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo"/>Saketh
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/saketh-ram-b"><FaLinkedin/></a>
        <a href="https://www.github.com/saketh12072002"><FaGithub/></a>
        <a href="https://www.instagram.com/iamsaketh12/"><FaInstagram/></a>
        <button className="text-xs" onClick={handleResumeDownload}>
          My Resume
        </button>    
      </div>
    </nav>
  )
}

export default Navbar