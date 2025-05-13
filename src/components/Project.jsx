import projects from "../data/data.json";
import { IoLogoGithub, IoOpenOutline } from "react-icons/io5";
import AnimatedSection from "./animated-section";

export const Project = () => {
  return (
    <section
      className="section project-section h-auto md:h-[90vh]"
      id="project"
    >
      <div className="section-title mb-12">
        <h2 className="text-slate-900">projects</h2>
      </div>

      <AnimatedSection
        animationVariants={{
          hidden: { opacity: 0, x: -50, y: 50 },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 2, ease: "easeInOut" },
          },
        }}
        threshold={0.6}
      >
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
      </AnimatedSection>
    </section>
  );
};

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
      <div className=" card-overlay absolute top-0 left-0 w-full h-full z-[1] opacity-[1] transition-all">
        <div className="info hidden absolute gap-[5px] left-12 bottom-8">
          <div className="name text-[1.1rem] md:text-[1.5rem] font-semibold text-slate-900 uppercase">
            {project.name}
          </div>
          <div className="description capitalize text-[10px] md:text-[16px] font-normal max-w-full  md:max-w-[85%] text-slate-900">
            {project.description}
          </div>
          <div className="projects-links flex gap-2 mt-[5px]">
            <a href={project.githubLink} target="_blank" className="github">
              <IoLogoGithub size={20} />
            </a>
            <a
              href={project.previewLink}
              target="_blank"
              className="preview-link"
            >
              <IoOpenOutline size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
