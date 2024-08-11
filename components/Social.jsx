import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { SiGmail } from "react-icons/si";

const socials = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/arieeefrahman',
  },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/arief-rahman-44ab041b7/',
  },
  {
    icon: <SiGmail />,
    path: 'mailto:arieeefrahman@gmail.com',
  },
]


const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, idx) => {
        return (
          <Link key={idx} href={social.path} className={iconStyles} target="_blank">
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Social