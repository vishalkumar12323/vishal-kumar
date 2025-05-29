import { useState, lazy, Suspense, useEffect } from "react";
import Loading from "./components/loading.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";

const Profile = lazy(() =>
  import("./components/Profile.jsx").then((module) => ({
    default: module.Profile,
  }))
);

const Skills = lazy(() =>
  import("./components/Skills.jsx").then((module) => ({
    default: module.Skills,
  }))
);
const Project = lazy(() =>
  import("./components/Project.jsx").then((module) => ({
    default: module.Project,
  }))
);
const Contact = lazy(() =>
  import("./components/Contact.jsx").then((module) => ({
    default: module.Contact,
  }))
);
export const App = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const getBackgroundStyle = () => {
    switch (currentSection) {
      case "home":
        return "bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500";
      case "skill":
        return `bg-gradient-to-bl from-[#84cc16] via-[#22c55e] to-[#16a34a]`;
      case "project":
        return `bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-[#14b8a6] via-[#0891b2] to-[#1d4ed8]`;
      case "contact":
        return `bg-gradient-to-r from-[#2dd4bf]  to-[#1f2937]`;
      default:
        return "bg-white";
    }
  };
  return (
    <>
      <main
        id=""
        className={`min-h-screen h-auto md:pl-40 md:pr-24 transition-colors duration-100 ${getBackgroundStyle()}`}
      >
        <Navbar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        <Suspense
          fallback={
            <div className="min-h-screen w-full flex justify-center items-center">
              <Loading />
            </div>
          }
        >
          <Profile setOpenSideBar={setOpenSideBar} />
          <Skills />
          <Project />
          <Contact />
        </Suspense>
        <Footer />
      </main>
    </>
  );
};
