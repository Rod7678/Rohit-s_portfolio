import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <a href="#hero" className="nav-logo">
        RohitGhadge.dev
      </a>
      <ul className="nav-links">
        <li>
          <a href="#expertise">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a
            href="/Rohit_Ghadge-F.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
