// const NavbarLogo = () => {
//     return (
//       <div>
//         <h1 className="text-white  text-2xl sm:hidden md:block">
//           Rohit Dusane
//         </h1>
//         <h1 className="text-white font-special font-extrabold text-4xl md:hidden sm:block">
//           RD
//         </h1>
//       </div>
//     );
//   };
  
//   export default NavbarLogo;


const NavbarLogo = () => {
  return (
    <div>
      {/* Full name for large screens */}
      <h1 className="text-white text-2xl md:block sm:hidden" aria-label="Full Name Logo">
        Rohit Dusane
      </h1>
      
      {/* Initials for smaller screens */}
      <h1 className="text-white font-special font-extrabold text-4xl sm:block md:hidden" aria-label="Initials Logo">
        RD
      </h1>
    </div>
  );
};

export default NavbarLogo;
