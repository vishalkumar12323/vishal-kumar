import {
  Profile,
  About,
  Skills,
  Projects,
  Preferences,
} from "./components";
import { useEffect } from "react";
import { useTheme } from "./useTheme";
import clsx from "clsx";

const App = () => {
  const { changeTheme, isDarkTheme } = useTheme();
  useEffect(() => {
    !isDarkTheme
      ? (document.body.style.backgroundColor = "#090d0f")
      : (document.body.style.backgroundColor = "#fffcfc");
  }, [isDarkTheme]);
  return (
    <>
      <main
        className={clsx(
          `md:grid md:grid-cols-2 max-w-screen-lg h-auto md:h-[100vh] mx-auto md:py-4 py-5 px-3 md:px-6 bg-transparent transition-colors duration-500`,
          {
            "dark:bg-transparent dark:text-white/95": !isDarkTheme,
          }
        )}
      >
        <section className="mb-8 md:mb-0 md:w-fit md:h-full md:px-2 flex flex-col justify-center md:justify-start gap-6 items-center md:items-start relative">
          <Preferences isDarkTheme={isDarkTheme} changeTheme={changeTheme} />
          <Profile isDarkTheme={isDarkTheme} />
          <About />
        </section>

        <div
          className="md:max-h-[100vh] md:overflow-y-auto
          [&::-webkit-scrollbar-thumb]:rounded 
          [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-gray-800
        [&::-webkit-scrollbar-thumb]:bg-gray-700
        dark:[&::-webkit-scrollbar-track]:bg-neutral-900
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-800"
        >
          <section className="pt-4 md:pt-0 mb-8 md:mb-0">
            <Skills />
          </section>
          <section className="pt-4 md:pt-0">
            <Projects />
          </section>
        </div>
      </main>
    </>
  );
};

export { App };
