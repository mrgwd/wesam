import "./home.css";
const Home = () => {
  return (
    <main
      id="home"
      className="bg-[url(../images/mobilebackground.webp)] sm:bg-[url(../images/background.webp)] h-auto md:h-screen w-screen bg-center py-52 sm:py-28 flex flex-col items-center"
    >
      <div className="md:mt-44 text-white">
        <p className="text-xl sm:text-3xl 2xl:text-4xl mb-3 sm:mb-6">
          شركة الوســــــام
        </p>
        <h1 className="font-semibold text-3xl sm:text-5xl xl:text-6xl 2xl:text-7xl !leading-tight ">
          للمحاماه والإستشـارات <br /> القانونية والتحكيم
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-4 my-8 items-center child:px-6 child:py-2 child:md:px-8 child:md:py-3 gap-y-4 sm:gap-y-8">
          <a
            className="text-xl rounded-full bg-gradient-to-l from-[#795534] to-[#AF8149] hover:bg-gradient-to-r transition-all"
            href="#about"
          >
            إقرأ المزيد
          </a>
          <a
            className="text-xl rounded-full hover:bg-gradient-to-r bg-gradient-to-l from-[#1d3481] to-[#294ab7] transition-all"
            href="#order"
          >
            اطلب استشارة فورية
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
