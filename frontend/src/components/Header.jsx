import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  return (
    <header className="flex justify-between p-3 bg-white">
      <h1 className="text-2xl md:text-3xl xl:text-4xl">Vasko Blazhev</h1>
      <ul className="flex items-center gap-4 text-lg md:text-xl">
        <Link to="about" smooth={true} duration={500}>
          <li className="hover:cursor-pointer">About</li>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <li className="hover:cursor-pointer">Skills</li>
        </Link>
        <Link to="experience" smooth={true} duration={500}>
          <li className="hover:cursor-pointer">Experience</li>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <li className="hover:cursor-pointer">Contact</li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
