import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import NavItems from "./components/NavItems";

function App() {
  const [items, setItems] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);

  // Function to change cart amount (example implementation)
  const changeCartAmount = () => {
    setCartAmount((prevAmount) => prevAmount + 1);
  };

  const fetchItems = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setItems(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="w-screen box-border overflow-x-hidden p-0 m-0 h-screen bg-neutral-100">
      <NavBar cartAmount={cartAmount} />
      {/* Banner: aqui usamos style para garantir duas camadas (gradiente + imagem) */}
      <Banner />
      <NavItems items={items} changeCartAmount={changeCartAmount} />
    </div>
  );
}

export default App;
