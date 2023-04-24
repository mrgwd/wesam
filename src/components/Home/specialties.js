import { Personalcard } from "iconsax-react";
import { ArchiveTick } from "iconsax-react";
import { People } from "iconsax-react";
import { Buildings } from "iconsax-react";
import { LikeDislike } from "iconsax-react";
import { Briefcase } from "iconsax-react";
const Specialties = () => {
  return (
    <section
      id="specialties"
      className="px-3 sm:px-0 py-12 sm:py-20 text-main-color-dark  scroll-smooth"
    >
      <div>
        <h2 className="text-3xl md:text-5xl mb-2 md:mb-6 text-main-dark font-bold">
          مجالات التخصص والممارسة
        </h2>
        <p className="text-gray-500">
          لدينا الكثير من التخصصات التي تخدم عملائنا بمهنية واحترافية عالية.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,300px))] justify-center gap-y-16 sm:gap-x-16 child:text-main-dark child:text-xl child:md:text-2xl child:font-bold mt-12 child:flex child:flex-col child:items-center child:gap-2">
        <div>
          <Personalcard
            color="#121B39"
            variant="Bulk"
            className="w-12 h-12 sm:w-24 sm:h-24"
          />
          <h4>الأحوال الشخصية</h4>
        </div>

        <div>
          <ArchiveTick
            color="#121B39"
            variant="Bulk"
            className="w-12 h-12 sm:w-24 sm:h-24"
          />
          <h4>التركات والوصايا وتوثيقها</h4>
        </div>
        <div>
          <People
            color="#121B39"
            variant="Bulk"
            className="w-12 h-12 sm:w-24 sm:h-24"
          />
          <h4>المنازعات العمالية</h4>
        </div>
        <div>
          <Buildings
            color="#121B39"
            variant="Bulk"
            className="w-12 h-12 sm:w-24 sm:h-24"
          />
          <h4>القضايا العمالية والعقارية والتجارية</h4>
        </div>
        <div>
          <LikeDislike
            color="#121B39"
            variant="Bulk"
            className="w-12 h-12 sm:w-24 sm:h-24"
          />
          <h4>منازعات التنفيذ</h4>
        </div>
        <div>
          <Briefcase
            color="#121B39"
            variant="Bulk"
            className="w-12 h-12 sm:w-24 sm:h-24"
          />
          <h4>تأسيس الشركات</h4>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
