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
import PostPage from "./components/PostPage";
import UserPage from "./components/UserPage";

import ThemeContext from "./context/ThemeContext";
import { useTheme } from "./hooks/useTheme";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <AuthProvider>
      <ThemeContext.Provider value={theme}>
        <Router>
          <div className="flex min-h-screen flex-col">
            <Header toggleTheme={toggleTheme} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/postTest"
                element={
                  <PostPage
                    title="title that i really thought about for "
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aspernatur impedit quis! Alias, dolorum? Autem in earum sapiente harum cupiditate officiis, distinctio qui dolore doloribus suscipit velit dicta, dignissimos nam obcaecati quo placeat! Eos, error suscipit ipsa sunt provident odio omnis laborum reiciendis nam explicabo aliquid doloribus magnam cupiditate dolores consectetur amet repudiandae, impedit quasi molestiae quibusdam autem incidunt, porro aliquam? Voluptate inventore accusantium et velit fugiat quos asperiores! Eligendi quo dolores reprehenderit, beatae obcaecati quibusdam accusamus quasi maiores blanditiis doloribus, laudantium inventore earum consequuntur! Corrupti, repellendus ab est veniam quia debitis ex dolore animi, explicabo illo iste ut? Distinctio quaerat numquam doloribus tempora? Libero consequatur non praesentium dicta obcaecati autem harum laudantium magnam repellat neque quas voluptatem labore blanditiis, iure ab eligendi dolore repudiandae at aspernatur amet ullam iusto perspiciatis assumenda modi? Sapiente mollitia rem soluta explicabo nam cupiditate doloremque, pariatur dolores. Rerum soluta veniam unde reiciendis. Fugiat magni error molestias at maiores, numquam repudiandae obcaecati consequuntur veniam ut officiis quae ipsum optio saepe fuga quas aperiam? Animi excepturi, cum dignissimos adipisci expedita natus odio ex assumenda modi. Dolorem accusamus veniam, magni eveniet corrupti rem distinctio ea reiciendis repellendus saepe amet, id architecto provident quasi ab? Quam corrupti quod ducimus porro dolore odit dolorem error ullam soluta nihil eius maiores, neque sequi molestias debitis quas enim consequatur id consequuntur fugit itaque vitae at facilis modi! Eum voluptates ratione, distinctio, quae cum amet adipisci sed veritatis totam veniam quia officia consectetur facere dicta nisi atque modi maiores dolorem? Voluptates corrupti, repudiandae quasi autem reprehenderit ipsum vero temporibus consectetur possimus ad sed quae, voluptatibus illo, commodi cupiditate inventore at vitae repellendus. Illum doloremque, consectetur culpa rem cupiditate ad laborum vitae enim placeat cum ratione impedit, distinctio necessitatibus maxime aut animi amet iste dolores perspiciatis sapiente optio quo. Est veritatis consectetur, minima dignissimos mollitia, maiores magni perspiciatis sequi nemo deserunt veniam rerum, cumque accusantium recusandae iusto corporis pariatur expedita harum ad commodi. Tenetur fugiat dolore nam, veniam provident exercitationem sequi tempore accusantium modi eveniet omnis ducimus culpa natus voluptas iure illo obcaecati asperiores non. Fugit ex iure ducimus et repellat, id quos deleniti nam possimus neque minima officiis aperiam. Perspiciatis minima distinctio natus fugiat. Aperiam repellendus in maxime natus? Ipsum cum sapiente explicabo suscipit commodi iusto illo vero possimus reprehenderit voluptas asperiores placeat, voluptatibus, repellendus cumque ad rerum, quae enim ipsa vitae. Optio laboriosam eaque et voluptatum deleniti. Quod ut dicta pariatur laboriosam, a consectetur! Voluptates perspiciatis ipsa labore nobis enim pariatur eos. Culpa animi delectus saepe quisquam quas ut dolore voluptates veritatis quis, eos, ratione nulla porro provident hic illum optio? Neque repellat autem sequi modi velit? Culpa quam eaque consequatur? Officiis libero veniam ipsam vitae. Expedita eligendi reiciendis esse culpa sequi saepe repellat veniam est! Quia sunt quidem quos vero enim hic, adipisci cumque? Consequuntur, nemo? Officia dignissimos repellendus nemo doloremque iusto corporis dolor at corrupti tempore natus consectetur, quod esse provident sit repellat obcaecati fugiat laudantium, eaque optio accusamus praesentium maxime laborum deserunt? Numquam, ad. Quaerat accusamus similique voluptates!"
                    author={{
                      username: "celio",
                      description: "In love of nature and sports",
                      profilePicture: "https://picsum.photos/200",
                      followersCount: 1000,
                      followingCount: 12,
                    }}
                    thumbnail="https://picsum.photos/800/600"
                    reactions={{ likes: 100, comments: 20 }}
                    timeOfPublication="27/07/2024"
                    categories={["Travel", "Sport"]}
                  />
                }
              />
              <Route path="user" element={<UserPage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ThemeContext.Provider>
    </AuthProvider>
  );
}

export default App;
