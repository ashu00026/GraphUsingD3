import { useEffect, useState } from "react";
import Graph from "./components/Graph";
import "./App.css";
import * as d3 from "d3";

// import { no-symbol } from "@heroicons/react/24/solid";
// import Error from "./assets/Error";

// import { BrowserRouter } from "react-router-dom";
import Sample from "./components/Sample";
import { getRegionData } from "./features/getRegionData/RegionDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { getRegion } from "./features/GetRegion/GetRegionSlice";
import SelectRegion from "./components/SelectRegion";

function Function() {
  const setLoadGraph2 = () => {};
  const { isLoading, isError } = useSelector((state) => state.regions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRegion());
  }, []);

  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        {/* <Error /> */}
        <h3>There was Some Error..</h3>
        <p>Please check Your Internet Connection..</p>
      </div>
    );
  }

  return (
    <>
      <div className="header">
        <h3>Visual Representation of Data</h3>
        <div className="headings">
          <div className="Intensities">
            <h4>Intensities are Red</h4>
          </div>
          <div className="Relevances">
            <h4>Relevances are blue</h4>
          </div>
          <div className="Lilkihoods">
            <h4>Liklihoods are Green</h4>
          </div>
        </div>
      </div>
      <div className="region-area">
        <SelectRegion setLoadGraph2={setLoadGraph2} />
      </div>
    </>
  );
}

export default Function;
