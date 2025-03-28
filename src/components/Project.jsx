import "../styles/desktop/projects.css";
import projects from "../data/data.json";
import { IoLogoGithub, IoOpenOutline } from "react-icons/io5";

const Project = () => {
  return (
    <section className="section project-section" id="project">
      <div className="section-title">
        <h2>projects</h2>
      </div>

      <div className="project-container">
        <div className="card-container grid grid-two-cols" id="cardContainer">
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
    <div className="card">
      <div className="card-img">
        <img src={project.img} alt={project.name} className="img select" />
      </div>
      <div className="card-overlay">
        <div className="info">
          <div className="name">{project.name}</div>
          <div className="description">{project.description}</div>
          <div className="projects-links">
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
