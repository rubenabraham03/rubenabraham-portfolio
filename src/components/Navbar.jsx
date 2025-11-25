import { NavLink } from "react-router-dom";

export default function Navbar({ onToggleTheme }) {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <h1 className="logo">Home</h1>
        <nav>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>
      </div>
    </header>
  );
}
