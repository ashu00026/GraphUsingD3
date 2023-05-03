import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  region: null,
  sector: null,
  intensities: [],
  liklihoods: [],
  relevances: [],
  topics: [],
  countries: [],
};

// const url = "http://localhost:5000/home/filterBySector";
const url = "https://graph-api.onrender.com/home/filterBySector";

export const getSectorData = createAsyncThunk(
  "getSectorData",
  async (data, thunkApi) => {
    try {
      const resp = await axios.post(url, data);
      const state = thunkApi.getState();
      const region = state.regionsData.region;
      //   const data = resp.data;
      const sector = data.sector;
      return { ...resp.data, region, sector };
    } catch (error) {
      return thunkApi.rejectWithValue("Some Error");
    }
  }
);

const GetSectorDataSlice = createSlice({
  name: "getSectorData",
  initialState,
  reducers: {
    clearState: (state) => {
      state.region = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSectorData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSectorData.fulfilled, (state, action) => {
        // console.log(action);

        state.intensities = action.payload.finalIntensities;
        state.liklihoods = action.payload.finalLikelihoods;
        state.relevances = action.payload.finalRelevances;
        state.topics = action.payload.topics;
        state.countries = action.payload.countries;
        state.region = action.payload.region;
        state.sector = action.payload.sector;
        state.isLoading = false;
      })
      .addCase(getSectorData.rejected, (state, action) => {
        state.isError = true;
      });
  },
});

export default GetSectorDataSlice.reducer;
