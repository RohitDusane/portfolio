import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
     <button className="w-fit h-fit
     rounded-full font-bold text-white border-cyan border flex items-center gap-5 bg-gradient-to-r from-darkCyan to-orange transition-all duration-300 hover:scale-105 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
      <Link
        spy={true}
        smooth={true}
        duration={500}
        offset={-50} // Adjust offset if needed to properly align the section on scroll
        to="contact" // Targeting the Contact Me section
      >
        Contact Me
      </Link>
      <div className="sm:hidden md:block">
        <LuArrowDownRight className="text-white" />
      </div>
    </button>
  );
};

export default NavbarBtn;