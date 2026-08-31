import React from "react";
import PaginatedTable from "../../component/PaginatedTable";
import AddGuaranty from "./AddGuaranty";

const GuarantiesTable = () => {
  const data = [
    { id: "1", title: "گارانتی 1", duration: "12 ماه", description: "توضیحات اجمالی در مورد این گارانتی" },
  ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان گارانتی" },
    { field: "duration", title: "مدت گارانتی" },
    { field: "description", title: "توضیحات" },
  ];

  const additionalElements = (itemId) => {
    return (
      <i
        className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
        title="حذف گارانتی"
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
        numberOfPage={5}
      >
        <AddGuaranty />
      </PaginatedTable>
    </>
  );
};

export default GuarantiesTable;