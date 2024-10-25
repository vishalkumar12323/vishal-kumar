import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../useTheme";

const Preferences = () => {
  const { isDarkTheme, toggleTheme } = useTheme({ currentTheme: "dark" });
  return (
    <div className="absolute right-2 -top-2 md:top-0 md:left-5">
      <button className="w-fit" onClick={toggleTheme}>
        {isDarkTheme === true ? (
          <FiMoon className="w-8 h-8" />
        ) : (
          <FiSun className="w-8 h-8" />
        )}
      </button>
    </div>
  );
};

export default Preferences;
