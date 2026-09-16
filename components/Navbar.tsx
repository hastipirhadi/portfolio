"use client";

import { useEffect, useState } from "react";
import {
  FiHome,
  FiFolder,
  FiBriefcase,
  FiCode,
  FiMail,
  FiGlobe,
} from "react-icons/fi";

const navItems = [
  {
    label: "Home",
    icon: FiHome,
    href: "#home",
  },
  {
    label: "Projects",
    icon: FiFolder,
    href: "#projects",
  },
  {
    label: "Experience",
    icon: FiBriefcase,
    href: "#experience",
  },
  {
    label: "Skills",
    icon: FiCode,
    href: "#skills",
  },
  {
    label: "Contact",
    icon: FiMail,
    href: "#contact",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  //   const [language, setLanguage] = useState("EN");

  /* Scroll detection */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Active section detection*/

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  /* Language */
//   const handleLanguageChange = () => {
//     setLanguage((prev) => (prev === "EN" ? "FA" : "EN"));
//   };

  return (
    <header
      className={`
        fixed
        z-50
        ${
          isScrolled
            ? "right-5 top-1/2 -translate-y-1/2"
            : "left-1/2 top-5 -translate-x-1/2"
        }

        /* Mobile: always stay at top */

        max-sm:left-1/2
        max-sm:right-auto
        max-sm:top-5
        max-sm:translate-x-[-50%]
        max-sm:translate-y-0
      `}
    >
      <nav
        className={`
          flex
          items-center
          rounded-2xl
          border
          
          border-white/[0.08]
          bg-[#1a1816]/90
          text-white
          shadow-xl
          backdrop-blur-md

          ${
            isScrolled
              ? "flex-col gap-1 px-2 py-2"
              : "flex-row gap-1 px-2 py-1.5"
          }

          /* Mobile always horizontal */
          max-sm:flex-row
          max-sm:gap-1
          max-sm:px-2
          max-sm:py-1.5
        `}
      >
        {/* Navigation */}
        <div
          className={`
            flex
            items-center
            gap-1

            ${isScrolled ? "flex-col" : "flex-row"}

            /* Mobile always horizontal */
            max-sm:flex-row
          `}
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            const isActive = activeSection === item.href.replace("#", "");

            return (
              <a
                key={item.label}
                href={item.href}
                aria-label={`Go to ${item.label} section`}
                title={item.label}
                className={`
                  group
                  relative
                  rounded-xl
                  p-2.5
                  transition-all
                  duration-200
                  active:scale-90

                  ${
                    isActive
                      ? "bg-orange-500/10 text-orange-500"
                      : "text-white hover:bg-orange-500 hover:text-white"
                  }

                  max-sm:p-2
                `}
              >
                <Icon
                  size={20}
                  className="
                    transition-transform
                    duration-200
                    group-hover:scale-110
                  "
                />
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div
          className={`
            bg-white/10

            ${isScrolled ? "h-px w-6" : "h-6 w-px"}

            /* Mobile divider stays vertical */
            max-sm:h-6
            max-sm:w-px
          `}
        />

        {/* Language */}
        {/* <button
          type="button"
          onClick={handleLanguageChange}
          aria-label="Change language"
          title={`Language: ${language}`}
          className="
            group
            flex
            items-center
            gap-1.5
            rounded-xl
            px-2.5
            py-2.5
            text-white
            transition-all
            duration-200
            hover:bg-orange-500
            hover:text-white
            active:scale-90

            max-sm:px-2
            max-sm:py-2
          "
        >
          <FiGlobe
            size={19}
            className="
              transition-transform
              duration-200
              group-hover:rotate-12
              group-hover:scale-110
            "
          />

          <span className="text-[11px] font-semibold tracking-wide">
            {language}
          </span>
        </button> */}
      </nav>
    </header>
  );
};

export default Navbar;
