import React from "react";
import PaginatedTable from "../../component/PaginatedTable";
import AddRole from "./AddRole";

const Roles = () => {
  const data = [
    { id: "1", title: "نقش شماره 1", description: "توضیحات در مورد این نقش که چیست و کلیات آن کدام است", status: "فعال" },
  ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان" },
    { field: "description", title: "توضیحات" },
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
  ];

  const additionalElements = (itemId) => {
    return (
      <>
        <i
          className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
          title="ویرایش نقش"
          data-bs-toggle="modal"
          data-bs-placement="top"
          data-bs-target="#add_role_modal"
        ></i>
        <i
          className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
          title="حذف نقش"
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
    <div id="manage_role_section" className="manage_role_section main_section">
      <h4 className="text-center my-3">مدیریت نقش ها</h4>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        numberOfPage={5}
      >
        <AddRole />
      </PaginatedTable>
    </div>
  );
};

export default Roles;