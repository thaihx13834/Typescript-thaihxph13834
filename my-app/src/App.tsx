import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import type { Product } from "./types/product";
import axios from "axios";
import ShowInfo from "./showinfo";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(`http://localhost:3001/products`);
      setProducts(data);
    };
    getProducts();
  }, []);

  const removeProduct = async (id: number) => {
    const { data } = await axios.delete(`http://localhost:3001/products/` + id);
    if (data) {
      const newProducts = products.filter((item) => item.id !== id);
      setProducts(newProducts);
    }
  };

  const [info, setInfo] = useState<Product>({
    id: 1,
    name: "Thai",
    age: 12,
  });

  return (
    <div className="App">
      <ShowInfo info={info} />
      {products.map((item) => (
        <div>
          {item.name}
          <button onClick={() => removeProduct(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default App;
