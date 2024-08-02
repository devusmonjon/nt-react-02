const Hero = () => {
  return (
    <section className="relative h-[70vh] w-full">
      <div className="absolute w-full h-full top-0 left-0 -z-10">
        <img
          src="/hero-bg.png"
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container h-full grid place-items-center">
        <div className="w-[730px] text-center h-[350px] bg-[#f7f8facc] backdrop-blur-[12px] p-[33px_95px]">
          <h2 className="text-[#1D252C] text-[40px] text-center font-poppins font-medium leading-[57.6px]">
            🌱
            <br />
            The nature candle
          </h2>
          <p className="text-[#1D252C] text-[18px] font-normal leading-[25.6px] text-center font-poppins mb-[45px]">
            All handmade with natural soy wax, Candleaf is a companion for all
            your pleasure moments{" "}
          </p>
          <button
            type="button"
            className="p-[8px_44px] rounded-[4px] bg-[#56B280] text-[20.645px] text-white font-medium"
          >
            Discovery our collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
