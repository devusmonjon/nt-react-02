const Footer = () => {
  return (
    <footer className="py-[26px] bg-[#E5E5E5] text-[#5E6E89] font-poppins">
      <div className="container">
        <p className="w-full flex justify-between items-center">
          &copy;Candleaf All Rights Reserved.{" "}
          <span>
            Developed by{" "}
            <a
              href="https://github.com/devusmonjon"
              target="_blank"
              className="text-[#56B280] underline"
            >
              Usmonjon Hasanov
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
