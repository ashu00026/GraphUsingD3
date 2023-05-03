import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import RegionDataReducer from "./features/getRegionData/RegionDataSlice";
// import RegionDataReducer from "./features/getRegionData/RegionDataSlice";
// import AllRegionsReducer from "./features/GetRegion";
import AllRegionsReducer from "./features/getRegion/GetRegionSlice";
import SectorDataReducer from "./features/GetSectorData/GetSectorDataSlice";

const Store = configureStore({
  reducer: {
    regions: AllRegionsReducer,
    regionsData: RegionDataReducer,
    sectorData: SectorDataReducer,
  },
});

export default Store;
