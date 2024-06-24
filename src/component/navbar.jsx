import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { FaArrowDown,FaServicestack,FaBars } from "react-icons/fa";
import Logo from "../assets/image/critizn2.png";
import "../style/navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const [dropdownOpen,setDropdownOpen] = useState(false)

  // const toggleDropdown = () => {
  //   setDropdownOpen(!dropdownOpen);
  // };
  return (
    <nav className="nav">
      <div className="nav-logo">
        <a onClick={() => navigate("/")}>
          <img src={Logo} alt="logo" width={118} height={68} />
        </a>
      </div>
      <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        <Link to="/">Tentang kami</Link>
        <Link to="/Login">Kontak</Link>
        <Link to="/Berita">Berita</Link>
        {/* <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            <FaBars /> Berita
          </button>
          <Link to="/" className="drop" onClick={toggleDropdown}>Berita<FaArrowDown/></Link>
        </div>
          <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
            <Link to=""><FaServicestack/>Berita 1</Link>
            <Link to=""><FaServicestack/>Berita 2</Link>
          </div> */}
      </ul>

      <div className="button">
        <button onClick={() => navigate("/Aduan")} className="">
          Aduan
        </button>
      </div>

      <div className="nav-toggle" onClick={handleToggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
    
  //   <nav className="navbar">
  //     <Link to="/">Home</Link>
  //     <Link to="/about">About</Link>
  //     <div className="dropdown">
  //       <button className="dropbtn" onClick={toggleDropdown}>
  //         Services
  //       </button>
  //       <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
  //         <Link to="/services">Service 1</Link>
  //         <Link to="/services">Service 2</Link>
  //         <Link to="/services">Service 3</Link>
  //       </div>
  //     </div>
  //   </nav>
  );
}
