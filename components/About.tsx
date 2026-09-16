import { FaCode } from "react-icons/fa6";
import { VscRobot } from "react-icons/vsc";
const About = () => {
  const stats = [
    { number: "1+", label: "YEARS LEARNING & BUILDING" },
    { number: "3+", label: "PROJECTS COMPLETED" },
    { number: "2+", label: "CERTIFICATES & COURSESE" },
  ];

  return (
    <section
      id="home"
      className="mb-20 w-full max-w-7xl mx-auto lg:text-left "
    >
      {/* TITLE */}
      <h1 className=" text-white text-center lg:text-left font-extrabold text-[42px] sm:text-[52px] md:text-[80px] lg:text-[94px] leading-tight mb-5 p-0 ">
        FRONT-END
        <span className="block text-textGray-100"> DEVELOPER </span>
      </h1>

      {/* DESCRIPTION */}
      <p className=" w-full max-w-3xl text-gray-500 text-center md:text-left lg:text-xl leading-relaxed ">
       Frontend Developer focused on building responsive, modern, and user-friendly web experiences. Currently developing my skills through hands-on projects and nearly a year of intensive Frontend Development training, with a strong interest in React, Next.js, and modern frontend technologies.
      </p>

      {/* STATS */}
      <div className="mt-8 flex w-full flex-wrap justify-center gap-8 md:justify-start md:gap-20">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group flex flex-col items-center md:items-start"
          >
            <h1 className="text-3xl font-bold text-white transition-colors duration-300 group-hover:text-orange-500 lg:text-5xl">
              {stat.number}
            </h1>
            <div className="max-w-[100px] md:max-w-none">
              <p className="text-center text-gray-500 lg:text-left lg:text-xl">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* FEATURE CARDS */}
      <div className=" mt-10 flex w-full min-w-0 flex-col gap-6 md:flex-row ">
        {/* CARD 1 */}
        <div className=" group relative min-w-0 w-full flex-1 overflow-hidden min-h-[248px] bg-[#1c1b19]/40 backdrop-blur-xl border border-white/[0.05] rounded-[2rem] p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:border-orange-500/40 hover:bg-orange-500/[0.03] hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)] ">
          <div className=" absolute -right-8 -top-8 w-40 h-40 bg-orange-500/10 rounded-full blur-[60px] group-hover:bg-orange-500/20 transition-all duration-700 animate-float " />
          <div className=" relative z-10 p-4 bg-orange-500/10 rounded-2xl w-fit border border-orange-500/20 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 ">
            <VscRobot className="w-9 h-9" />
          </div>
          <div className="relative z-10">
            <h2 className=" text-white font-bold text-xl sm:text-[1.5rem] py-3 leading-tight break-words ">
              Figma &amp; AI Codex
            </h2>
          </div>
        </div>
        {/* CARD 2 */}
        <div className=" group relative min-w-0 w-full flex-1 overflow-hidden min-h-[248px] bg-[#1c1b19]/40 backdrop-blur-xl border border-white/[0.05] rounded-[2rem] p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:border-green-400/40 hover:bg-green-400/[0.03] hover:shadow-[0_20px_40px_-15px_rgba(74,222,128,0.15)] ">
          <div className=" absolute -right-8 -top-8 w-40 h-40 bg-green-400/10 rounded-full blur-[60px] group-hover:bg-green-400/20 transition-all duration-700 animate-float delay-1000 " />
          <div className=" relative z-10 p-4 bg-green-400/10 rounded-2xl w-fit border border-green-400/20 text-green-500 group-hover:bg-green-400 group-hover:text-black transition-all duration-500 ">
            <FaCode className="h-9 w-9" />
          </div>
          <div className="relative z-10 min-w-0">
            <h2 className=" text-white font-bold text-xl sm:text-[1.5rem] py-3 leading-tight break-words ">
              Next, React, JavaScript
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
