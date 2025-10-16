import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import {
  Home,
  Flights,
  Hotels,
  Attractions,
  navLinks,
} from "./utils/PageImports";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar logo="TravelSite" links={navLinks} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/attractions" element={<Attractions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
