import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logoipsum.svg";
import { Link } from "react-scroll";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-sky-400 text-white">
      <div>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="hover:cursor-pointer"
        >
          <img src={Logo} alt="logo" style={{ width: "180px" }} />
        </Link>
      </div>
      {/* menu */}
      <ul className="hidden md:flex gap-x-8 font-semibold">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:cursor-pointer"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* hamburger menu */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!click ? <FaBars /> : <FaTimes />}
      </div>

      {/* burada ac kapa yapacak shey yok daha olmali */}
      <ul
        className={
          !click
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-sky-600 text-white font-bold flex flex-col justify-center items-center"
        }
      >
        <li className="py-4 text-xl hover:cursor-pointer px-6 hover:bg-red-600 rounded-lg">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-4 text-xl hover:cursor-pointer px-6 hover:bg-red-600 rounded-lg">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-4 text-xl hover:cursor-pointer px-6 hover:bg-red-600 rounded-lg">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-4 text-xl hover:cursor-pointer px-6 hover:bg-red-600 rounded-lg">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-4 text-xl hover:cursor-pointer px-6 hover:bg-red-600 rounded-lg">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
