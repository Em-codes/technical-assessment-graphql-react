import { Sun, Moon } from 'phosphor-react'

const DarkMode = () => {

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  const storedTheme = localStorage.getItem("theme");

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

  if (defaultDark) {
    setDark();
  }


  const toggleTheme = (value) => {
    if (value.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };

  return (
    <header>
      <div className="header">
        <h1>B</h1>

        <div className="toggle-theme-wrapper">
        <Sun size={20} color="#6a6a6a" weight="bold" />
          <label className="toggle-theme" htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              onChange={(e) => toggleTheme(e)}
            />
            <div className="slider round"></div>
          </label>
          <Moon size={20} color="#6a6a6a" weight="bold" />
        </div>
      </div>
    </header>
  );
};

export default DarkMode;