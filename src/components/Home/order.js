import { Send } from "iconsax-react";
import { useEffect } from "react";
export const Form = () => {
  return (
    <form
      action=""
      className="mt-6 sm:min-w-[28rem] lg:min-w-[36rem] xl:min-w-[44rem] sm:mx-20"
    >
      <div className="flex gap-2 mb-2">
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="first-name"
            id="first-name"
            className="block py-1 pt-6 px-2 w-full text-sm text-main-color bg-white rounded-md appearance-none focus:outline-none focus:ring-0 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="first-name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-2.5 scale-75 top-3 right-3 origiin-[0] peer-focus:right-3 peer-focus:text-main-color-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            الإسم الأول
          </label>
        </div>
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="second-name"
            id="second-name"
            className="block py-1 pt-6 px-2 w-full text-sm text-main-color bg-white rounded-md appearance-none focus:outline-none focus:ring-0 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="second-name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-2.5 scale-75 top-3 right-3 origiin-[0] peer-focus:right-3 peer-focus:text-main-color-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            الإسم الأخير
          </label>
        </div>
      </div>
      <div className="relative z-0 w-full mb-2 group">
        <input
          type="email"
          name="email"
          id="email"
          className="block py-1 pt-6 px-2 w-full text-sm text-main-color bg-white rounded-md appearance-none focus:outline-none focus:ring-0 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-2.5 scale-75 top-3 right-3 origiin-[0] peer-focus:right-3 peer-focus:text-main-color-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          البريد الإلكتروني
        </label>
      </div>
      <div className="relative z-0 w-full mb-2 group">
        <input
          type="text"
          name="subject"
          id="subject"
          className="block py-1 pt-6 px-2 w-full text-sm text-main-color bg-white rounded-md appearance-none focus:outline-none focus:ring-0 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="subject"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-2.5 scale-75 top-3 right-3 origiin-[0] peer-focus:right-3 peer-focus:text-main-color-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          الموضوع
        </label>
      </div>
      <div className="relative">
        <div className="relative z-0 w-full group">
          <textarea
            rows="12"
            name="subject"
            id="subject"
            className="block py-1 pt-6 px-2 w-full text-sm text-main-color bg-white rounded-md appearance-none focus:outline-none focus:ring-0 rounded-bl-[2rem] sm:rounded-bl-[2.5rem] resize-none peer"
            placeholder=" "
            required
          ></textarea>
          <label
            htmlFor="subject"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-2.5 scale-75 top-3 right-3 origiin-[0] peer-focus:right-3 peer-focus:text-main-color-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            التفاصيل ...
          </label>
          <button
            type="submit"
            className="bg-main-dark rounded-full p-3 sm:p-4 absolute bottom-3 left-3 transition duration-300 hover:bg-main-color  hover:rotate-[180deg]"
          >
            <Send
              variant="Bold"
              className="text-white rotahte-180 transition duration-300"
            />
          </button>
        </div>
      </div>
    </form>
  );
};

const Order = () => {
  useEffect(() => {
    let orderHeading = document.getElementById("order-heading");
    function handleScroll() {
      window.scrollY > orderHeading.offsetTop - 900 &&
        orderHeading.classList.remove("opacity-0", "mt-28");
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      id="order"
      className="px-3 sm:px-0 py-12 sm:py-20 bg-gray-200 text-main-color-dark"
    >
      <div className="container mx-auto flex flex-col items-center">
        <div
          id="order-heading"
          className="transition-all duration-1000 opacity-0 mt-28"
        >
          <h2 className="text-3xl md:text-5xl mb-2 md:mb-6 font-bold">
            أطلب خدمة
          </h2>
          <p className="max-w-3xl text-gray-500">
            شارع الأمير سلطان - مبنى رومن سـنتر <br />
            <span dir="ltr">+20122368944 ● Info@alwissamlaw.com</span>
          </p>
        </div>
        <Form id="order-form" />
      </div>
    </section>
  );
};

export default Order;
