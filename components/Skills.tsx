"use client";
import { motion } from "motion/react";
import { FiFigma } from "react-icons/fi";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaGithub, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
const Skills = () => {
  const skills = [
    {
      name: "Figma",
      description: "Design Tool",
      icon: FiFigma,
      color: "group-hover:text-orange-100",
      iconBg: "group-hover:bg-bgIconOrange",
      border: "hover:border-borderOrange-100",
      cardBg: "hover:bg-bgOrangeDark",
      shadow: "group-hover:shadow-bgIcon-orange",
    },
    {
      name: "Tailwind",
      description: "Utility-First CSS",
      icon: SiTailwindcss,
      color: "group-hover:text-blue-100",
      iconBg: "group-hover:bg-bgIconBlue-100",
      border: "hover:border-borderBlue-100",
      cardBg: "hover:bg-bgBlueDark-100",
      shadow: "group-hover:shadow-bgIcon-blue100",
    },
    {
      name: "Next.js",
      description: "React Framework",
      icon: RiNextjsLine,
      color: "group-hover:text-purple-100",
      iconBg: "group-hover:bg-bgIconPurple",
      border: "hover:border-borderPurple-100",
      cardBg: "hover:bg-bgPurpleDark",
      shadow: "group-hover:shadow-bgIcon-purple100",
    },
    {
      name: "GitHub",
      description: "Code Collaboration",
      icon: FaGithub,
      color: "group-hover:text-githubIcon",
      iconBg: "group-hover:bg-bgIconGray-100",
      border: "hover:border-borderGray-100",
      cardBg: "hover:bg-bgGrayDark-100",
      shadow: "group-hover:shadow-bgIcon-gray100",
    },
    {
      name: "CSS",
      description: "Responsive Styling",
      icon: FaCss3Alt,
      color: "group-hover:text-blue-200",
      iconBg: "group-hover:bg-bgIconBlue-200",
      border: "hover:border-borderBlue-200",
      cardBg: "hover:bg-bgBlueDark-200",
      shadow: "group-hover:shadow-bgIcon-blue200",
    },
    {
      name: "JavaScript",
      description: "Client-Side Scripting",
      icon: IoLogoJavascript,
      color: "group-hover:text-javaIcon",
      iconBg: "group-hover:bg-bgIconYellow-100",
      border: "hover:border-borderYellow-100",
      cardBg: "hover:bg-bgYellowDark-100",
      shadow: "group-hover:shadow-bgIcon-yellow100",
    },
  ];
  return (
    <section id="skills" className=" w-full max-w-7xl mx-auto mb-24 sm:mb-32 lg:mb-40  overflow-hidden ">
      
      
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className=" flex flex-col justify-center text-center lg:text-left text-white font-extrabold text-[42px] leading-[1.15] sm:text-[52px] md:text-[68px] lg:text-[82px] xl:text-[94px] m-0 p-0 "
      >
        
        TECHNICAL <span className="text-textGray-100"> SKILLS </span>
      </motion.h1>
    
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className=" w-full min-w-0 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 xl:gap-7 my-6 sm:my-8 lg:my-10 "
      >
        
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 35 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className={` group w-full flex flex-wrap items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 p-3 sm:p-4 md:p-5 rounded-2xl sm:rounded-[22px] lg:rounded-[25px] cursor-default border bg-bgGray-100 border-border-skill transition-all duration-500 overflow-hidden ${skill.border} ${skill.cardBg} `}
            >
              
              {/* ICON */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: index % 2 === 0 ? -3 : 3 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={` flex justify-center items-center shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] lg:w-20 lg:h-20 p-3 sm:p-4 md:p-5 rounded-2xl sm:rounded-3xl bg-gray-200 transition-all duration-500 ${skill.iconBg} ${skill.shadow} `}
              >
                
                <Icon
                  className={` w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-gray-300 transition-colors duration-500 ${skill.color} `}
                />
              </motion.div>
              {/* TEXT */}
              <div className=" flex flex-1 flex-col gap-1 sm:gap-2 ">
                
                <motion.p
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25 }}
                  className={` min-w-0 text-white text-lg sm:text-xl md:text-2xl font-bold leading-tight break-words transition-colors duration-300 ${skill.color} `}
                >
                  
                  {skill.name}
                </motion.p>
                <p className=" min-w-0 text-sm sm:text-base md:text-lg lg:text-[19px] text-textGray-200 leading-snug break-words ">
                  
                  {skill.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
export default Skills;
