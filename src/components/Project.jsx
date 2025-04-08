import projects from "../data/data.json";
import { IoLogoGithub, IoOpenOutline } from "react-icons/io5";

const Project = () => {
  return (
    <section
      className="section project-section h-[95vh] md:h-[90vh]"
      id="project"
    >
      <div className="section-title">
        <h2 className="text-slate-900">projects</h2>
      </div>

      <div className="project-container w-full h-auto mt-4">
        <div
          className="card-container p-[1.5rem] overflow-y-auto gap-2 w-full h-[30rem] grid grid-two-cols"
          id="cardContainer"
        >
          {projects &&
            projects.map((project) => (
              <Card key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

const Card = ({ project }) => {
  return (
    <div className="card relative w-full h-fit border shadow">
      <div className="card-img relative w-full h-full">
        <img
          src={project.img}
          alt={project.name}
          className="img select object-cover w-full h-auto bg-center"
        />
      </div>
      <div className="card-overlay absolute top-0 left-0 w-full h-full z-[1] opacity-[1] transition-all">
        <div className="info hidden absolute gap-[5px] left-12 bottom-8">
          <div className="name text-[1.5rem] font-normal text-slate-900 uppercase">
            {project.name}
          </div>
          <div className="description capitalize text-[16px] font-normal max-w-[85%] text-slate-900">
            {project.description}
          </div>
          <div className="projects-links flex gap-2 mt-[5px]">
            <a href={project.githubLink} target="_blank" className="github">
              <IoLogoGithub size={30} />
            </a>
            <a
              href={project.previewLink}
              target="_blank"
              className="preview-link"
            >
              <IoOpenOutline size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
