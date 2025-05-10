import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="footer-section h-[25vh] border-t border-slate-300">
      <div className="container flex justify-center items-center flex-col gap-[10px]">
        <h4 className="text-[2rem] md:text-[2.5rem] font-medium mt-4 text-slate-900">
          vishal kumar
        </h4>
        <div className="social-links flex justify-center gap-[10px]">
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
        <div className="credits font-semibold ">
          created by{" "}
          <a href="#" className="text-slate-900">
            vishal kumar
          </a>
        </div>
      </div>
    </footer>
  );
};
