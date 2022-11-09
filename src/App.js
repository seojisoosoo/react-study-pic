import React from "react";
import Show from "./Show";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Visitors from "./Visitors";
import ShowSecond from "./ShowSecond";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path="/show" element={<Show />} />
          <Route path="/" element={<Landing />} />
          <Route path="/visitors" element={<Visitors />} />
          <Route path="/showsecond" element={<ShowSecond />} />
        </Routes>
      </RecoilRoot>
    </>
  );
};

export default App;
