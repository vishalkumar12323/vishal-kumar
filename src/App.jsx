import { Profile, About, Skills, Projects } from "./components";

const App = () => {
  return (
    <>
      <main className="md:grid md:grid-cols-2 dark:bg-[#050505] dark:text-white/95 max-w-screen-lg h-auto md:h-[100vh] mx-auto md:py-4 py-5 px-3 md:px-6">
        <section className="mb-8 md:mb-0 md:w-fit md:h-full md:px-2 flex flex-col justify-center md:justify-start gap-6 items-center md:items-start">
          <Profile />
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
