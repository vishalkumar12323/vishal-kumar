import { FiMoon, FiSun } from "react-icons/fi";

const Preferences = ({ isDarkTheme, changeTheme }) => {
  return (
    <div className="absolute right-2 md:right-2 -top-2 md:top-0 md:left-[7px] md:py-1 md:dark:shadow md:dark:shadow-slate-800">
      <button className="w-fit" onClick={changeTheme}>
        {!isDarkTheme ? (
          <FiMoon className="w-7 h-7" />
        ) : (
          <FiSun className="w-7 h-7" />
        )}
      </button>
    </div>
  );
};

export default Preferences;
