import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Muhammad-AzEeem",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/muhammad-azeem-bb39aa1b6/",
  },
  {
    icon: <FaInstagram />,
    path: "",
  },
  {
    icon: <FaTwitter />,
    path: "",
  },
];

function Social({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Social;
