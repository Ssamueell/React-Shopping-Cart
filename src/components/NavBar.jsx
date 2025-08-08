import { ShoppingCart } from "lucide-react";

let NavBar = ({ cartAmount }) => {
  return (
    <nav className="h-20 bg-indigo-900 flex items-center justify-between p-6 text-neutral-100 text-3xl">
      <div className="cursor-pointer">WearBy</div>
      <div>
        <div className="relative">
          <ShoppingCart className="scale-150 cursor-pointer" />
          <div className="absolute top-[-20px] left-5 scale-75 text-neutral-800 bg-neutral-100 rounded-md">
            {cartAmount}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
