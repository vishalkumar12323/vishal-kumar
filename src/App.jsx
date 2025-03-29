import { useState } from "react";
import {
  Contact,
  Footer,
  Navbar,
  Profile,
  Project,
  Skills,
} from "./components";

export const App = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <>
      <main id="" className="h-auto md:pl-40 md:pr-24">
        <Navbar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        <Profile setOpenSideBar={setOpenSideBar} />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </main>
    </>
  );
};
