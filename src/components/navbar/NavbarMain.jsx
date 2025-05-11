import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2 h-[65px]">
      <div className="flex justify-between w-full bg-black items-center p-4 rounded-full border-orange border-[0.5px]">
        {/* Logo Section */}
        <NavbarLogo />

        {/* Links Section for larger screens */}
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        {/* Contact Button */}
        <NavbarBtn />
      </div>

      {/* Mobile Navbar Toggler */}
      <div className="lg:hidden sm:block w-full p-4 bg-black items-center justify-center rounded-full border-orange border-[0.5px]">
        {/* This container ensures the button is centered */}
        <div className="flex items-center justify-center">
          <NavbarToggler />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;