// import { GiHamburgerMenu } from "react-icons/gi";
// import { useDispatch } from "react-redux";
// import { toggleMenu } from "../../state/menuSlice";

// const NavbarToggler = () => {
//   const dispatch = useDispatch();

//   const setToggleMenu = () => {
//     dispatch(toggleMenu());
//   };
//   return (
//     <button
//       className="text-2xl p-3 border border-orange rounded-full"
//       onClick={setToggleMenu}
//     >
//       <GiHamburgerMenu />
//     </button>
//   );
// };

// export default NavbarToggler;
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen); // Get menu state from Redux

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };

   return (
    <div className="flex lg:hidden sm:block p-4 bg-black items-center justify-center rounded-full border-orange border-[0.5px] relative">
  {/* This is the container for the hamburger menu */}
  <button
    className="text-2xl p-2 border border-orange rounded-full bg-black flex items-center justify-center absolute top-[-10px] left-[50%] -translate-x-[50%]"
    onClick={setToggleMenu}
    aria-label="Toggle Navigation Menu"
    aria-expanded={menuOpen ? "true" : "false"}
  >
    <GiHamburgerMenu />
  </button>
</div>

  //   <button
  //     className="text-2xl p-3 border border-orange rounded-full bg-black flex items-center justify-center absolute top-[14px] right-[5%] -translate-x-[50%]" // Adjusted positioning
  //     onClick={setToggleMenu}
  //     aria-label="Toggle Navigation Menu"
  //     aria-expanded={menuOpen ? "true" : "false"} // Adds ARIA state to describe whether the menu is open or closed
  //   >
  //     <GiHamburgerMenu />
  //   </button>
  );
};

export default NavbarToggler;
