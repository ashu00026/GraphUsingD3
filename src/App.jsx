import React, { useEffect } from "react";
import Function from "./Function";
import SelectRegion from "./components/SelectRegion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadGraph from "./components/LoadGraph";
import { getRegion } from "./features/GetRegion/GetRegionSlice";
import LoadSectorGraph from "./components/Sector/LoadSectorGraph";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<SelectRegion />} /> */}
          <Route path="/" element={<Function />} />
          <Route path="/filterRegion" element={<LoadGraph />} />
          {/* <Route path="/filterSector" element={<LoadSectorGraph />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
