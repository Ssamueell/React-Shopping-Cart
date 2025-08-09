let NavItems = ({ items, changeCartAmount, addItems }) => {
  console.log("Renderizando NavItems...");
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-20 overflow-x-hidden mx-20">
      {items.map((item) => {
        return (
          <li
            key={item.id}
            className="flex flex-wrap bg-indigo-100 rounded-2xl justify-center hover:scale-110 mt-20 mx-5 transition-all py-2"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-32 object-contain basis-full"
            />
            <div className="basis-full text-center">{item.title}</div>
            <div className="basis-full text-center">${item.price}</div>
            <button
              onClick={() => {
                addItems(item.id);
                changeCartAmount();
              }}
              className="bg-indigo-300 rounded-3xl px-2 py-2 hover:bg-indigo-600 transition-all cursor-pointer mb-2"
            >
              Add to Cart
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
