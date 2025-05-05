import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/rajan-kumar-jha-29310a277/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Rajanjha12" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/rajanjha.12official/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
