import React from "react";
import { Link } from "react-router-dom";
import "../submenu/Submenu.css";

const Submenu = ({ title, items, closeSubmenu }) => {
  return (
    <>
      <li className="menu-item">
        <span>{title}</span>
        {items && items.length > 0 && <span className="submenu-arrow"></span>}
      </li>

      <ul className="submenu">
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.link} onClick={closeSubmenu}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Submenu;
