const Banner = () => {
  return (
    <div
      className="flex flex-wrap items-center w-full h-[500px] bg-cover text-neutral-50 pl-14 bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(0,0,0,0.85)), url('/img/banner.jpg')",
      }}
    >
      <div className="text-2xl text-shadow-2xs">
        <p className="basis-full text-6xl mb-10">Summer sale's promotions</p>
        <button className="bg-neutral-800 rounded-md px-6 py-2 hover:bg-neutral-700 transition-all cursor-pointer">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Banner;
