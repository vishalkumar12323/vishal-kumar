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
    <div>
      <h2 className="capitalize text-center md:text-start text-3xl md:text-3xl mb-4">
        Projects
      </h2>

      <div className="grid grid-cols-2 place-items-center gap-4 select-none">
        {projects.map((p) => {
          return (
            <div
              key={p.id}
              className="w-52 h-28 border border-slate-900/50 rounded-md shadow shadow-slate-500/5 space-x-4 flex justify-center items-center hover:shadow-lg hover:scale-105 cursor-pointer transition"
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
