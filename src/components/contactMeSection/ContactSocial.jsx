import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";


const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/rohit-dusane/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/RohitDusane" Icon={FiGithub} />
    </div>
  );
};

export default ContactSocial;