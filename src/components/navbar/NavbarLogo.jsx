import { Link } from "react-scroll";

const NavbarLogo = () => {
  return (
    <div>
      {/* Full name for large screens */}
      <Link to="hero-section" spy={true} smooth={true} duration={500}>
        <h1
          className="cursor-pointer text-white text-2xl md:block sm:hidden transition-transform duration-300 ease-in-out transform hover:scale-110 hover:tracking-wider hover:text-cyan"
          aria-label="Full Name Logo"
        >
          Rohit Dusane
        </h1>
      </Link>

      {/* Initials for smaller screens */}
      <Link to="hero-section" spy={true} smooth={true} duration={500}>
        <h1
          className="cursor-pointer text-white font-special font-extrabold text-4xl sm:block md:hidden transition-transform duration-300 ease-in-out transform hover:scale-110 hover:tracking-wider hover:text-cyan"
          aria-label="Initials Logo"
        >
          RD
        </h1>
      </Link>
    </div>
  );
};

export default NavbarLogo;