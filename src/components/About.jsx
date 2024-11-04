import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <div className="px-5 py-3">
        <h1 className="uppercase text-[2.50rem] md:text-3xl text-center md:text-start font-semibold">
          vishal kumar
        </h1>
        <p className="text-xl md:text-[18px] pl-2 mt-2 text-center md:text-start">
          <span>I'm a</span> <span>javascript developer</span>
        </p>
        <p className="pl-4 md:pl-2 mt-2 md:mt-1 text-xl md:text-sm text-justify md:text-start text-gray-900 dark:text-gray-300">
          Hi/Hello,
          <br /> My name is Vishal Kumar, I’m a passionate software developer
          with 2 years of experience specializing in Node Js and javascript.
          During this time, I built server-side applications, APIs, and
          command-line applications.
        </p>
      </div>
      <button className="flex justify-between items-center gap-2 capitalize px-7 py-3 md:px-5 md:py-2 text-[19px] md:text-xl border border-slate-400 hover:border-slate-500 dark:border-slate-800/90 dark:hover:border-slate-700/95 rounded-md shadow-md md:ml-[29px] transition-all w-40 md:w-32 md:hover:w-40">
        resume
        <FaArrowRightLong className="mt-1" />
      </button>
    </>
  );
};

export default About;
