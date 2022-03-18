import React, { useState, useEffect } from "react";
import type { Product } from "../types/product";
import { NavLink } from "react-router-dom";
import axios from "axios";

type ProductsProps = {
  data: Product[];
};

const Products = (props: ProductsProps) => {
  // const removeProduct = async (id: number) => {
  //   const { data } = await axios.get(`http://localhost:8000/products/${id}`);

  //   data && setProducts(products.filter((item) => item.id !== data.id));
  // };
  return (
    <div>
      Day la trang Products
      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">
              <NavLink to="/products/add">Add Products</NavLink>
            </th>
          </tr>
        </thead>
        <tbody>
          {props &&
            props.data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button>Remove</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
