import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import NavItems from "./components/NavItems";
import SideBar from "./components/SideBar";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);
  // const [addedItems, setAddedItems] = useState([]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

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
      <NavBar onOpenCart={openCart} cartAmount={cartAmount} />
      {isCartOpen && <SideBar cartItems={items} onClose={closeCart} />}
      <Banner />
      <h1 className="flex flex-wrap justify-center mt-20 text-2xl text-center">
        Find a special selection here, tailored just for you.
      </h1>
      <NavItems items={items} changeCartAmount={changeCartAmount} />
    </div>
  );
}

export default App;
