import React from "react";
import PaginatedTable from "../../component/PaginatedTable";
import AddBrands from "./AddBrands";

const BrandsTable = () => {
  const data = [
    { id: "1", title: "brand 1", fa_title: "برند شماره 1", description: "توضیحات اجمالی در مورد این برند", logo: "/assets/images/logo.png" },
    { id: "2", title: "brand 2", fa_title: "برند شماره 2", description: "توضیحات اجمالی در مورد این برند", logo: "/assets/images/logo.png" },
  ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان" },
    { field: "fa_title", title: "عنوان فارسی" },
    { field: "description", title: "توضیحات" },
    {
      field: "logo",
      title: "لوگو",
      render: (item) => <img src={item.logo} width="50" alt="logo" />,
    },
  ];

  const additionalElements = (itemId) => {
    return (
      <>
        <i
          className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
          title="ویرایش برند"
          data-bs-toggle="modal"
          data-bs-placement="top"
          data-bs-target="#add_brand_modal"
        ></i>
        <i
          className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
          title="حذف برند"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        ></i>
      </>
    );
  };

  const additionField = {
    title: "عملیات",
    elements: (itemId) => additionalElements(itemId),
  };

  return (
    <>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        numberOfPage={5}
      >
        <AddBrands />
      </PaginatedTable>
    </>
  );
};

export default BrandsTable;