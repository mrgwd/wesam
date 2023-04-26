//import contact from "../../assets/images/contact.jpg";
import { Whatsapp } from "iconsax-react";
import { Call } from "iconsax-react";
const Contact = () => {
  return (
    <section
      id="contact"
      className="container mx-auto px-3 sm:px-0 py-12 sm:py-20 text-main-dark"
    >
      <div>
        <h2 className="text-3xl md:text-5xl mb-2 md:mb-6 text-main-dark font-bold">
          إتصل بنــا
        </h2>
        <p className="text-gray-500">
          نحن في خدمتك دائما ونرحب بجميع أسئلتك وإستفساراتك.
        </p>
      </div>
      <div className="w-full rounded-3xl mt-12 pt-36 pb-6 sm:pb-12 sm:pt-44 bg-[url(../images/contact.jpg)] bg-center bg-cover flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 child:cursor-pointer child:transition-all child-hover:scale-105">
        <div className="bg-main-dark w-4/5 p-2 rounded-2xl sm:w-52 sm:h-52 relative sm:overflow-hidden">
          <Whatsapp
            variant="Bold"
            className="hidden sm:block w-12 h-12 text-green-600 sm:w-44 sm:h-44 opacity-30 sm:absolute -right-12 -top-12"
          />
          <Whatsapp
            variant="Bold"
            className="w-12 h-12 text-green-600 sm:w-16 sm:h-16 sm:absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="bg-main-dark w-4/5 p-2 rounded-2xl sm:w-52 sm:h-52 relative sm:overflow-hidden">
          <Call
            variant="Bold"
            className="hidden sm:block w-12 h-12 text-main-color-light sm:w-44 sm:h-44 opacity-30 sm:absolute -right-12 -top-12"
          />
          <Call
            variant="Bold"
            className="w-12 h-12 text-main-color-light sm:w-16 sm:h-16 sm:absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
