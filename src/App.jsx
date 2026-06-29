import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import RootLayout from "./pages/Layout/RootLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
