import "../styles/desktop/navbar.css";
import {
  IoHomeOutline,
  IoCodeSlashOutline,
  IoLibraryOutline,
  IoMailUnreadOutline,
} from "react-icons/io5";

const Navbar = ({ openSideBar, setOpenSideBar }) => {
  return (
    <header
      id="header"
      className={`header-section ${
        openSideBar && "nav-active"
      } fixed top-0 left-[5px] bottom-0 z-[9999] overflow-y-auto flex justify-center items-center h-screen`}
      onClick={(e) => {
        e.stopPropagation();
        setOpenSideBar((state) => !state);
      }}
    >
      <div className="div">
        <nav id="navbar" className="nav">
          <ul className="flex flex-col justify-center gap-[20px]">
            <li className="link-list relative w-[40%] rounded-[3px] bg-[#0e0e0e] border">
              <a href="#home" className="link">
                <IoHomeOutline className="icons" size={23} />
                <span className="select">Home</span>
              </a>
            </li>
            <li className="link-list">
              <a href="#skill" className="link">
                <IoCodeSlashOutline className="icons" size={23} />
                <span className="select">Skills</span>
              </a>
            </li>
            <li className="link-list">
              <a href="#project" className="link">
                <IoLibraryOutline className="icons" size={23} />

                <span className="select">Projects</span>
              </a>
            </li>
            <li className="link-list">
              <a href="#contact" className="link">
                <IoMailUnreadOutline className="icons" size={23} />
                <span className="select">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
