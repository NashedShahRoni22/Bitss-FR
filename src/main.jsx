import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./Layout/MainLayout.jsx";
import Home from "./Pages/Home/Home.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={"About Page Will Be Here..."} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
