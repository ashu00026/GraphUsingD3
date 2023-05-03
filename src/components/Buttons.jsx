import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Intensities from "./Sector/Intensities";
import { getSectorData } from "../features/GetSectorData/GetSectorDataSlice";
// import LoadGraph from "./LoadGraph";

function Buttons({ setLoadGraph2, setCount }) {
  const sectors = useSelector((state) => state.regionsData.sectors);
  const dispatch = useDispatch();
  const region = useSelector((state) => state.regionsData.region);
  // console.log(sectors);

  const navigate = useNavigate();
  const handleSector = (e) => {
    // console.log(e.target.innerHTML);
    const data = {
      region,
      sector: e.target.innerHTML,
    };
    dispatch(getSectorData(data));
    setLoadGraph2(true);

    setCount((oldS) => oldS + 1);
    // navigate("/filterSector");
  };
  return (
    <div className="btn-container">
      {sectors.map((sector, index) => {
        return (
          <button className="btn" key={index} onClick={(e) => handleSector(e)}>
            {sector}
          </button>
        );
      })}
    </div>
  );
}

export default Buttons;
