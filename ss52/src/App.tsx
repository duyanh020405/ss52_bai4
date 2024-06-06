import React from "react";
import Home from "./assets/components/Bai1/Home";
import Contact from "./assets/components/Bai1/Contact";
import About from "./assets/components/Bai1/Contact";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Bai2 from "./assets/components/Bai2/Bai2";
import Elements from "./assets/components/Bai3/Elements";
import Index from "./assets/components/Bai3/Index";
import About2 from "./assets/components/Bai3/About2";
import Contact2 from "./assets/components/Bai3/Contact2";
import Home4 from "./assets/components/Bai4/Login";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/bai2" element={<Bai2 />}></Route>
        <Route path="/elements" element={<Elements />}></Route>
        <Route path="/about2" element={<About2 />}></Route>
        <Route path="/contact2" element={<Contact2 />}></Route>
        <Route path="/index" element={<Index />}></Route>
        <Route path="/service" element={<Index />}></Route>
        <Route path="/" element={<Home4 />}></Route>
      </Routes>
      {/*                                                                    */}
    </div>
  );
}
