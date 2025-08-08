export default function CartSidebar({ cartItems, onClose }) {
  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 overflow-y-auto z-50">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h2 className="text-xl font-bold">Meu Carrinho</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-black">
          ✕
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Seu carrinho está vazio.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 mb-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-contain"
            />
            <div className="flex-1">
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-gray-600">${item.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
