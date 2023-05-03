import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
// import axios from "axios";
import axios from "axios";
import { active } from "d3";
import { PURGE } from "redux-persist";

const initialState = {
  isLoading: true,
  isError: false,
  regions: [],
};
// const url = "http://localhost:5000/home/getAllRegions";
const url = "https://graph-api.onrender.com/home/getAllRegions";

export const getRegion = createAsyncThunk(
  "getAllRegions",
  async (_, thunkApi) => {
    // console.log("in");
    try {
      const resp = await axios.get(url);
      // console.log(resp);
      return resp.data;
    } catch (error) {
      console.log(error);
      // return error;
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
const GetRegionSlice = createSlice({
  name: "regionDetails",
  initialState,
  reducers: {
    clearData: (state) => {
      state.regions = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRegion.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getRegion.fulfilled, (state, action) => {
        state.regions = action.payload;
        state.isLoading = false;
      })
      .addCase(getRegion.rejected, (state, action) => {
        // console.log(action.payload);
        console.log(action);
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(PURGE, (state) => {
        customEntityAdapter.removeAll(state);
      });
  },
});

export default GetRegionSlice.reducer;
