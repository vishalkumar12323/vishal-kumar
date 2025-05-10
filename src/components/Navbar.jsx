import "../styles/desktop/navbar.css";
import {
  IoHomeOutline,
  IoCodeSlashOutline,
  IoLibraryOutline,
  IoMailUnreadOutline,
} from "react-icons/io5";

export const Navbar = ({ openSideBar, setOpenSideBar }) => {
  return (
    <header
      id="header"
      className={`header-section ${openSideBar && "nav-active"}`}
      onClick={(e) => {
        e.stopPropagation();
        setOpenSideBar((state) => !state);
      }}
    >
      <div className="div">
        <nav id="navbar" className="nav">
          <ul>
            <li className="link-list bg-slate-900">
              <a href="#home" className="link">
                <IoHomeOutline className="icons" size={23} />
                <span className="select">Home</span>
              </a>
            </li>
            <li className="link-list bg-slate-900">
              <a href="#skill" className="link">
                <IoCodeSlashOutline className="icons" size={23} />
                <span className="select">Skills</span>
              </a>
            </li>
            <li className="link-list bg-slate-900">
              <a href="#project" className="link">
                <IoLibraryOutline className="icons" size={23} />

                <span className="select">Projects</span>
              </a>
            </li>
            <li className="link-list bg-slate-900">
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
