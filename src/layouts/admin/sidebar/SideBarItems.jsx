import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const SideBarItems=({title,icon,to})=> {
  return (
   <li className="py-1 text-start pe-3 sidebar_menu_item">
  <NavLink to={to} className="sidebar_link">
    <i className={`ms-3 icon ${icon} text-light`}></i>
    <span className="hiddenable no_wrap font_08">{title}</span>
  </NavLink>
</li>

  );
}

export default SideBarItems;