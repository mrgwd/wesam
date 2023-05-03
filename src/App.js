import "./App.css";
import { useState } from "react";
import Navbar from "./components/Header/header";
import Home from "./components/Home/Home";
import About from "./components/Home/about";
import Services from "./components/Home/services";
import Specialties from "./components/Home/specialties";
import Order from "./components/Home/order";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Home/contact";
import SideMenu from "./components/Home/sideMenu";

function App() {
  let [menu, setMenu] = useState(0);
  const getMenu = (sideMenu) => {
    setMenu(sideMenu);
  };
  // useEffect(() => {
  //   function handleScroll() {
  //     // This function will be called every time the user scrolls
  //     console.log("User scrolled");
  //     // Perform any actions you want to happen on scroll here
  //   }
  //   window.addEventListener("scroll", handleScroll);
  //   // Remove the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div className="App  scroll-smooth" dir="rtl">
      <Navbar menu={menu} />
      <SideMenu getMenu={getMenu} />
      <Home />
      <About />
      <Services />
      <Specialties />
      <Order />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
