import React from "react";
import { useNavigate } from "react-router-dom";

const PrevPageButton = () => {
    const navigate=useNavigate() 
  return (
    <div className="d-flex justify-content-end">
      <div className="btn btn-secondary " onClick={()=>navigate(-1)}> بازگشت</div>
    </div>
  );
};

export default PrevPageButton;
