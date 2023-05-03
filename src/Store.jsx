import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import RegionDataReducer from "./features/getRegionData/RegionDataSlice";
// import RegionDataReducer from "./features/getRegionData/RegionDataSlice";
// import AllRegionsReducer from "./features/GetRegion";
import AllRegionsReducer from "./features/getRegion/GetRegionSlice";
import SectorDataReducer from "./features/GetSectorData/GetSectorDataSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducer = combineReducers({
  regions: AllRegionsReducer,
  regionsData: RegionDataReducer,
  sectorData: SectorDataReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devtools: true,
  devtools: false,
});

export default Store;
