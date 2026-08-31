import React from "react";
import { useLocation } from "react-router-dom";
import PrevPageButton from "../../component/PrevPageButton";

const CategoeryChildren = () => {
  const location = useLocation();
  return (
    <div className="">
        <PrevPageButton/>
      <h5 className="text-center">
        <span>زیرگروه </span>
        <span className="text-info">{location.state.parentData.title}</span>
      </h5>
    </div>
  );
};

export default CategoeryChildren;
