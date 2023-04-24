// //import Navbar from "../Header/header";
// // import React from "react";

// import Navbar from "../Header/header";
// const homeOffsetB = document.getElementById("home").clientHeight;
// // const MyContext = React.createContext();
// export const test = () => {
//   return <Navbar data={homeOffsetB} />;
// };

const Home = () => {
  return (
    <main
      id="home"
      className="bg-[url(../images/background.jpg)] h-auto md:h-screen w-screen bg-cover bg-center py-8 pb-44 sm:py-12 flex flex-col items-center  scroll-smooth"
    >
      <div className=" mt-44 text-white">
        <p className="text-xl md:text-2xl sm::text-3xl 2xl:text-4xl mb-3 sm:mb-6">
          الوســــــام
        </p>
        <h1 className="font-semibold text-3xl sm:text-5xl xl:text-6xl 2xl:text-7xl !leading-tight ">
          للمحاماه والإستشـارات <br /> القانونية والتحكيم
        </h1>
        <button className="px-6 py-2 md:px-8 md:py-3 text-xl bg-main-color rounded-md mt-6 sm:mt-8 hover:bg-[#AF8149] transition-all">
          إقرأ المزيد
        </button>
      </div>
    </main>
  );
};

export default Home;
