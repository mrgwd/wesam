import {
  Personalcard,
  ArchiveTick,
  People,
  Buildings,
  LikeDislike,
  Briefcase,
} from "iconsax-react";
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
        className="grid grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,300px))] justify-center gap-y-16 sm:gap-x-16 child:text-main-dark child:text-xl child:md:text-2xl child:font-bold mt-12 child:flex child:flex-col child:items-center child:gap-2 transition-all duration-1000 opacity-0 !mt-28"
      >
        <div>
          <Personalcard
            color="#121B39"
            variant="Bulk"
            className="w-12 h-12 sm:w-20 sm:h-20 lg:w-24 xl:h-24"
          />
          <h4>الأحوال الشخصية</h4>
        </div>

        <div>
          <ArchiveTick
            color="#121B39"
            variant="Bulk"
            className="w-12 h-12 sm:w-20 sm:h-20 lg:w-24 xl:h-24"
          />
          <h4>التركات والوصايا وتوثيقها</h4>
        </div>
        <div>
          <People
            color="#121B39"
            variant="Bulk"
            className="w-12 h-12 sm:w-20 sm:h-20 lg:w-24 xl:h-24"
          />
          <h4>المنازعات العمالية</h4>
        </div>
        <div>
          <Buildings
            color="#121B39"
            variant="Bulk"
            className="w-12 h-12 sm:w-20 sm:h-20 lg:w-24 xl:h-24"
          />
          <h4>القضايا العمالية والعقارية والتجارية</h4>
        </div>
        <div>
          <LikeDislike
            color="#121B39"
            variant="Bulk"
            className="w-12 h-12 sm:w-20 sm:h-20 lg:w-24 xl:h-24"
          />
          <h4>منازعات التنفيذ</h4>
        </div>
        <div>
          <Briefcase
            color="#121B39"
            variant="Bulk"
            className="w-12 h-12 sm:w-20 sm:h-20 lg:w-24 xl:h-24"
          />
          <h4>تأسيس الشركات</h4>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
