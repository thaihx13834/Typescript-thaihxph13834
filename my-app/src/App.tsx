import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import type { ProductType } from "./types/product";

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(" http://localhost:3000/products");
      setProducts(data);
    };
    getProducts();
  }, []);

  const removeProduct = async (id: number) => {
    console.log(id);
    const { data } = await axios.delete("http://localhost:3000/products/" + id);
    if (data) {
      const newProducts = products.filter((item) => item.id !== id);
      setProducts(newProducts);
    }
  };

  return (
    <div className="App">
      <hr />
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
