import React from "react";
import PaginatedTable from "../../component/PaginatedTable";
import AddOrder from "./AddOrder";
import OrderDetails from "./OrderDetails";

const Orders = () => {
  const data = [
    { id: "1", customer_id: "50", title: "قاسم بساکی", status: "پرداخت شده", date: "1400/07/15", total: "100هزار تومان" },
  ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "customer_id", title: "آی دی مشتری" },
    { field: "title", title: "نام مشتری" },
    { field: "status", title: "وضعیت" },
    { field: "date", title: "تاریخ پرداخت" },
    { field: "total", title: "مبلغ پرداختی" },
  ];

  const additionalElements = (itemId) => {
    return (
      <>
        <i
          className="fas fa-shopping-cart text-info mx-1 hoverable_text pointer has_tooltip"
          title="جزئیات سفارش"
          data-bs-toggle="modal"
          data-bs-placement="top"
          data-bs-target="#order_details_modal"
        ></i>
        <i
          className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
          title="حذف سفارش"
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
    <div id="manage_orders_section" className="manage_orders_section main_section">
      <h4 className="text-center my-3">مدیریت سفارشات</h4>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        numberOfPage={5}
      >
        <AddOrder />
      </PaginatedTable>
      <OrderDetails />
    </div>
  );
};

export default Orders;