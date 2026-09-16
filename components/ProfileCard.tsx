"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
const socialLinks = [
  {
    href: "https://github.com/hastipirhadi",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
  },
];
export default function ProfileCard() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto my-10 w-full max-w-[396px] lg:sticky lg:top-5 my-auto"
    >
      
      {/* Animated border wrapper */}
      <div className="relative overflow-hidden rounded-3xl p-[1px]">
        
        {/* Moving border */}
        <motion.div
          className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_280deg,#f97316_320deg,#fb923c_340deg,transparent_360deg)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        {/* Card */}
        <div className="relative z-10 flex w-full flex-col items-center gap-7 rounded-[23px] bg-[#1a1816] p-5 sm:p-7 lg:p-10">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative w-full overflow-hidden rounded-2xl"
          >
            
            <div className="relative aspect-square w-full">
              
              <Image
                src="/profile.png"
                alt="Hasti - Frontend Developer"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 533px"
                className="rounded-2xl object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              {/* Image overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              {/* Available badge */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="absolute bottom-4 left-4 rounded-full bg-orange-500/85 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-md"
              >
                
                Available for Work
              </motion.span>
            </div>
          </motion.div>
          {/* Name */}
          <div className="text-center">
            
            <h1 className="font-poppins text-3xl font-bold tracking-tight text-white sm:text-4xl">
              
              Hasti pirhadi
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mx-auto mt-3 h-0.5 rounded-full bg-orange-500"
            />
          </div>
          {/* Description */}
          <p className="max-w-md text-center text-base font-medium leading-7 text-gray-500 sm:text-lg lg:text-xl">
            
            A <span className="text-white/85"> Frontend Developer </span> who
            loves building modern, responsive and interactive web
            experiences.
          </p>
          {/* Social links */}
          <div className="flex items-center gap-5 text-2xl text-gray-500">
            
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="transition-colors duration-300 hover:text-orange-500"
              >
                
                {social.icon}
              </motion.a>
            ))}
          </div>
          {/* Download CV */}
          <Link
            href="/Hasti_Pirhadi_CV.pdf"
            download
            className="group relative block w-full overflow-hidden rounded-xl bg-white px-5 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-orange-500 hover:text-white active:scale-[0.98]"
          >
            
            <span className="relative z-10 flex items-center justify-center gap-2">
              
              Download CV
              <FiDownload
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </span>
            {/* Shine animation */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </Link>
        </div>
      </div>
    </motion.aside>
  );
}
