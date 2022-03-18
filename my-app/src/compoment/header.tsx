import React from "react";
import { NavLink } from "react-router-dom";
type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Product</NavLink>
        </li>
        <li>
          <NavLink to="/admin/dashboard">Admin</NavLink>
        </li>
        <li>
          <NavLink to="/admin/products">Manager Product</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
