import { useEffect } from "react";
import about from "../../assets/images/aboutUs.webp";
const About = () => {
  useEffect(() => {
    let [aboutHeading, aboutImage, aboutDetails] = [
      document.getElementById("about-heading"),
      document.getElementById("about-image"),
      document.getElementById("about-details"),
    ];
    function handleScroll() {
      window.scrollY > aboutHeading.offsetTop - 900 &&
        aboutHeading.classList.remove("opacity-0", "mt-28");
      // eslint-disable-next-line no-unused-expressions
      window.scrollY > aboutHeading.offsetTop - 600 &&
        (aboutImage.classList.remove("sm:opacity-0", "sm:mr-16"),
        aboutDetails.classList.remove("sm:opacity-0", "sm:ml-16"));
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      id="about"
      className="container mx-auto px-3 sm:px-0 py-10 sm:py-16  flex flex-col items-center rounded-b-3xl sm:rounded-b-none"
    >
      <div
        id="about-heading"
        className="mt-28 opacity-0 transition-all duration-1000"
      >
        <h2 className="text-3xl md:text-5xl mb-2 md:mb-6 text-main-dark font-bold">
          من نحن؟
        </h2>
        <p className="max-w-3xl text-gray-500">
          شركة مهنية ذات مسؤولية محدودة، جنسيتها سعودية، مرخصة من وزارة العدل
          ووزارة التجارة في المملكة العربية السعودية، وكذلك من الهيئة السعودية
          للمحامين، مركزها الرئيسي فـي محافظة جدة، تتمتع بخبرات على أعلى مستوى،
          وتدمج في عملها بين التمسك بأحكام الشريعة الإسلامية والأنظمة المرعية في
          المملكة العربية السعودية، ومـا بين منهجيات الممارسات القانونية
          العالمية الرفيعة لتقديم خدمات وحلول قانونية متميزة ومبتكرة بمهنية
          واحترافية عالية.
        </p>
      </div>
      <div
        className="mt-12 md:mt-16 flex flex-col md:flex-row md:justify-between items-center gap-10 md:gap-16 lg:gap-36 child:text-start"
        dir="ltr"
      >
        <img
          id="about-image"
          className="w-80 h-auto aspect-square lg:w-[30rem] rounnded-2xl sm:opacity-0 sm:mr-16 transition-all duration-1000"
          src={about}
          alt="about us"
          loading="lazy"
        />
        <div
          id="about-details"
          className="sm:opacity-0 sm:ml-16 transition-all duration-1000"
          dir="rtl"
        >
          <div className="mb-6">
            <h3 className="font-bold text-2xl lg:text-3xl text-main-color-light">
              قـيمنـا
            </h3>
            <p className="text-sm sm:text-[15.5px]">
              ●{" "}
              <span className="text-lg sm:text-xl font-semibold">
                إحترام القانون
                <br className="sm:hidden" />
              </span>{" "}
              والحرص الدائم علـى الامتثــال والالــتزام القانوني.
              <br />●{" "}
              <span className="text-lg sm:text-xl font-semibold">
                الصدق والامانة
                <br className="sm:hidden" />
              </span>{" "}
              والتمسك الكامل بالأخلاق السامية لمهنة المحاماة. <br />●{" "}
              <span className="text-lg sm:text-xl font-semibold">
                النزاهة والشفافية
                <br className="sm:hidden" />
              </span>{" "}
              فـي كـل اجراءات العمل ومــع جميع العــملاء.{" "}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-2xl lg:text-3xl text-main-color-light">
              رؤيـتنـا
            </h3>
            <p className="max-w-md">
              يتطلع فريق شركة الوسام للمحاماة والاستشارات القانونية والتحكيــم،
              لأن يكــون النموذج السعــودي الرائد في تقديم الخدمـــات
              القانونـــية الاحترافية للأفراد والشــركات وفق أعلى المعايير
              المحــلية والعـــالمية الموثوقة وبالموائمة مع رؤية المملكة العربية
              السعودية للعام 2030م.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
