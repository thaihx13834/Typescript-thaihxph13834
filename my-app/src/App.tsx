import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AdminLayout from "./pages/layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import ManagerProducts from "./pages/ManagerProducts";
import type { Product } from "./types/product";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsAdd from "./pages/ProductsAdd";
function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(" http://localhost:8000/products");
      setProducts(data);
      console.log(products);
    };
    getProducts();
  }, []);

  const onHandleAdd = async (product: Product) => {
    const { data } = await axios.post(
      "http://localhost:8000/products",
      product
    );
    console.log(data);

    data && setProducts([...products, data]);
  };

  return (
    <div className="App">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="products">Product</NavLink>
        </li>
        <li>
          <NavLink to="admin">Admin</NavLink>
        </li>
        <li>
          <NavLink to="admin/products">Manager Product</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products data={products} />} />
          <Route
            path="products/add"
            element={<ProductsAdd onAdd={onHandleAdd} />}
          />
        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<ManagerProducts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
