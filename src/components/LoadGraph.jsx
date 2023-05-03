import React, { useEffect, useState } from "react";
import Graph from "./Graph";
import { useSelector } from "react-redux";
import SelectRegion from "./SelectRegion";
import GraphRelevances from "./GraphRelevances";
import GraphLiklihoods from "./GraphLiklihoods";
import Buttons from "./Buttons";
import LoadSectorGraph from "./Sector/LoadSectorGraph";

function LoadGraph() {
  const [loadgraph2, setLoadGraph2] = useState(false);
  const [count, setCount] = useState(0);
  const { isLoading, region } = useSelector((state) => state.regionsData);
  const { sector } = useSelector((state) => state.sectorData);
  // const { topics } = useSelector((state) => state.sectorsData.topics);
  useEffect(() => {
    window.localStorage.setItem("region", JSON.stringify(region));
    window.localStorage.setItem("sector", null);
  }, [region]);
  useEffect(() => {
    if (sector) window.localStorage.setItem("sector", JSON.stringify(sector));
  }, [sector]);
  return (
    <div>
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
      <div className="graph-area">
        {isLoading ? (
          <h3>Loading</h3>
        ) : (
          <div className="Graph-button">
            <div id="chart" className="graph">
              <Graph />
              <GraphRelevances />
              <GraphLiklihoods />
            </div>
            <div className="sideButtons">
              <Buttons setCount={setCount} setLoadGraph2={setLoadGraph2} />
            </div>
            <div id="chart2" className="graph2">
              {loadgraph2 ? (
                <LoadSectorGraph />
              ) : (
                <div className="graph2">
                  <h3 style={{ position: "fixed" }}>
                    Please Select a Topic from left Side
                  </h3>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoadGraph;
