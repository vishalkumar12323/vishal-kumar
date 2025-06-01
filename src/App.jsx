import { useState, lazy, Suspense } from "react";
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

  return (
    <>
      <main
        id=""
        className={`min-h-screen h-auto md:pl-40 md:pr-24 bg-gradient-to-bl from-lime-400 via-green-500 to-emerald-600`}
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
