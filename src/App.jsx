import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Infomarion from "./pages/Infomarion";
import Catalog from "./pages/Catalog";
import Project from "./pages/Project";
import Header from "./Components/Header";

const App = () => {
return ( <div> <Header />


  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/information" element={<Infomarion />} />
    <Route path="/catalog" element={<Catalog />} />
    <Route path="/project" element={<Project />} />
  </Routes>
</div>

);
};

export default App;
