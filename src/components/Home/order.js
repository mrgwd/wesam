export const Form = () => {
  return (
    <form action="">
      <div></div>
    </form>
  );
};

const Order = () => {
  return (
    <section
      id="order"
      className="px-3 sm:px-0 py-12 sm:py-20 bg-gray-200 text-main-color-dark"
    >
      <div className="container mx-auto flex flex-col items-center">
        <div>
          <h2 className="text-3xl md:text-5xl mb-2 md:mb-6 font-bold">
            أطلب خدمة
          </h2>
          <p className="max-w-3xl text-gray-500">
            شارع الأمير سلطان - مبنى رومان سـنتر مقابـل دوار التاريخ - الدور
            الاول مكتب 111. <br />
            <span dir="ltr">+20122368944 ● alwesam.s.d@gmail.com</span>
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Order;
