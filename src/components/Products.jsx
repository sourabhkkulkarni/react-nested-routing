import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <>
      {" "}
      <input type="search" placeholder="Search products" />
      <nav>
        <Link to={"featured"}>Featured </Link>
        <Link to={"new"}>New </Link>
      </nav>
      <Outlet />
    </>
  );
};
