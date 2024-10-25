import { useEffect, useState } from "react";

const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  function toggleTheme() {
    document.body.classList.toggle(isDarkTheme ? "light" : "dark");
    setIsDarkTheme((t) => {
      return !t;
    });
  }

  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  return { isDarkTheme, toggleTheme };
};

export { useTheme };
