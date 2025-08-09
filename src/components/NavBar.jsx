import { ShoppingCart } from "lucide-react";

export default function Navbar({ onOpenCart, cartAmount }) {
  return (
    <nav className="sticky top-0 overflow-hidden flex justify-between items-center bg-indigo-800 text-white p-4 h-24">
      <h1 className="text-3xl font-bold">WearBy</h1>
      <button
        onClick={onOpenCart}
        className="relative transition-all"
        aria-label="Open Cart"
      >
        <ShoppingCart className="cursor-pointer scale-150 mr-11" />
        {cartAmount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 rounded-full text-xs w-5 h-5 flex items-center justify-center mr-10">
            {cartAmount}
          </span>
        )}
      </button>
    </nav>
  );
}
