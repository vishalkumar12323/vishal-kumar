const About = () => {
  return (
    <>
      <div className="dark:border dark:border-slate-700/90 rounded-lg md:dark:shadow md:dark:shadow-slate-800 md:border-none px-5 py-3">
        <h1 className="uppercase text-4xl md:text-3xl md:text-center font-semibold md:ml-[17px]">
          vishal kumar
        </h1>
        <p className="text-xl md:text-sm pl-2 mt-2 text-center md:text-start md:ml-[15px]">
          <span>I'm a</span> <span>javascript developer</span>
        </p>
      </div>
      <div className="w-full flex justify-center md:justify-start  items-center">
        <button className="capitalize px-9 py-2  text-[19px] md:text-xl border border-slate-300 hover:border-slate-500 dark:border-slate-900/90 dark:hover:border-slate-700/95 transition rounded-md shadow-md md:ml-10 md:dark:ml-0">
          resume
        </button>
      </div>
    </>
  );
};

export default About;
