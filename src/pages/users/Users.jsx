import React from "react";
import PaginatedTable from "../../component/PaginatedTable";
import AddUser from "./AddUser";

const Users = () => {
  const data = [
    { id: "1", title: "قاسم بساکی", mobile: "09110110011", email: "mahdicmptr@gmail.com", role: "کاربر", date: "1400/10/12" },
  ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "نام و نام خانوادگی" },
    { field: "mobile", title: "موبایل" },
    { field: "email", title: "ایمیل" },
    { field: "role", title: "نقش" },
    { field: "date", title: "تاریخ ثبت نام" },
  ];

  const additionalElements = (itemId) => {
    return (
      <>
        <i
          className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
          title="جزئیات و ویرایش کاربر"
          data-bs-toggle="modal"
          data-bs-placement="top"
          data-bs-target="#add_user_modal"
        ></i>
        <i
          className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
          title="حذف کاربر"
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
    <div id="manage_user_section" className="manage_user_section main_section">
      <h4 className="text-center my-3">مدیریت کاربران</h4>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        numberOfPage={5}
      >
        <AddUser />
      </PaginatedTable>
    </div>
  );
};

export default Users;