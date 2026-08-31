import React from "react";
import PaginatedTable from "../../component/PaginatedTable";
import AddComment from "./AddComment";

const Comments = () => {
  const data = [
    {
      id: "1",
      title: "قاسم بساکی",
      type: "نظر",
      for: "محصول فلان",
      text: "قسمتی از متن نظر برای این محصول مثلا 100 کارکتر",
      status: "فعال",
      date: "1400/10/12",
    },
  ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "نام و نام خانوادگی" },
    { field: "type", title: "نوع نظر" },
    { field: "for", title: "برای" },
    { field: "text", title: "قسمتی از متن" },
    {
      field: "status",
      title: "وضعیت",
      render: (item) => (
        <div className="form-check form-switch d-flex justify-content-center align-items-center p-0 h-100">
          <label className="form-check-label pointer" htmlFor={`switch_${item.id}`}>
            {item.status}
          </label>
          <input
            className="form-check-input pointer mx-3"
            type="checkbox"
            id={`switch_${item.id}`}
            defaultChecked={item.status === "فعال"}
          />
        </div>
      ),
    },
    { field: "date", title: "تاریخ" },
  ];

  const additionalElements = (itemId) => {
    return (
      <i
        className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
        title="حذف نظر"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
      ></i>
    );
  };

  const additionField = {
    title: "عملیات",
    elements: (itemId) => additionalElements(itemId),
  };

  return (
    <div id="manage_comments_section" className="manage_comments_section main_section">
      <h4 className="text-center my-3">مدیریت نظرات</h4>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        numberOfPage={5}
      >
        <AddComment />
      </PaginatedTable>
    </div>
  );
};

export default Comments;