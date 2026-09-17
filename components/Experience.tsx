"use client";

import { motion } from "motion/react";
import { PiStudentBold, PiCertificate } from "react-icons/pi";
import { FiChevronRight } from "react-icons/fi";

const Experience = () => {
  const experiences = [
    {
      title: "Junior Frontend Developer",
      description:
        "Over the past year, I have been developing my Frontend Development skills through an intensive bootcamp . During this time, I have worked on various projects and gained hands-on experience building responsive and user-friendly interfaces using HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. I have also worked with Git, Figma, APIs, and modern frontend tools while continuously improving my development and problem-solving skills.",
      date: "October, 2025 – Present",
      icon: PiStudentBold,
      active: true,
    },
    {
      title: "My Certificate",
      description:
        "Completed professional training in Frontend Development through Bamdad Institute, with additional JavaScript training through Aiolearn and Faradars.",
      date: "October, 2025 – present",
      icon: PiCertificate,
      active: false,
    },
  ];

  return (
    <div id="experience" className="mb-30">
      {/* TITLE */}
      <motion.h1
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
       className="flex flex-col items-center sm:items-center md:items-center lg:items-start text-center lg:text-left text-white font-extrabold text-[38px] sm:text-[52px] md:text-[72px] lg:text-[94px] leading-[1.15] mb-10"
      >
        RELEVANT
        <span className="text-textGray-100">EXPERIENCE</span>
      </motion.h1>

      {/* EXPERIENCE LIST */}
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
        className="mt-10"
      >
        {experiences.map((experience, index) => {
          const Icon = experience.icon;

          return (
            <motion.div
              key={experience.title}
              variants={{
                hidden: {
                  opacity: 0,
                  x: 10,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                transition: {
                  duration: 0.3,
                },
              }}
              className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-3xl sm:rounded-4xl group border border-transparent transition-all duration-500 hover:bg-white/[0.03] hover:border-white/[0.08] mb-3 backdrop-blur-sm relative overflow-hidden"
            >
              {/* ORANGE GLOW */}
              <motion.div
                initial={{
                  opacity: experience.active ? 1 : 0,
                }}
                whileHover={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-transparent pointer-events-none"
              />

              {/* ICON */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: index % 2 === 0 ? -4 : 4,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className={`
                  relative
                  shrink-0
                  p-3
                  sm:p-4
                  rounded-xl
                  sm:rounded-2xl
                  text-orange-500
                  border
                  border-orange-500/20
                  transition-all
                  duration-500
                  shadow-[0_0_20px_rgba(249,115,22,0.1)]
                  ${
                    experience.active
                      ? "bg-orange-500 text-white"
                      : "bg-orange-500/10 group-hover:bg-orange-500 group-hover:text-white"
                  }
                `}
              >
                <Icon className="text-3xl sm:text-3xl" />
              </motion.div>

              {/* CONTENT */}
              <div className="relative flex-1 space-y-2 sm:space-y-3">
                {/* TITLE + ARROW */}
                <div className="flex items-center justify-between gap-4">
                  <motion.h2
                    whileHover={{
                      x: 4,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="font-bold text-white text-xl sm:text-2xl tracking-tight transition-colors duration-300 group-hover:text-orange-500"
                  >
                    {experience.title}
                  </motion.h2>

                  {/* ARROW */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -16,
                    }}
                    whileHover={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="hidden lg:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange-500/30 text-orange-500"
                  >
                    <FiChevronRight className="text-xl" />
                  </motion.div>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-500 text-base sm:text-lg leading-relaxed font-inter">
                  {experience.description}
                </p>

                {/* DATE */}
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{
                      scale: experience.active ? [1, 1.25, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: experience.active ? Infinity : 0,
                      ease: "easeInOut",
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-orange-500"
                  />

                  <span className="text-orange-500 font-semibold text-xs sm:text-sm tracking-wider uppercase">
                    {experience.date}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Experience;
