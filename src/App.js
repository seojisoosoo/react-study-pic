import React from "react";
import Show from "./Show";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Visitors from "./Visitors";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/show" element={<Show />} />
        <Route path="/" element={<Landing />} />
        <Route path="/visitors" element={<Visitors />} />
      </Routes>
    </>
  );
};

export default App;
