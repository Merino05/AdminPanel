import React from "react";
import PaginatedTable from "../../component/PaginatedTable";
import AddCart from "./AddCart";

const Carts = () => {
  const data = [
    { id: "1", customer_id: "50", customer_name: "قاسم بساکی", date: "1400/07/15", total: "100هزار تومان", title: "فعال" },
    { id: "2", customer_id: "50", customer_name: "قاسم بساکی", date: "1400/07/15", total: "100هزار تومان", title: "فعال" },
    { id: "3", customer_id: "50", customer_name: "قاسم بساکی", date: "1400/07/15", total: "100هزار تومان", title: "فعال" },
    { id: "4", customer_id: "50", customer_name: "قاسم بساکی", date: "1400/07/15", total: "100هزار تومان", title: "فعال" },
  ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "customer_id", title: "آی دی مشتری" },
    { field: "customer_name", title: "نام مشتری" },
    { field: "date", title: "تاریخ" },
    { field: "total", title: "مبلغ کل سبد" },
    { field: "title", title: "وضعیت" },
  ];

  const additionalElements = (itemId) => {
    return (
      <>
        <i
          className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
          title="ویرایش و جزئیات سبد"
          data-bs-toggle="modal"
          data-bs-placement="top"
          data-bs-target="#edit_cart_modal"
        ></i>
        <i
          className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
          title="حذف سبد"
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
    <div id="manage_cart_section" className="manage_cart_section main_section">
      <h4 className="text-center my-3">مدیریت سبد خرید</h4>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        numberOfPage={3}
      >
        <AddCart />
      </PaginatedTable>
    </div>
  );
};

export default Carts;