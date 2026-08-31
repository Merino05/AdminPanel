import React from "react";
import PaginatedTable from "../../component/PaginatedTable";
import AddProduct from "./AddProduct";

const TableProduct = () => {
  const data = [
    {
      id: "1",
      category: "دسته شماره فلان",
      title: "محصول شماره1",
      price: "20000 تومان",
      stock: "10",
      like_count: "30",
      status: "فعال",
    },
    {
      id: "2",
      category: "دسته شماره فلان",
      title: "محصول شماره2",
      price: "30000 تومان",
      stock: "5",
      like_count: "12",
      status: "فعال",
    },
    {
      id: "3",
      category: "دسته شماره فلان",
      title: "محصول شماره3",
      price: "15000 تومان",
      stock: "8",
      like_count: "7",
      status: "غیرفعال",
    },
  ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "category", title: "دسته" },
    { field: "title", title: "عنوان" },
    { field: "price", title: "قیمت" },
    { field: "stock", title: "موجودی" },
    { field: "like_count", title: "تعداد لایک" },
    { field: "status", title: "وضعیت" },
  ];

  const additionField = {
    title: "عملیات",
    elements: (id) => (
      <>
        <i
          className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
          title="ویرایش محصول"
          data-bs-toggle="modal"
          data-bs-target="#add_product_modal"
        ></i>

        <i
          className="fas fa-receipt text-info mx-1 hoverable_text pointer has_tooltip"
          title="ثبت ویژگی"
          data-bs-toggle="modal"
          data-bs-target="#add_product_attr_modal"
        ></i>

        <i
          className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
          title="حذف محصول"
        ></i>
      </>
    ),
  };

  return (
    <PaginatedTable
      data={data}
      dataInfo={dataInfo}
      additionField={additionField}
      numberOfPage={2}
    >
        <AddProduct/>
    </PaginatedTable>
  );
};

export default TableProduct;

