import { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <header className="flex justify-between items-center px-8 py-4">
      <h1 className="text-lg font-bold">Eyuel G.</h1>
      <nav>
        <ul className="flex gap-4 text-primary">
          <li>
            <a href="#home" className="hover:text-primary-hover">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-primary-hover">
              About
            </a>
          </li>
          <li>
            <a href="#works" className="hover:text-primary-hover">
              Works
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary-hover">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <input
        type="checkbox"
        checked={darkMode}
        onChange={toggleTheme}
        className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
      />
    </header>
  );
};

export default Header;
