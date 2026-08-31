import React from "react";
import PaginatedTable from "../../component/PaginatedTable";
import AddDelivery from "./AddDelivery";

const Deliveries = () => {
  const data = [
    { id: "1", title: "پست پیشتاز", cost: "25,000 تومان", time: "10", unit: "روز" },
  ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان" },
    { field: "cost", title: "هزینه" },
    { field: "time", title: "زمان ارسال" },
    { field: "unit", title: "واحد زمان" },
  ];

  const additionalElements = (itemId) => {
    return (
      <>
        <i
          className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
          title="ویرایش"
          data-bs-toggle="modal"
          data-bs-placement="top"
          data-bs-target="#add_delivery_modal"
        ></i>
        <i
          className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
          title="حذف"
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
    <div id="manage_deliveries_section" className="manage_deliveries_section main_section">
      <h4 className="text-center my-3">مدیریت نحوه ارسال</h4>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        numberOfPage={5}
      >
        <AddDelivery />
      </PaginatedTable>
    </div>
  );
};

export default Deliveries;