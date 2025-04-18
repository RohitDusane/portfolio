const SubSkills = () => {
  return (
    <div className="relative border-y-2 border-lightGrey">
      {/* Background image with gradient overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url("/portfolio/images/subSkills.jpg")' }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan to-lightGrey opacity-60"></div>
      </div>

      {/* Sub-skills section overlayed on top of the background */}
      <div className="relative z-10 w-full py-8 text-white flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl md:flex-row sm:flex-col items-center gap-4 text-shadow-lg">
        <p>Jupter Notebook</p>
        <p>End to End Projects</p>
        <p>Git </p>
      </div>
    </div>
  );
};

export default SubSkills;
