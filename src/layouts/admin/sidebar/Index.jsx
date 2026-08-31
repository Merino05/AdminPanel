import React, { useContext } from "react";
import { AdminContext } from "../../../context/adminLayoutContext.jsx";
import Avatar from "./Avatar.jsx";
import SideBarGroupTitle from "./SideBarGroupTitle.jsx";
import SideBarItems from "./SideBarItems.jsx";


const Index = () => {
  const {showSidebar} = useContext(AdminContext)
  return (
    <section id="sidebar_section" className="bg-dark">
      <div
        className={`mini_sidebar collapsedd bg-dark h-100 ${showSidebar ? "expanded" : null}`}
      >
        <ul className="p-0 m-0">
          <Avatar
            name="سیده نرگس موسوی"
            imagePath="/assets/images/avatar/user2.jpg"
          />
            <SideBarItems title="داشبورد" icon="fas fa-percentage" to="/"/>
          {/* <!-- =================================== --> */}
          <SideBarGroupTitle title="فروشگاه" />
          <SideBarItems title="مدیریت گروه محصول" icon="fas fa-stream" to="/categoery"/>
          <SideBarItems title="مدیریت محصول" icon="fas fa-cube" to="/product"/>
          <SideBarItems title="مدیریت برند ها" icon="fas fa-copyright" to="/brands"/>
          <SideBarItems title=" مدیریت گارانتی ها" icon="fab fa-pagelines" to="/guaranties"/>
          <SideBarItems title="مدیریت رنگ ها" icon="fas fa-palette" to="/colors"/>
          <SideBarItems title="مدیریت تخفیف ها" icon="fas fa-percentage" to="/discounts"/>

          {/* <!-- =================================== --> */}
          <SideBarGroupTitle title="سفارشات و سبد" />
          <SideBarItems title="مدیریت سبد ها" icon="fas fa-shopping-basket" to="/carts"/>
          <SideBarItems title="مدیریت سفارشات" icon="fas fa-luggage-cart" to="/orders"/>
          <SideBarItems title="مدیریت نحوه ارسال" icon="fas fa-truck-loading" to="/deliveries"/>

          {/* <!-- =================================== --> */}
          <SideBarGroupTitle title="کاربران و همکاران"/>
          <SideBarItems title="مشاهده کاربران" icon="fas fa-users" to="/users"/>
          <SideBarItems title="نقش ها" icon="fas fa-user-tag" to="/roles"/>
          <SideBarItems title="مچوز ها" icon="fas fa-shield-alt" to="/permissions"/>

          {/* <!-- =================================== --> */}
          <SideBarGroupTitle title="ارتباطات" />
          <SideBarItems title="سوال ها" icon="fas fa-question-circle" to="/questions"/>
          <SideBarItems title="نظرات" icon="fas fa-comment" to="/comments"/>
          
        </ul>
      </div>
    </section>
  );
};

export default Index;
