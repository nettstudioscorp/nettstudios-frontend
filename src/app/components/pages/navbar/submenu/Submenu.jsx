import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../submenu/Submenu.css";

const Submenu = ({ title, items }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const openSubmenu = () => {
    setSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setSubmenuOpen(false);
  };

  return (
    <>
      <li onClick={openSubmenu} className="menu-item">
        <span>{title}</span>

        {items && items.length > 0 && <span className="submenu-arrow">›</span>}
      </li>

      {submenuOpen && (
        <div className="submenu-overlay">
          <button className="back-btn" onClick={closeSubmenu}>
            ← Voltar
          </button>
          <ul className="submenu">
            {items.map((item, index) => (
              <li key={index}>
                <Link to={item.link} onClick={closeSubmenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Submenu;
