import logo from "../../assets/images/logo.png";
setTimeout(() => {
  const navBar = document.getElementById("nav");
  window.onscroll = () => {
    navBar.style.top = `${window.scrollY}px`;

    //if()

    // if (window.scrollY >= navBar.clientHeight)
    //   navBar.className =
    //     "px-3 sm:px-0 container w-screen mx-auto flex justify-between items-center sticky top-0";
    // else if (window.scrollY < navBar.clientHeight)
    //   navBar.className =
    //     "px-3 sm:px-0 container w-screen mx-auto flex justify-between items-center absolute left-1/2 -translate-x-1/2 top-0";
  };
}, 10);

const Navbar = () => {
  setTimeout(() => {
    //const navBar = document.getElementById("nav");
    const navBarCon = document.getElementById("navCon");
    const wesamLogo = document.getElementById("wesam-logo");
    console.log(navBarCon.clientHeight);
    window.onscroll = () => {
      navBarCon.style.top = `${window.scrollY}px`;
      console.log(window.scrollY, window.screen.height);
      // if (window.scrollY >= window.innerHeight - navBarCon.clientHeight) {
      //   navBarCon.className =
      //     "w-full bg-main-dark absolute left-1/2 -translate-x-1/2 top-0";
      //   wesamLogo.className = "w-16 md:w-24 cursor-pointer transition-all";
      // } else {
      //   navBarCon.className = "w-full absolute left-1/2 -translate-x-1/2 top-0";
      //   wesamLogo.className = "w-20 md:w-32 cursor-pointer transition-all";
      // }
      if (window.scrollY >= 100) {
        navBarCon.className =
          "w-full bg-main-dark absolute left-1/2 -translate-x-1/2 top-0 shadow-md";
        wesamLogo.className = "w-16 md:w-24 cursor-pointer transition-all";
      } else {
        navBarCon.className = "w-full absolute left-1/2 -translate-x-1/2 top-0";
        wesamLogo.className = "w-20 md:w-32 cursor-pointer transition-all";
      }
    };
  }, 10);
  return (
    <div
      id="navCon"
      className="w-full absolute left-1/2 -translate-x-1/2 top-0 "
    >
      <div
        id="nav"
        className="px-3 sm:px-0 container w-screen mx-auto flex justify-between items-center"
      >
        <div className="flex gap-12 items-center">
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
        <button className="hidden sm:block px-4 py-2 rounded-md bg-main-color hover:bg-[#AF8149] transition-all text-white">
          إحجز الآن
        </button>
        <div
          className="sm:hidden flex flex-col justify-between gap-1 child:bg-main-color-light child:w-8 child:h-1 child:rounded-full"
          data-menu-btn
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
