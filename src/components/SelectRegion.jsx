import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRegionData } from "../features/getRegionData/RegionDataSlice";
import { NavLink, useNavigate } from "react-router-dom";

function SelectRegion({ setLoadGraph2 }) {
  const { allRegions } = useSelector((state) => state.regions.regions);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   console.log(allRegions);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadGraph2(false);
    const formData = new FormData(e.currentTarget);
    // console.log(formData.entries());
    const region = Object.fromEntries(formData);
    // console.log(region);
    dispatch(getRegionData(region));
    // document.getElementById("chart2").innerHTML = "";
    navigate("/filterRegion");
    // setLoadGraph(!loadGraph);
  };
  //   console.log(loadGraph);
  return (
    <section className="region-item">
      <form onSubmit={handleSubmit} className="region-form">
        <label htmlFor="region" className="label">
          Choose a region:
        </label>
        <select name="region" id="Region" className="selection">
          {allRegions.map((region, index) => {
            return (
              <option value={region} key={index} className="selection">
                {region}
              </option>
            );
          })}
        </select>
        <button className="btn" style={{ color: "black" }}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default SelectRegion;
