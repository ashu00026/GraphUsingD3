import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
// import axios from "axios";
import axios from "axios";

const initialState = {
  // regions: [],
  isLoading: false,
  isError: false,
  region: null,
  countries: [],
  sectors: [],
  intensities: null,
  liklihoods: null,
  relevances: null,
};
const url = "http://localhost:5000/home/filterByRegion";
export const getRegionData = createAsyncThunk("getRegionData", async (data) => {
  // console.log("in");
  try {
    console.log(data);
    const resp = await axios.post(url, data);
    console.log(resp);
    const realdata = { ...resp.data, data };
    return realdata;
  } catch (error) {
    return error;
  }
});
const RegionDataSlice = createSlice({
  name: "regionDetails",
  initialState,
  reducers: {
    clearData: (state) => {
      state.region = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRegionData.pending, (state, action) => {
        state.isLoading = true;
        // state.regions=
      })
      .addCase(getRegionData.fulfilled, (state, { payload }) => {
        // console.log(payload);
        state.intensities = payload.finalCountryIntensities;
        state.liklihoods = payload.finalCountryLiklihoods;
        state.relevances = payload.finalCountryRelevaces;
        state.region = payload.data.region;
        state.countries = payload.theCountries;
        state.sectors = payload.theSectors;
        // console.log();
        state.isLoading = false;
      })
      .addCase(getRegionData.rejected, (state, { payload }) => {
        console.log(payload);
        state.isError = true;
      });
  },
});

export default RegionDataSlice.reducer;
