import React from "react";

import Addcategoery from "./Addcategoery";

import CategoeryTable from "./CategoeryTable";
import AddAttributes from "./AddAttributes";

const Category = () => {
  return (
    <div
      id="manage_product_category"
      className="manage_product_category main_section"
    >
      <h4 className="text-center my-3">مدیریت دسته بندی محصولات</h4>
    
      <CategoeryTable />
      <AddAttributes/>
    </div>
  );
};

export default Category;
