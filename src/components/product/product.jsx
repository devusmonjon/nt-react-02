const Product = ({ title, price, img }) => {
  return (
    <div className="w-[255px] h-[230px] flex items-center flex-col relative shadow-[0px_4px_24px_0px_rgba(123,123,123,0.15)]">
      <div className="w-full h-[155px] flex justify-center items-center bg-[#F7F8FA]">
        <img src={img} alt="product" className="w-full h-full object-contain" />
      </div>
      <div className="w-full p-[10px_26px_36px_26px]">
        <h1 className="text-[#1D293F] text-[16px] leading-[27.6px] tracking-[-0.9px] font-medium font-poppins text-left">
          {title}
        </h1>
        <span className="absolute bottom-4 right-[26px] text-[#56B280] text-[20px] font-medium font-poppins">
          {price}
        </span>
      </div>
    </div>
  );
};

export default Product;
