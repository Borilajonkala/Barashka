import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Infomarion from "./pages/Infomarion";
import Catalog from "./pages/Catalog";
import Project from "./pages/Project";
import Header from "./Components/Header";
import Music from "./pages/Music";
import Arcade from "./pages/Arcade";

const App = () => {
return ( <div> <Header />


  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/information" element={<Infomarion />} />
    <Route path="/catalog" element={<Catalog />} />
    <Route path="/project" element={<Project />} />
    <Route path="/music" element={<Music />} />
    <Route path="/arcade" element={<Arcade />} />
  </Routes>
</div>

);
};

export default App;
