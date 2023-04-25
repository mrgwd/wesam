import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <footer
      id="footer"
      className="px-3 sm:px-0 py-12 sm:py-16 bg-main-dark text-main-color-light flex flex-col items-center gap-8"
    >
      <div>
        <img src={logo} alt="Wesam Logo" className="w-32" />
        <p className="text-xl sm:text-3xl mb-3 sm:mb-6">الوســــــام</p>
      </div>
      <div>
        <p className="max-w-3xl text-gray-500">
          شارع الأمير سلطان - مبنى رومان سـنتر مقابـل دوار التاريخ - الدور الاول
          مكتب 111. <br />
          <span dir="ltr">+20122368944 ● alwesam.s.d@gmail.com</span>
        </p>
      </div>
      <div className="child:w-12 child:h-12 child:bg-main-color child:rounded-full flex gap-8">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <p>
          Created by{" "}
          <a
            href="https://athr.company"
            rel="noreferrer"
            target="_blank"
            className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1AB4BE] to-[#A7FAFF]"
          >
            ATHR
          </a>
          <br />
          All Rights Reserved ©{" "}
          <span id="date-year">{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
