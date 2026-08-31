import React from "react";

import AddProduct from "./AddProduct";

import TableProduct from "./ProductTable";
import SetAttribute from "./SetAttribute";

const Product = () => {
  return (
    <div
      id="manage_product_section"
      className="manage_product_section main_section"
    >
      <h4 className="text-center my-3">مدیریت محصولات</h4>
      <TableProduct />
      <SetAttribute/>
    </div>
  );
};

export default Product;
