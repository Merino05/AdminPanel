import React from "react";
import PaginatedTable from "../../component/PaginatedTable";
import AddDiscount from "./AddDiscount";

const DiscounTstable = () => {
  const data = [
    { id: "1", title: "تخفیف شماره 1", code: "takhfif1", percent: "39%", expire: "1400/10/12", for: "همه" },
  ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان" },
    { field: "code", title: "کد" },
    { field: "percent", title: "درصد تخفیف" },
    { field: "expire", title: "تا تاریخ" },
    { field: "for", title: "برای" },
  ];

  const additionalElements = (itemId) => {
    return (
      <>
        <i
          className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
          title="ویرایش کد"
          data-bs-toggle="modal"
          data-bs-placement="top"
          data-bs-target="#add_discount_modal"
        ></i>
        <i
          className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
          title="حذف کد"
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
        <AddDiscount />
      </PaginatedTable>
    </>
  );
};

export default DiscounTstable;