const About = () => {
  return (
    <>
      <div className="px-5 py-3">
        <h1 className="uppercase text-4xl md:text-3xl md:text-start font-semibold md:ml-[17px]">
          vishal kumar
        </h1>
        <p className="text-xl md:text-sm pl-2 mt-2 text-center md:text-start md:ml-[15px]">
          <span>I'm a</span> <span>javascript developer</span>
        </p>
        <p className="pl-2 text-xl md:text-sm text-center md:text-start md:ml-[15px] text-gray-900 dark:text-white/90">
          Hi/Hello,
          <br /> My name is Vishal Kumar, I’m a passionate software developer
          with 2 years of experience specializing in Node Js and javascript.
          During this time, I built server-side applications, APIs, and
          command-line applications.
        </p>
      </div>
      <div className="w-full flex justify-center md:justify-start items-center  md:items-start">
        <button className="capitalize px-9 py-2  text-[19px] md:text-xl border border-slate-300 hover:border-slate-500 dark:border-slate-900/90 dark:hover:border-slate-700/95 transition rounded-md shadow-md md:-ml-20">
          resume
        </button>
      </div>
    </>
  );
};

export default About;
