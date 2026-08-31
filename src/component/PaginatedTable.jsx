import React, { useEffect, useState } from "react";

const PaginatedTable = ({ children, data=[], dataInfo, additionField, numberOfPage }) => {
  const [initdata, setinitdata] = useState(data);
  const [search, setsearch] = useState("");
  const [tableData, settableData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [pages, setpages] = useState([]);
  const [pageCount, setpageCount] = useState(1);
  
  useEffect(() => {
    settableData(initdata.slice((currentPage * numberOfPage) - numberOfPage, currentPage * numberOfPage));
  }, [currentPage, initdata]);

  useEffect(() => {
    const count = Math.ceil(initdata.length / numberOfPage);
    setpageCount(count);
    let pageArr = [];
    for (let i = 1; i <= count; i++) {
      pageArr = [...pageArr, i];
    }
    setpages(pageArr);
  }, [initdata, numberOfPage]);

  useEffect(() => {
  if (!Array.isArray(data)) return;
  setinitdata(
    data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(search.toLowerCase())
      )
    )
  );
  setcurrentPage(1);
}, [search, data]);

  return (
    <>
      <div className="row justify-content-between">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="input-group mb-3 dir_ltr">
            <input
              type="text"
              className="form-control"
              placeholder="قسمتی از عنوان را وارد کنید"
              onChange={(e) => setsearch(e.target.value)}
            />
            <span className="input-group-text">جستجو</span>
          </div>
        </div>
        <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
          {children}
        </div>
      </div>

      <table className="table table-responsive text-center table-hover table-bordered">
        <thead className="table-secondary">
          <tr>
            {dataInfo.map((i) => (
              <th key={i.field}>{i.title}</th>
            ))}
            {additionField ? <th>{additionField.title}</th> : null}
          </tr>
        </thead>
        <tbody>
          {tableData.map((d) => (
            <tr key={d.id}>
              {dataInfo.map((i) => (
                <td key={i.field + "_" + d.id}>
                  {i.render ? i.render(d) : d[i.field]}
                </td>
              ))}
              {additionField ? <td>{additionField.elements(d)}</td> : null}
            </tr>
          ))}
        </tbody>
      </table>

      {pages.length > 1 ? (
        <nav aria-label="Page navigation example" className="d-flex justify-content-center">
          <ul className="pagination dir_ltr">
            <li className="page-item pointer">
              <span
                className={`page-link ${currentPage === 1 ? "disabled" : ""}`}
                onClick={() => setcurrentPage(currentPage - 1)}
              >
                <span aria-hidden="true">&raquo;</span>
              </span>
            </li>
            {pages.map((page) => (
              <li className="page-item" key={page}>
                <span
                  className={`page-link pointer ${currentPage === page ? "active" : ""}`}
                  onClick={() => setcurrentPage(page)}
                >
                  {page}
                </span>
              </li>
            ))}
            <li className="page-item pointer">
              <span
                className={`page-link ${currentPage === pageCount ? "disabled" : ""}`}
                onClick={() => setcurrentPage(currentPage + 1)}
              >
                <span aria-hidden="true">&laquo;</span>
              </span>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
};

export default PaginatedTable;