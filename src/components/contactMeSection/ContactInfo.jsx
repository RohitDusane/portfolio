import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text={<span className="font-bold text-2xl">stat.data247@gmail.com</span>} Image={HiOutlineMail} />
      <SingleInfo text={<span className="font-bold text-2xl">+91 842496948</span>} Image={FiPhone} />
      <SingleInfo text={<span className="font-bold text-2xl">Mumbai, India</span>} Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;