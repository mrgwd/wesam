import { useEffect } from "react";
const Specialties = () => {
  useEffect(() => {
    let [specialtiesHeading, specialtiesDetails] = [
      document.getElementById("specialties-heading"),
      document.getElementById("specialties-details"),
    ];
    function handleScroll() {
      window.scrollY > specialtiesHeading.offsetTop - 900 &&
        specialtiesHeading.classList.remove("opacity-0", "mt-28");
      window.scrollY > specialtiesDetails.offsetTop - 800 &&
        specialtiesDetails.classList.remove("opacity-0", "!mt-28");
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      id="specialties"
      className="px-3 sm:px-0 py-12 sm:py-20 text-main-dark"
    >
      <div
        id="specialties-heading"
        className="transition-all duration-1000 opacity-0 mt-28"
      >
        <h2 className="text-3xl md:text-5xl mb-2 md:mb-6 text-main-dark font-bold">
          مجالات التخصص والممارسة
        </h2>
        <p className="text-gray-500">
          لدينا الكثير من التخصصات التي تخدم عملائنا بمهنية واحترافية عالية.
        </p>
      </div>
      <div
        id="specialties-details"
        className="[&>*:nth-child(odd)]:text-main-dark [&>*:nth-child(even)]:text-main-color child:text-md child:md:text-2xl mt-12 transition-all duration-1000 opacity-0 !mt-28 child:rounded-full child:py-1 child:m-1 child:px-4 xl:child:px-6 [&>*:nth-child(odd)]:bg-main-dark/30 [&>*:nth-child(even)]:bg-main-color/30 child:inline-block child:cursor-default child-hover:scale-105 child:transition-all"
      >
        <div>تأسيس الشركات</div>
        <div>صياغة عقود</div>
        <div>تقسيم تركات</div>
        <div>تحصيل ديون</div>
        <div>استخراج حجج إستحكام</div>
        <div>تسجيل براءة إختراع</div>
        <div>توثيق وكالات وعقود</div>
        <div>تمثيل قانوني وترافع</div>
        <div>إعداد سياسات ودراسات تشريعية</div>
        <div>إعداد مذكرات قانونية</div>
        <div>تسجيل علامات تجارية</div>
        <div>تحقيق</div>
        <div>المنشئات التجارية وريادة الأعمال</div>
        <div>الوكالات التجارية</div>
        <div>العلاقات العمالية</div>
        <div>الطاقة والتعدين</div>
        <div>الخدمات المالية</div>
        <div>تسوية المنازعات</div>
        <div>القضايا الإدارية والجنائية</div>
        <div>حقوق الملكية الفكرية</div>
        <div>الإستثمارات الصناعية</div>
        <div>العقود الحكومية</div>
        <div>النقل البحري</div>
        <div>تراخيص التصدير وإجراءات الإستيراد</div>
        <div>والجمارك وقوانين المقاطعة</div>
        <div>الأحوال الشخصية</div>
        <div>الترجمة القانونية</div>
        <div>أوراق تجارية</div>
        <div className="text-sm md:text-2xl">
          قانون المعلومات وخصوصية البيانات والأمن السيبراني
        </div>
        <div>أسهم وأوراق مالية</div>
        <div>مكافحة الإحتكار والمنافسة</div>
        <div>الترفيه والرياضة والإعلام</div>
        <div>الخدمات المصرفية</div>
        <div>قانون الإتصالات</div>
        <div>المصرفية الإسلامية</div>
        <div>إعادة الهيكلة والإعسار والتدريبات</div>
        <div>المشتقات</div>
        <div>الدعاوى التجارية المعقدة</div>
        <div>حوكمة الشركات</div>
        <div>حقوق الدائنين والتقاضي بالإفلاس</div>
        <div>الإستعانة بمصادر خارجية</div>
        <div>الشركات الناشئة</div>
        <div>البيئة والإراضي والموارد</div>
        <div>صناديق الإستثمار</div>
        <div>التنظيم المالي</div>
        <div>الزكاة والضرائب</div>
        <div>العقارات</div>
        <div>تغطية التأمين</div>
        <div>الرعاية الصحية</div>
      </div>
    </section>
  );
};

export default Specialties;
