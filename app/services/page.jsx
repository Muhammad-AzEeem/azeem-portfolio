"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Passionate and detail-oriented software engineer with a strong foundation in React.js and Next.js.",
    href: "",
  },
  {
    num: "02",
    title: "IT Support Specialist",
    description:
      " Excelling in technical troubleshooting, system maintenance, and help desk management. Adept at resolving hardware/software issues, optimizing IT operations, and managing system integrations",
    href: "",
  },
  {
    num: "03",
    title: "Wordpress",
    description:
      "Experienced in creating and managing WordPress websites, including theme customization, plugin integration, and content management for dynamic and responsive web solutions",
    href: "",
  },
  {
    num: "04",
    title: "Video Editing",
    description:
      "Proficient in video editing with expertise in crafting engaging and professional content, utilizing advanced tools for seamless transitions, effects, and storytelling",
    href: "",
  },
];

function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0  ">
      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center gap-6 group "
              >
                {/* top */}
                <div className="w-full flex items-center justify-between ">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>

                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>

                {/* description */}
                <p className="text-white/60">{service.description}</p>

                {/* Border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
