import "../styles/desktop/footer.css";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <h4>vishal kumar</h4>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/vishal-ninaniya/"
            target="_blank"
            className="s-link"
          >
            <IoLogoLinkedin />
          </a>
          <a
            href="https://github.com/vishalkumar12323"
            className="s-link"
            target="_blank"
          >
            <IoLogoGithub />
          </a>
          <a
            href="https://twitter.com/vishalkumar2654"
            className="s-link"
            target="_blank"
          >
            <RiTwitterXFill />
          </a>
        </div>
        <div className="copyright">
          &copy; copyright <strong>my portfolio</strong>. all right reserved
        </div>
        <div className="credits">
          created by <a href="#">vishal kumar</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
