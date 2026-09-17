"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { FaReact } from "react-icons/fa";
import { SiTailwindcss,SiAxios ,SiHtml5 , SiJavascript 
 } from "react-icons/si";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

type Technology = {
  name: string;
  icon: React.ElementType;
  color: string;
};

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: Technology[];
};

const projects: Project[] = [
  {
    title: "Clinic",
    description: "A Doctor Appointment & Healthcare Platform",
    image: "/clinic.jpg",
    link: "https://prescripto.vercel.app/doctors",
    technologies: [
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        name: "Axios",
        icon: SiAxios ,
        color: "#5A29E4",
      },
      
    ],
  },

  {
    title: "Quiz App",
    description: "A Simple Quiz Application",
    image: "/quiz.jpg",
    link: "",
    technologies: [
      {
        name: "HTML",
        icon: SiHtml5,
        color: "#E34F26",
      },
      {
        name: "JavaScript",
        icon: SiJavascript ,
        color: "#F7DF1E",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
    ],
  },

  {
    title: "GoCart Store",
    description: "A Modern E-Commerce Store",
    image: "/gocart.jpg",
    link: "https://gocart-gs.vercel.app/",
    technologies: [
      {
        name: "HTML",
        icon: SiHtml5,
        color: "#E34F26",
      },
      {
        name: "JavaScript",
        icon: SiJavascript ,
        color: "#F7DF1E",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
      },
    ],
  },
];

const RecentProjects = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({
      x,
      y,
    });
  };

  return (
    <section id="projects" className="scroll-mt-28 flex flex-col gap-10 ">
      {/* TITLE */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <h1 className="text-white text-center lg:text-left font-extrabold text-[38px] sm:text-[52px] md:text-[72px] lg:text-[94px] leading-[1.15] m-0 p-0">
          RECENT
          <span className="block text-textGray-100">PROJECTS</span>
        </h1>
      </motion.div>

      {/* PROJECTS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1,
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="flex flex-col gap-2 relative"
      >
        {/* VERTICAL LINE */}
        <div className="absolute left-10 md:left-12 top-0 bottom-0 w-px bg-white/[0.03] z-0 hidden lg:block" />

        {projects.map((project) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: {
                opacity: 0,
                y: 40,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -4,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            }}
            className="relative z-10 block mb-4"
          >
            <div
              onMouseMove={handleMouseMove}
              className="group relative flex flex-col sm:flex-row p-4 sm:p-6 rounded-2xl sm:rounded-3xl gap-5 sm:gap-7 items-start sm:items-center border border-white/[0.06] bg-[#181715]/40 backdrop-blur-xl transition-all duration-500 hover:bg-[#1e1d1a]/70 hover:border-orange-500/30 hover:shadow-[0_20px_50px_-15px_rgba(249,115,22,0.12)] cursor-pointer overflow-hidden"
            >
              {/* MOUSE GLOW */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(
                    circle at ${mousePosition.x}% ${mousePosition.y}%,
                    rgba(249, 115, 22, 0.09),
                    transparent 60%
                  )`,
                }}
              />

              {/* ARROW */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.75,
                  y: 4,
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 hidden lg:flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full border border-white/10 bg-white/[0.05] text-white group-hover:border-orange-500/50 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-[0_0_25px_rgba(249,115,22,0.35)]"
              >
                <FiArrowUpRight className="text-xl transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.div>

              {/* IMAGE */}
              <div className="w-full sm:w-52 h-44 sm:h-36 shrink-0 relative z-10 overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 shadow-lg group-hover:border-orange-500/30 transition-all duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80 group-hover:opacity-30 transition-opacity duration-500" />
              </div>

              {/* CONTENT */}
              <div className="flex-1 flex flex-col gap-2.5 relative z-10 w-full min-w-0 pr-8 sm:pr-10">
                {/* PROJECT TITLE */}
                <motion.h3
                  whileHover={{
                    x: 4,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="text-white font-bold text-xl sm:text-2xl tracking-tight transition-colors duration-300 group-hover:text-orange-400"
                >
                  {project.title}
                </motion.h3>

                {/* DESCRIPTION */}
                <p className="text-gray-400 text-sm sm:text-base font-normal leading-relaxed">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((technology) => {
                    const Icon = technology.icon;

                    return (
                      <motion.span
                        key={technology.name}
                        whileHover={{
                          y: -2,
                          scale: 1.03,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-gray-300 bg-white/[0.04] border border-white/[0.07] backdrop-blur-sm group-hover:border-orange-500/25 group-hover:bg-white/[0.08] group-hover:text-white transition-all duration-300"
                      >
                        <Icon
                          className="text-sm transition-transform duration-300 group-hover:scale-110"
                          style={{
                            color: technology.color,
                          }}
                        />

                        <span>{technology.name}</span>
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* VIEW ALL PROJECTS */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
          delay: 0.15,
        }}
        className="flex justify-center mt-4"
      >
        {/* <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.95,
          }}
          transition={{
            duration: 0.2,
          }}
          className="group relative px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold tracking-widest uppercase text-xs overflow-hidden transition-all duration-500 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] mb-10"
        >
         
          <span className="relative z-10 flex items-center gap-2">
            View All Projects
            <FiArrowRight className="text-base transition-transform duration-500 group-hover:translate-x-1" />
          </span>

          
          <span className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </motion.button> */}
      </motion.div>
    </section>
  );
};

export default RecentProjects;
