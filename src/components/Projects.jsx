const projects = [
  {
    id: 1,
    name: "",
    previewLink: "",
    githubLink: "",
    about: "",
  },
  {
    id: 2,
    name: "",
    previewLink: "",
    githubLink: "",
    about: "",
  },
  {
    id: 3,
    name: "",
    previewLink: "",
    githubLink: "",
    about: "",
  },
  {
    id: 4,
    name: "",
    previewLink: "",
    githubLink: "",
    about: "",
  },
];

const Projects = () => {
  return (
    <div className="p-2">
      <h2 className="capitalize text-center md:text-start text-3xl md:text-3xl mb-4">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 select-none">
        {projects.map((p) => {
          return (
            <div
              key={p.id}
              className="w-full h-40 md:w-52 md:h-28 border border-slate-900/50 rounded-md shadow shadow-slate-500/5 flex justify-center items-center hover:shadow-lg md:hover:scale-105 hover:border-slate-700/90 cursor-pointer transition"
            >
              {p.id}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
