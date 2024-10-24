const About = () => {
  return (
    <>
      <div className="md:ml-8 border border-slate-700/90 rounded-lg shadow md:border-none px-5 py-3 md:py-0 md:px-0">
        <h1 className="uppercase text-4xl md:text-3xl md:text-center font-semibold">
          vishal kumar
        </h1>
        <p className="text-xl md:text-sm pl-2 mt-2 text-center">
          <span>I'm a</span> <span>javascript developer</span>
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <button className="capitalize px-8 py-2 md:-ml-8 text-[19px] md:text-xl border border-slate-900/90 hover:border-slate-700/95 transition rounded-md shadow-md">
          resume
        </button>
      </div>
    </>
  );
};

export default About;
