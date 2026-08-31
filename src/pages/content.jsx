import React, { useContext } from "react";
import Category from "./categoery/Categoery";
import Dashboard from "./dashboard/Dashboard";
import { AdminContext } from "../context/adminLayoutContext";
import Product from "./Product/Product";
import { Route, Routes } from "react-router-dom";
import Guaranties from "./guaranties/Guaranties";
import Brands from "./brands/Brands";
import Colors from "./colors/Colors";
import Discounts from "./discounts/Discounts";
import Carts from "./carts/Carts";
import Orders from "./orders/Orders";
import Deliveries from "./deliveries/Deliveries";
import Users from "./users/Users";
import Roles from "./roles/Roles";
import Permissions from "./permissions/Permissions";
import Questions from "./questions/Questions";
import Comments from "./comments/Comments";
import Logout from "./auth/logout";
import CategoeryChildren from "./categoery/CategoeryChildren";

function Content() {
  const { showSidebar } = useContext(AdminContext);
  return (
    <>
      <section
        id="content_section"
        className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/categoery" element={<Category />}>
          <Route path=":categoeryId" element={<CategoeryChildren/>}/>
          </Route> 
          <Route path="/product" element={<Product />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/guaranties" element={<Guaranties />} />
          <Route path="/brands" element={<Brands />} />

          <Route path="/discounts" element={<Discounts />} />

          <Route path="/carts" element={<Carts />} />

          <Route path="/orders" element={<Orders />} />

          <Route path="/deliveries" element={<Deliveries />} />

          <Route path="/users" element={<Users />} />

          <Route path="/roles" element={<Roles />} />

          <Route path="/permissions" element={<Permissions />} />

          <Route path="/questions" element={<Questions />} />

          <Route path="/comments" element={<Comments />} />
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </section>
    </>
  );
}

export default Content;
