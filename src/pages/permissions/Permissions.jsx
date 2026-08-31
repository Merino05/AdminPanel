import React from "react";
import PaginatedTable from "../../component/PaginatedTable";

const Permissions = () => {
  const data = [
    { id: "1", title: "مجوز شماره 1", description: "توضیحات در مورد این مجوز که چیست و کلیات آن کدام است", status: "فعال" },
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

  return (
    <div id="manage_permission_section" className="manage_permission_section main_section">
      <h4 className="text-center my-3">مدیریت مجوز ها</h4>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        numberOfPage={5}
      />
    </div>
  );
};

export default Permissions;