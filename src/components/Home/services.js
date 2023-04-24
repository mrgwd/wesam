import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGavel } from "@fortawesome/free-solid-svg-icons";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeSimple } from "@fortawesome/free-solid-svg-icons";

//import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
const Services = () => {
  return (
    <section
      id="services"
      className="px-3 sm:px-0 py-12 sm:py-20 bg-gray-200 text-main-color-dark"
    >
      <div className="container mx-auto flex flex-col items-center">
        <div>
          <h2 className="text-3xl md:text-5xl mb-2 md:mb-6 font-bold">
            خدماتنـا
          </h2>
          <p className="max-w-3xl text-gray-500">
            لدينا العديد من الأقسام التي تخدم عملائنا بمهنية واحترافية عالية.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-14 mt-12 child:max-w-sm">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-main-color-light/30 rounded-full flex flex-col items-center justify-center mb-4">
              <FontAwesomeIcon
                className="text-3xl md:text-4xl lg:text-5xl text-main-color-light"
                icon={faGavel}
              />
            </div>
            <h4 className="font-semibold text-xl">
              الاستشارات القانونية والشرعية والنظامية
            </h4>
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
            <h4 className="font-semibold text-xl">
              التقاضي والترافع والتمثيل القضائي
            </h4>
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
            <h4 className="font-semibold text-xl">
              صياغة ومراجعة العقود والاتفاقيات
            </h4>
            <p>
              داعداد وصياغة جميع العقود التجارية المحلية والدولية باللغة العربية
              والانجليزية، وعلى أساس علمي وقانوني سليم،
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-main-color-light/30 rounded-full flex flex-col items-center justify-center mb-4">
              <FontAwesomeIcon
                className="text-3xl md:text-4xl lg:text-5xl text-main-color-light"
                icon={faBriefcase}
              />
            </div>
            <h4 className="font-semibold text-xl">الشركــات</h4>
            <p>
              دتقديم النصح والمشورة فيما يتعلق بتحديد الشكل المناسب من أنواع
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
            <h4 className="font-semibold text-xl">
              قسم الوساطة والصلح والتحكيم
            </h4>
            <p>
              دتقديم كافة الخدمات المتعلقة بالطرق البديلة لفض النزاعات والخلافات
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
