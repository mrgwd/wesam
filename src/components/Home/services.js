import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faBuildingColumns,
  faPenToSquare,
  faBriefcase,
  faHandshakeSimple,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
const Services = () => {
  useEffect(() => {
    let [servicesHeading, servicesDetails] = [
      document.getElementById("services-heading"),
      document.getElementById("sevrices-details"),
    ];
    function handleScroll() {
      window.scrollY > servicesHeading.offsetTop - 900 &&
        servicesHeading.classList.remove("opacity-0", "mt-28");
      window.scrollY > servicesDetails.offsetTop - 800 &&
        servicesDetails.classList.remove("opacity-0", "!mt-28");
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      id="services"
      className="px-3 sm:px-0 py-12 sm:py-20 bg-gray-200 text-main-color-dark"
    >
      <div className="container mx-auto flex flex-col items-center">
        <div
          id="services-heading"
          className="services-heading opacity-0 mt-28 transition-all duration-1000"
        >
          <h2 className="text-3xl md:text-5xl mb-2 md:mb-6 font-bold">
            خدماتنـا
          </h2>
          <p className="max-w-3xl text-gray-500">
            لدينا العديد من الأقسام التي تخدم عملائنا بمهنية واحترافية عالية.
          </p>
        </div>
        <div
          id="sevrices-details"
          className="flex flex-wrap items-center justify-center transition-all duration-1000 gap-6 md:gap-14 mt-12 child:max-w-sm opacity-0 !mt-28"
        >
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-main-color-light/30 rounded-full flex flex-col items-center justify-center mb-4">
              <FontAwesomeIcon
                className="text-3xl md:text-4xl lg:text-5xl text-main-color-light"
                icon={faGavel}
              />
            </div>
            <h3 className="font-semibold text-xl">
              الاستشارات القانونية والشرعية والنظامية
            </h3>
            <p>
              دارسة كافة الوقائع والحالات القانونية والقوانين الحاكمة لها ومن ثم
              ابداء الاراء القانونية والشرعية حولها
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-main-color-light/30 rounded-full flex flex-col items-center justify-center mb-4">
              <FontAwesomeIcon
                className="text-3xl md:text-4xl lg:text-5xl text-main-color-light"
                icon={faBuildingColumns}
              />
            </div>
            <h3 className="font-semibold text-xl">
              التقاضي والترافع والتمثيل القضائي
            </h3>
            <p>
              تمثيل كافة عملاء الشركة بمختلف أشكالهم القانونية في تسوية النزاعات
              الناشئة لديهم
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-main-color-light/30 rounded-full flex flex-col items-center justify-center mb-4">
              <FontAwesomeIcon
                className="text-3xl md:text-4xl lg:text-5xl text-main-color-light"
                icon={faPenToSquare}
              />
            </div>
            <h3 className="font-semibold text-xl">
              صياغة ومراجعة العقود والاتفاقيات
            </h3>
            <p>
              اعداد وصياغة جميع العقود التجارية المحلية والدولية باللغة العربية
              والانجليزية، وعلى أساس علمي وقانوني سليم
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-main-color-light/30 rounded-full flex flex-col items-center justify-center mb-4">
              <FontAwesomeIcon
                className="text-3xl md:text-4xl lg:text-5xl text-main-color-light"
                icon={faBriefcase}
              />
            </div>
            <h3 className="font-semibold text-xl">الشركــات</h3>
            <p>
              تقديم النصح والمشورة فيما يتعلق بتحديد الشكل المناسب من أنواع
              الشركات من حيث التأسيس والمتابعة لدى الجهات المختصة والحصول على
              التراخيص
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-main-color-light/30 rounded-full flex flex-col items-center justify-center mb-4">
              <FontAwesomeIcon
                className="text-3xl md:text-4xl lg:text-5xl text-main-color-light"
                icon={faHandshakeSimple}
              />
            </div>
            <h3 className="font-semibold text-xl">
              قسم الوساطة والصلح والتحكيم
            </h3>
            <p>
              تقديم كافة الخدمات المتعلقة بالطرق البديلة لفض النزاعات والخلافات
              وصياغة ومراجعة اتفاقيات التحكيم وتمثيل الأطراف في غرف التحكيم
              بواسطة محكمين معتمدين
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
