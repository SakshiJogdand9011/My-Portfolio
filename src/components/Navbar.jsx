import { NavLink } from "react-router-dom"
import { MdOutlineFileDownload } from "react-icons/md";


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className="navbar-link" data-nav-link>
            About
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/resume" className="navbar-link" data-nav-link>
            Education
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/portfolio" className="navbar-link" data-nav-link>
            Portfolio
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/Blogs" className="navbar-link" data-nav-link>
          Social Works
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/contact" className="navbar-link" data-nav-link>
            Contact
          </NavLink>
        </li>

        <li className="navbar-item">
          <a
            href="public/Sakshi_Jog_resume.pdf"
            className="navbar-link"
            data-nav-link
            download="Sakshi_Jogdand_resume.pdf"
          >
            Resume <MdOutlineFileDownload id="downicon"/>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar