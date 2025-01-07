import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./Layout/MainLayout.jsx";
import Home from "./Pages/Home/Home.jsx";
import Products from "./Pages/Products/Products.jsx";
import About from "./Pages/About/About.jsx";
import FreeTools from "./Pages/FreeTools/FreeTools.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/free-tools" element={<FreeTools />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
