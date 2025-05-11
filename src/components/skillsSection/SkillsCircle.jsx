import React from "react";
import { FcSettings } from "react-icons/fc";

const SkillsCircle = () => {
  return (
    <div className="h-[200px] w-[200px] rounded-full flex items-center justify-center absolute left-[50%] -translate-x-[50%] top-[30%] -translate-y-[50%] border-2 border-orange overflow-hidden">
      <img
        src="/portfolio/images/skills.avif"
        alt="my skills"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default SkillsCircle;