import React, { useEffect } from "react";
// import Graph from "./Graph";
import { useDispatch, useSelector } from "react-redux";
import Intensities from "./Intensities";
import Relevances from "./Relevances";
// import SelectRegion from "./SelectRegion";
import SelectRegion from "../SelectRegion";
import Liklihoods from "./Liklihoods";
// import GraphRelevances from "./GraphRelevances";
// import GraphLiklihoods from "./GraphLiklihoods";
// import Buttons from "./Buttons";
import Buttons from "../Buttons";
import { getRegion } from "../../features/GetRegion/GetRegionSlice";

function LoadSectorGraph() {
  const { isLoading } = useSelector((state) => state.regionsData);
  const { sector } = useSelector((state) => state.sectorData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRegion());
  }, [sector]);

  return (
    <div>
      <div>
        {isLoading ? (
          <h3>Loading</h3>
        ) : (
          <div>
            <Intensities />
            <Relevances />
            <Liklihoods />
            {/* <Buttons /> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default LoadSectorGraph;
