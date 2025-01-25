"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowRight, BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea .",

    stack: [
      { name: "Html" },
      { name: "Tailwind" },
      { name: "React.js" },
      { name: "Next.js" },
    ],
    image: "/assets/work/thumb10.png",
    live: "https://car-showcase-mk.vercel.app/",
    github: "https://github.com/Muhammad-AzEeem/car_showcase",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea .",

    stack: [
      { name: "HTML" },
      { name: "Css" },
      { name: "JavaScript" },
      { name: "React.Js" },
    ],
    image: "/assets/work/thumb12.png",
    live: "https://gptfusion.netlify.app/",
    github: "https://github.com/Muhammad-AzEeem/gpt3",
  },
  {
    num: "02",
    category: "FullStack",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea .",

    stack: [
      { name: "Html5" },
      { name: "Css3" },
      { name: "React.js" },
      { name: "Supabase" },
    ],
    image: "/assets/work/thumb7.png",
    live: "https://the-wild-oasisx.netlify.app/",
    github: "https://github.com/Muhammad-AzEeem/the-wild-oasis-react.git",
  },
  {
    num: "03",
    category: "FullStack",
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea .",

    stack: [
      { name: "Html5" },
      { name: "Tailwind" },
      { name: "React.js" },
      { name: "Nextjs" },
    ],
    image: "/assets/work/thumb11.png",
    live: "https://realestate-alpha-ten.vercel.app/search?purpose=for-sale",
    github: "https://github.com/Muhammad-AzEeem/realestate",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea .",

    stack: [
      { name: "HTML" },
      { name: "Tailwind" },
      { name: "JavaScript" },
      { name: "React.Js" },
    ],
    image: "/assets/work/thumb8.png",
    live: "https://fast-pizzza-react.netlify.app/",
    github: "https://github.com/Muhammad-AzEeem/fast-pizza-react.git",
  },
  {
    num: "05",
    category: "frontend",
    title: "Project 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea .",

    stack: [{ name: "Html5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "https://snazzy-gelato-49875b.netlify.app/",
    github: "https://github.com/Muhammad-AzEeem/OmniFood.git",
  },
  {
    num: "06",
    category: "frontend",
    title: "Project 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea .",

    stack: [{ name: "Html5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb6.png",
    live: "https://natourse-tours.netlify.app/",
    github: "https://github.com/Muhammad-AzEeem/Tour-natour",
  },

  {
    num: "07",
    category: "Frontend",
    title: "Project 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea .",

    stack: [
      { name: "HTML" },
      { name: "Css" },
      { name: "JavaScript" },
      { name: "React.Js" },
    ],
    image: "/assets/work/thumb9.png",
    live: "https://travel-with-mee.netlify.app/",
    github: "https://github.com/Muhammad-AzEeem/world-wise-react.git",
  },
];

function Work() {
  const [project, setProject] = useState(projects[0]);

  function handleSlideChange(swiper) {
    // get current slide index
    const currentIndex = swiper.activeIndex;

    // update project state based on current slide index
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              {/* outline num */}
              <p className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </p>
              {/* Project category  */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* Project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-sm xl:text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project btutton */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github Project btutton */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full  xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[528px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[300px] xl:h-[460px] relative group flex justify-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover xl:object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 justify-between xl:justify-none absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full xl:w-max "
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;
