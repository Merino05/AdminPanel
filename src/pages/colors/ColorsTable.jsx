import React from "react";
import PaginatedTable from "../../component/PaginatedTable";
import AddColor from "./AddColor";

const ColorsTable = () => {
  const data = [
    { id: "1", title: "مشکی", code: "#000000" },
    { id: "2", title: "قرمز", code: "#f44336" },
    { id: "3", title: "قرمز", code: "#f44336" },
    { id: "4", title: "قرمز", code: "#f44336" },
    { id: "5", title: "قرمز", code: "#f44336" },
  ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "نام رنگ" },
    {
      field: "code",
      title: "کد رنگ",
      render: (item) => (
        <div className="d-flex justify-content-center align-items-center gap-2">
          <div
            style={{ background: item.code, width: "20px", height: "20px", borderRadius: "4px" }}
          ></div>
          <span>{item.code}</span>
        </div>
      ),
    },
  ];

  const additionalElements = (itemId) => {
    return (
      <i
        className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
        title="حذف رنگ"
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
    <>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        numberOfPage={2}
      >
        <AddColor />
      </PaginatedTable>
    </>
  );
};

export default ColorsTable;