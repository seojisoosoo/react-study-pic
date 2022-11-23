import React from "react";
import Show from "./pages/Show";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Visitors from "./pages/Visitors";
// import ShowSecond from "./ShowSecond";
import ShowDetail from "./pages/ShowDetail";
import {
  RecoilRoot,
} from "recoil";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path="/show" element={<Show />} />
          <Route path="/show/:id" element={<ShowDetail />} />
          <Route path="/" element={<Landing />} />
          <Route path="/visitors" element={<Visitors />} />
          {/* <Route path="/showsecond" element={<ShowSecond />} /> */}
        </Routes>
      </RecoilRoot>
    </>
  );
};

export default App;
