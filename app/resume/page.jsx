"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// About data
const about = {
  title: "About me",
  description:
    "I’m a passionate web developer with 2+ years of experience in creating user-friendly and innovative solutions. Skilled in front-end development and proficient. I’m dedicated to delivering high-quality results and open to freelance opportunities. Let’s build something great together!",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Mohamed Azeem",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 341 3328076 ",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "azeem5674@outlook.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistan",
    },
    {
      fieldName: "Email",
      fieldValue: "abdulazeem5476@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Urdu",
    },
  ],
};

// Experience data
const experience = {
  icon: "/public/assets/resume/badge.svg",
  title: "My experience",
  description:
    "My professional experience highlights my journey as a Frontend Developer, showcasing my skills in building responsive and dynamic websites. I've had the privilege of working on diverse projects, ranging from freelance work to corporate roles, where I honed my expertise in technologies like React.js, Next.js,",

  items: [
    {
      company: "Freelance.",
      position: "Front End Developer",
      duration: "12 - 2022 to Present",
    },
    {
      company: "Freelance.",
      position: "Front End Developer",
      duration: "2024 - Present",
    },

    {
      company: "BitsPro.",
      position: "Front End Developer Intern",
      duration: "Winter 2024",
    },
    {
      company: "Pure Corporation.",
      position: "Wordpress/Shopify Developer",
      duration: "05 - 2023 to  06 - 2023",
    },
    {
      company: "Exceed Pharmaceutical (PVT) LTD.",
      position: "IT Support Specialist",
      duration: "05 - 2020 to 05 - 2022",
    },
  ],
};

// Education data
const education = {
  icon: "/public/assets/resume/cap.svg.svg",
  title: "My education",
  description:
    "My educational background reflects my dedication to becoming a proficient software engineer. From earning my degree in Software Engineering to completing specialized courses and bootcamps in cutting-edge technologies like React.js and Next.js, I have continually worked to sharpen my skills and stay updated with industry trends.",

  items: [
    {
      Institution: "Udemy.",
      degree: "React js, Nextjs Development",
      duration: "2023",
    },
    {
      Institution: "Udemy.",
      degree: "Front End Development Bootcamp",
      duration: "2022",
    },
    {
      Institution: "Tech Institue.",
      degree: "Front End Development Bootcamp",
      duration: "2021",
    },
    {
      Institution: "Mehran University of Engineering.",
      degree: "B.E Software Engineering",
      duration: "2018 - 2022",
    },
  ],
};

// Skills Data
const skills = {
  title: "My Skills",
  description:
    "Here are the technologies and tools I have mastered to create efficient, responsive, and visually appealing web applications. With a strong foundation in frontend development and experience in modern frameworks and libraries, I strive to deliver clean and maintainable code.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaGithub />,
      name: "github",
    },
  ],
};

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto ">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col gap-6 w-full max-w-[380px]  mx-auto xl:mx-0 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full ">
            {/* Experience */}
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, i) => {
                      return (
                        <li
                          key={i}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent ">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3 ">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, i) => {
                      return (
                        <li
                          key={i}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent ">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center  gap-3 ">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.Institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills*/}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                  {skills.skillList.map((skill, i) => {
                    return (
                      <li key={i}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                              <div className="text-4xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About*/}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
