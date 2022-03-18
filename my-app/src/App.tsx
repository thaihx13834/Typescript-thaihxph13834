import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import ShowInfo from "./showinfo";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import WebLayout from "./Layouts/WebLayout";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import AdminLayout from "./Layouts/AdminLayout";
import Dashboard from "./Pages/Dashboard";
import ManagerProducts from "./Pages/ManagerProducts";

function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <NavLink to="/">Home page</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products page</NavLink>
          </li>
          <li>
            <NavLink to="/admin/dashboard">Admin</NavLink>
          </li>
        </ul>
      </header>

      <main>
        <Routes>
          {/* <Route path="/" element={<h1>Home page</h1>} />
          <Route path="products" element={<h1>Products page</h1>} />
          <Route path="about" element={<h1>ABout page</h1>} /> */}

          <Route path="/" element={<WebLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Product />} />
          </Route>

          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product" element={<ManagerProducts />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
