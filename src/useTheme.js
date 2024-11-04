import { useEffect, useState } from "react";

const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [theme, setTheme] = useState(isDarkTheme ? "light" : "dark");
  function changeTheme() {
    setTheme((preTheme) => {
      if (preTheme === "dark") {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        return "light";
      } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        return "dark";
      }
    });

    setIsDarkTheme((preState) => !preState);
  }

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, []);

  return { isDarkTheme, changeTheme };
};

export { useTheme };
