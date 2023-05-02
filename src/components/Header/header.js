import logo from "../../assets/images/logo.png";

const Navbar = ({ menu }) => {
  setTimeout(() => {
    const navBarCon = document.getElementById("navCon");
    const wesamLogo = document.getElementById("wesam-logo");
    window.onscroll = () => {
      if (window.scrollY >= 100) {
        navBarCon.className =
          "w-full bg-main-dark fixed left-1/2 -translate-x-1/2 top-0 z-30 shadow-lg";
        wesamLogo.className = "w-16 md:w-24 cursor-pointer transition-all";
      } else {
        navBarCon.className =
          "w-full fixed left-1/2 -translate-x-1/2 top-0 z-30";
        wesamLogo.className = "w-20 md:w-32 cursor-pointer transition-all";
      }
    };
  }, 10);
  return (
    <div
      id="navCon"
      className="w-full fixed left-1/2 -translate-x-1/2 top-0 z-30"
    >
      <div
        id="nav"
        className="px-3 sm:px-0 container w-screen mx-auto flex justify-between items-center top-0"
      >
        <div className="flex gap-8 lg:gap-12 items-center">
          <img
            id="wesam-logo"
            className="w-20 md:w-32 cursor-pointer transition-all"
            src={logo}
            alt="Wesam Logo"
          />
          <ul>
            <li className="hidden sm:flex gap-3 md:gap-8 text-white child-hover:text-main-color-light child:transition-all">
              <a href="#home">الرئيسية</a>
              <a href="#about">من نحن</a>
              <a href="#services">خدماتنا</a>
              <a href="#specialties">تخصصاتنا</a>
              <a href="#order">أطلب خدمة</a>
              <a href="#contact">اتصل بنا</a>
            </li>
          </ul>
        </div>
        <button className="hidden sm:block px-6 py-2 rounded-full bg-main-color hover:bg-[#AF8149] transition-all text-white">
          إحجز الآن
        </button>
        <div
          className="sm:hidden flex flex-col justify-between gap-1 child:bg-main-color-light child:w-8 child:h-1 child:rounded-full"
          data-menu-btn
          onClick={() => {
            menu.classList.toggle("hidden");
            setTimeout(() => {
              menu.classList.toggle("opacity-0");
            }, 10);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
