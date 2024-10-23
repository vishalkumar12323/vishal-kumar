import { Profile, About } from "./components";

const App = () => {
  return (
    <>
      <main className="max-w-screen-lg h-[100vh] mx-auto md:py-4 py-5 px-4 md:px-6 dark:text-white/90">
        <section className="md:w-fit md:h-full md:px-2 flex flex-col justify-center md:justify-start gap-4 items-center md:items-start">
          <Profile />
          <About />
        </section>
      </main>
    </>
  );
};

export { App };
