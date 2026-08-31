import React, { useEffect, useState } from "react";
import PaginatedTable from "../../component/PaginatedTable";
import AddProduct from "../Product/AddProduct";
import Addcategoery from "./Addcategoery";
import { getCategories } from "../../services/category";
import  Alert  from "../../utils/alert";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { dateConverter } from "../../utils/dateConverter";


const CategoeryTable = () => {
  const params=useParams();
  const [data,setData] =useState([])
  const handleGetCategories = async () => {
    try {
      const res = await getCategories(params.categoeryId);
      if (res.status === 200) {
        setData(res.data.data);
      } else {
        Alert("ارور!", res.data.message, "error");
      }
    } catch (error) {
      Alert("ارور!", "مشکلی از سمت سرور رخ داده است", "error");
    }
  };
  useEffect(() => {
    
    handleGetCategories();
  }, [params]);

  // const data = [
  //   {
  //     id: "1",

  //     category: "aaa",

  //     title: "bbb",

  //     price: "1111",

  //     stock: "5",

  //     like_count: "2",

  //     status: "1",
  //   },

  //   {
  //     id: "2",

  //     category: "ccc",

  //     title: "ddd",

  //     price: "2222",

  //     stock: "7",

  //     like_count: "2",

  //     status: "1",
  //   },

  //   {
  //     id: "3",

  //     category: "ccc",

  //     title: "ddd",

  //     price: "2222",

  //     stock: "7",

  //     like_count: "2",

  //     status: "1",
  //   },

  //   {
  //     id: "4",

  //     category: "ccc",

  //     title: "ddd",

  //     price: "2222",

  //     stock: "7",

  //     like_count: "2",

  //     status: "1",
  //   },
  // ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "price", title: "قیمت محصول" },
    { field: "parent_id", title: "والد" },
    { field: "created_at", title: "تاریخ" , render: (item) =>dateConverter(item.created_at) },
    
  ];

  const navigate=useNavigate();
  const additionalElements = (itemId) => {
    // console.log(itemId);
    return (
      <>
        <i
          className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip"
          title="زیرمجموعه"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          onClick={() => navigate(`/categoery/${itemId.id}`, { state: { parentData: itemId } })}
        ></i>

        <i
          className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
          title="ویرایش دسته"
          data-bs-placement="top"
          data-bs-toggle="modal"
          data-bs-target="#add_product_category_modal"
        ></i>

        <i
          className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip"
          title="افزودن ویژگی"
          data-bs-placement="top"
          data-bs-toggle="modal"
          data-bs-target="#add_product_category_attr_modal"
        ></i>

        <i
          className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
          title="حذف دسته"
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
    <>
    {/* {
      location.state?(
        <h5 className="text-center">
      <span>زیرگروه </span>
      <span className="text-info">{location.state.parentData.title}</span>
    </h5>
      ):null
    } */}
      <Outlet/>
      {
        data.length ?(

      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        numberOfPage={3}
      >
        <Addcategoery />
      </PaginatedTable>
        ):(
          <h5 className="text-center my-5 text-danger"> هیچ دسته بندی ای یافت نشد</h5>
        )
      }
    </>
  );
};

export default CategoeryTable;
