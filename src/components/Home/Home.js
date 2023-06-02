import "./home.css";

const Home = () => {
  return (
    <main
      id="home"
      className="bg-[url(../images/mobilebackground.webp)] sm:bg-[url(../images/background.webp)] h-auto md:h-screen w-screen bg-center py-52 sm:py-28 flex flex-col items-center"
    >
      <div className="md:mt-44 xl:mt-56 text-white">
        <p className="text-xl sm:text-3xl 2xl:text-4xl mb-3 sm:mb-6">
          شركة الوســــــام
        </p>
        <h1 className="font-semibold text-3xl sm:text-5xl xl:text-6xl 2xl:text-7xl !leading-tight ">
          للمحاماه والإستشـارات <br /> القانونية والتحكيم
        </h1>
        <a
          className="inline-block px-6 py-2 md:px-8 md:py-3 text-xl bg-main-color rounded-full mt-6 sm:mt-8 hover:bg-[#AF8149] transition-all"
          href="#about"
        >
          إقرأ المزيد
        </a>
      </div>
    </main>
  );
};

export default Home;
