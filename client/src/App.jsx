import { createContext, useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  console.log(theme);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark" && !html.classList.contains("dark")) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
