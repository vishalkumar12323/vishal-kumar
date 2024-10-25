const Projects = () => {
  return (
    <div>
      <h2 className="uppercase underline text-center md:text-start text-3xl md:text-3xl mb-4">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 md:place-items-center gap-4 md:gap-0">
        <div className="p-4 border border-slate-900/50 rounded-md shadow shadow-slate-500/5">
          1
        </div>
        <div className="p-4 border border-slate-900/50 rounded-md shadow shadow-slate-500/5">
          2
        </div>
        <div className="p-4 border border-slate-900/50 rounded-md shadow shadow-slate-500/5">
          3
        </div>
      </div>
    </div>
  );
};

export default Projects;
