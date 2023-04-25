import "./App.css";
import Navbar from "./components/Header/header";
import Home from "./components/Home/Home";
import About from "./components/Home/about";
import Services from "./components/Home/services";
import Specialties from "./components/Home/specialties";
import Order from "./components/Home/order";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Home/contact";

function App() {
  return (
    <div className="App  scroll-smooth" dir="rtl">
      <Navbar />
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
