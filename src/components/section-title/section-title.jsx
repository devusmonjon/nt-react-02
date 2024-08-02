const SectionTitle = ({ title, subtitle, className }) => {
  return (
    <div className={`w-full text-center font-poppins ${className}`}>
      <h1 className="text-[#0B254B] text-[40px] font-medium leading-[57.6px] mb-[15px]">
        {title}
      </h1>
      <p className="text-[18px] font-medium leading-[27.6px] text-[#5E6E89]">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;
