import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Courses from "./pages/Courses";
import Course from "./pages/Course";
import Student from "./pages/Student";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className=" h-screen bg-black overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/student" element={<Student />} />
          <Route path="/course/:id" element={<Course />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
