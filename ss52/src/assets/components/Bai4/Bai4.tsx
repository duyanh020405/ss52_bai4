import React from "react";
import Login from "./Login";
import { Outlet, Route, Routes } from "react-router-dom";
import Home4 from "./Home4";
export default function Bai4() {
  return (
    <div>
      <Outlet></Outlet>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/index" element={<Home4 />}></Route>
      </Routes>
    </div>
  );
}
