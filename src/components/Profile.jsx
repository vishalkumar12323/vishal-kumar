import "../styles/desktop/profile.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import {
  IoReorderThreeOutline,
  IoLogoGithub,
  IoOpenOutline,
  IoLogoLinkedin,
} from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
// import { ReactTyped } from "react-typed";

const Profile = ({ setOpenSideBar }) => {
  return (
    <section className="hero-section" id="home">
      <div className="section-top">
        <div className="menu-bar">
          <IoReorderThreeOutline
            size={40}
            onClick={(e) => {
              e.stopPropagation();
              setOpenSideBar((state) => !state);
            }}
          />
        </div>
      </div>

      <div className="section-mid">
        <div className="container">
          <div className="left-side">
            <p className="heading">
              <span>vishal kumar</span>
            </p>

            <p className="h-description">
              <span>I'm a </span>
              {/* <ReactTyped
                strings={[
                  "web developer",
                  "javascript dev.",
                  "react js dev.",
                  "node js dev.",
                  "freelancer",
                ]}
                typeSpeed={30}
                backSpeed={30}
                loop
              ></ReactTyped> */}
            </p>
            <a
              href="#"
              className="btn"
              style={{ marginLeft: "11px", marginTop: "10px" }}
            >
              <span>Resume</span>
              <MdOutlineArrowRightAlt size={20} />
            </a>
          </div>
          <div className="right-side">
            <img src="hh/profile-photo-light.png" alt="vishal kumar" />
          </div>
        </div>
      </div>

      <div className="section-bottom">
        <div className="container">
          <a
            href="https://github.com/vishalkumar12323"
            target="_blank"
            className="social-link-card"
          >
            <IoLogoGithub size={25} />
            <IoOpenOutline size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-ninaniya/"
            target="_blank"
            className="social-link-card"
          >
            <IoLogoLinkedin size={25} />
            <IoOpenOutline size={20} />
          </a>
          <a
            href="https://x.com/vishalkumar2654"
            target="_blank"
            className="social-link-card"
          >
            <RiTwitterXFill size={25} />
            <IoOpenOutline size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
