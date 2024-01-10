import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
const SideMenu = ({ getMenu }) => {
  let [menuS, setMenuS] = useState(0);

  useEffect(() => {
    setMenuS(document.querySelector(".menu"));
    getMenu(menuS);
  }, [getMenu, menuS]);

  document.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      document.querySelector(".menu").classList.add("hidden");
      document.querySelector(".menu").classList.add("opacity-0");
    });
  });
  return (
    <div className="menu opacity-0 hidden h-screen w-screen overflow-hidden transition duration-300 fixed top-0 left z-20">
      <section className="h-screen w-screen flex flex-col justify-between p-6 pt-36 bg-main-dark">
        <div>
          <ul className="text-xl flex flex-col gap-6 text-white child-hover:text-main-color-light child:transition-all">
            <li>
              <a href="#home">الرئيسية</a>
            </li>
            <li>
              <a href="#about">من نحن</a>
            </li>
            <li>
              <a href="#services">خدماتنا</a>
            </li>
            <li>
              <a href="#specialties">تخصصاتنا</a>
            </li>
            <li>
              <a href="#order">أطلب خدمة</a>
            </li>
            <li>
              <a href="#contact">اتصل بنا</a>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <div className="child:w-10 child:h-10 text-center child:leading-[44px] child:bg-main-color child:rounded-full flex justify-center gap-8 text-white/60 mb-20">
              <a
                href="https://www.instagram.com/alwessam_law/?igshid=MmIzYWVlNDQ5Yg=="
                target="_blance"
                aria-label="Follow us on Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61550520355768"
                target="_blance"
                aria-label="Visit our Facebook page"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://twitter.com/alwessam_law"
                target="_blance"
                aria-label="Follow us on Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.linkedin.com/in/alwessamlaw/?trk=public_profile-settings_edit-profile-content&originalSubdomain=sa"
                target="_blance"
                aria-label="Visit our Facebook page"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
          <div>
            <p className="text-white/60">
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
        </div>
      </section>
    </div>
  );
};

export default SideMenu;
