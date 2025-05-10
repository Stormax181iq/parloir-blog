import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Write from "./pages/Write";
import PostPage from "./components/PostPage";
import UserPage from "./components/UserPage";
import CategoryPage from "./components/CategoryPage";

import ThemeContext from "./context/ThemeContext";
import { useTheme } from "./hooks/useTheme";
import { AuthProvider } from "./context/AuthContext";
import Protected from "./components/Protected";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <AuthProvider>
        <ThemeContext.Provider value={theme}>
          <div className="flex min-h-screen flex-col">
            <Header toggleTheme={toggleTheme} />
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="posts">
                  <Route path="categories">
                    <Route path=":category" element={<CategoryPage />} />
                  </Route>
                </Route>
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="users">
                  <Route path=":username" element={<UserPage />}>
                    <Route path="posts">
                      <Route path=":postId" element={<PostPage />} />
                    </Route>
                  </Route>
                </Route>
                <Route element={<Protected />}>
                  <Route path="write" element={<Write />} />
                </Route>
              </Route>
            </Routes>
            <Footer />
          </div>
        </ThemeContext.Provider>
      </AuthProvider>
    </Router>
  );
}

export default App;
