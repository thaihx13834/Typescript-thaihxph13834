import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ShowInfo from "./component/ShowInfo";
import Item from "./component/Item";

function App() {
  const [count, setCount] = useState(0);

  const [products, setProducts] = useState([
    { id: 1, name: "Thai 1" },
    { id: 2, name: "Thai 2" },
    { id: 3, name: "Thai 3" },
  ]);

  const removeItem = (id) => {
    const newProducts = products.filter((item) => item.id !== id);
    setProducts(newProducts);
  };

  return (
    <div className="App">
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Click</button>
      {products.map((item, index) => (
        <div>
          {item.name}
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <ShowInfo name="Thai" />
    </div>
  );
}

export default App;
