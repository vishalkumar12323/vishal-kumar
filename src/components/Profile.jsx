import { MdOutlineArrowRightAlt } from "react-icons/md";
import {
  IoReorderThreeOutline,
  IoLogoGithub,
  IoOpenOutline,
  IoLogoLinkedin,
} from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { ReactTyped } from "react-typed";

const Profile = ({ setOpenSideBar }) => {
  return (
    <section className="hero-section w-full h-screen relative" id="home">
      <div className="section-top fixed top-0 right-0 w-[7rem] h-[3rem] flex justify-center items-center">
        <div className="menu-bar hidden fixed right-[2%] top-[1.5%] cursor-pointer">
          <IoReorderThreeOutline
            size={40}
            onClick={(e) => {
              e.stopPropagation();
              setOpenSideBar((state) => !state);
            }}
            className="text-black"
          />
        </div>
      </div>

      <div className="section-mid w-full h-[85%] flex justify-center items-center">
        <div className="container w-full grid grid-cols-2">
          <div className="left-side flex justify-center flex-col">
            <p className="heading">
              <h1 className="text-[2.5rem] md:text[4rem] font-extrabold uppercase text-slate-900">
                vishal kumar
              </h1>
            </p>

            <p className="h-description pt-[10px] pl-[11px]">
              <span className="text-[1.1rem]">I'm a </span>
              <ReactTyped
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
              ></ReactTyped>
            </p>
            <a
              href="https://drive.google.com/file/d/1QpIrnD6zdvDKBssGPWMpsjSaeAl3nMvs/view"
              target="_blank"
              className="flex justify-between w-[6.5rem] hover:w-[8.5rem] py-[8px] px-[20px] text-[17px] capitalize border text-white bg-slate-900 rounded transition-all duration-300 items-center"
              style={{ marginLeft: "11px", marginTop: "10px" }}
            >
              <span>Resume</span>
              <MdOutlineArrowRightAlt size={20} />
            </a>
          </div>
          <div className="right-side flex justify-center items-center">
            <img
              src="/profile-photo-light.png"
              alt="vishal kumar"
              className="w-[300px] h-[300px] rounded-[50%]"
            />
          </div>
        </div>
      </div>

      <div className="section-bottom w-full h-[15%]">
        <div className="container w-auto h-full grid gap-4 place-items-center grid-cols-3">
          <a
            href="https://github.com/vishalkumar12323"
            target="_blank"
            className="social-link-card w-full h-[4.5rem] flex justify-between items-center px-4 border rounded transition-all hover:bg-slate-900 hover:text-white"
          >
            <IoLogoGithub size={25} />
            <IoOpenOutline size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-ninaniya/"
            target="_blank"
            className="social-link-card w-full h-[4.5rem] flex justify-between items-center px-4 border rounded transition-all hover:bg-slate-900 hover:text-white"
          >
            <IoLogoLinkedin size={25} />
            <IoOpenOutline size={20} />
          </a>
          <a
            href="https://x.com/vishalkumar2654"
            target="_blank"
            className="social-link-card w-full h-[4.5rem] flex justify-between items-center px-4 border rounded transition-all hover:bg-slate-900 hover:text-white"
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
