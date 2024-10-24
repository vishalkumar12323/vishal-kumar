import { Profile, About, Skills } from "./components";

const App = () => {
  return (
    <>
      <main className="md:grid md:grid-cols-2 dark:bg-[#050505] dark:text-white/95 max-w-screen-lg h-auto mx-auto md:py-4 py-5 px-3 md:px-6">
        <section className="mb-8 md:mb-0 md:w-fit md:h-full md:px-2 flex flex-col justify-center md:justify-start gap-6 items-center md:items-start">
          <Profile />
          <About />
        </section>

        <section className="">
          <Skills />
        </section>
      </main>
    </>
  );
};

export { App };
