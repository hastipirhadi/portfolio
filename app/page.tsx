import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";

const HomePage = () => {
  return (
    <main className="min-h-screen p-15">
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
        <div className=" mb-20">
          <Navbar />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[396px_minmax(0,1fr)] lg:gap-10">
          <div>
            <ProfileCard />
          </div>

          <div className="flex flex-col text-left">
            <About />
            <RecentProjects />
            <Experience />
            <Skills />
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
