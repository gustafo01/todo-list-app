import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebarNav">
        <li><Link to={"/home"}>Главня</Link></li>
        <li><Link to={"/calendar"}>Календарь</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
