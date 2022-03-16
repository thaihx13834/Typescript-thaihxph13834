import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import type { ProductType } from "./types/product";

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(" http://localhost:3001/products");
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div className="App">
      <hr />
      {products.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
}

export default App;
