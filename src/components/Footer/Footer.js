import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer
      id="footer"
      className="px-3 sm:px-0 py-12 pb-8 sm:py-16 sm:pb-12 bg-main-dark text-main-color-light flex flex-col items-center gap-8"
    >
      <div>
        <img src={logo} alt="Wesam Logo" className="w-32" />
        <p className="text-xl sm:text-3xl mb-3 sm:mb-6 text-[#907856]">
          الوســــــام
        </p>
      </div>
      <div>
        <p className="max-w-3xl text-gray-500">
          شارع الأمير سلطان - مبنى رومن سـنتر
          <br />
          <span dir="ltr">+20122368944 ● Info@alwissamlaw.com</span>
        </p>
      </div>
      <div className="child:w-10 child:h-10 text-center child:leading-[44px] child:bg-main-color child:rounded-full flex gap-8">
        <div>
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <div>
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
      <div>
        <p className="text-main-color-light/75 font-semibold">
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
