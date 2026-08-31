import React, { useContext, useEffect } from "react";
import AdminContextContainer, { AdminContext } from "../../context/adminLayoutContext.jsx";
import { toggleSidebar } from "../../utils/initialDoms";
import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index";
import Content from "../../pages/content.jsx";
import { useIsLogin } from "../../hook/authHook.jsx";
import { Navigate } from "react-router-dom";
const Index = () => {
  const [loading, isLogin] =useIsLogin()
  // const {showSidebar} = useContext(AdminContext)
  useEffect(()=>{
    // require('../../assets/js/toggleSidebar')
    // toggleSidebar();
  },[])
  return (
    <AdminContextContainer>
      {loading ? (
        <h1 className="text-center waiting_center">لطفا صبر کنید...</h1>
      ) : isLogin ? (
      <div>
        <Content/>
        <Navbar />
        <Sidebar />     
      </div>
       ): (
        <Navigate to={"/auth/login"} />
      )}
    </AdminContextContainer>
  );
};

export default Index;
