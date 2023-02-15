import ImageProductDesktop from "../assets/images/image-product-desktop.jpg";
import ImageProductMobile from "../assets/images/image-product-mobile.jpg";
import { ShoppingCart } from "phosphor-react";

export function Card() {
  return (
    <div className="bg-white rounded-2xl grid grid-cols-1 w-[375px] h-[667px] sm:grid-cols-2 sm:w-[1200px] sm:h-[900px]">
      <img
        src={ImageProductDesktop}
        alt="Image Product"
        className="hidden sm:block rounded-tl-2xl rounded-bl-2xl"
      />

      <img
        src={ImageProductMobile}
        alt="Image Product"
        className="rounded-tl-2xl rounded-tr-2xl sm:hidden"
      />

      <div className="flex flex-col sm:mt-14 mx-6 sm:mx-14">
        <p className="text-sm sm:text-2xl text-DarkGrayishBlue tracking-[0.3em] uppercase font-Montserrat mb-3 sm:mb-10">
          Perfume
        </p>

        <h1 className="text-4xl tracking-[-0.01em] sm:tracking-normal sm:text-7xl font-bold font-Fraunces mb-4 sm:mb-14 text-VeryDarkBlue">
          Gabrielle Essence Eau De Parfum
        </h1>

        <p className="text-base sm:text-3xl tracking-[-0.019em] sm:tracking-normal font-Montserrat text-DarkGrayishBlue mb-5 sm:mb-14">
          A floral, solar and voluptuos interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of{" "}
          <span className="uppercase">chanel</span>.
        </p>

        <div className="flex items-center gap-5 sm:gap-9 mb-5 sm:mb-14">
          <h2 className="text-4xl sm:text-6xl text-DarkCyan font-Fraunces">
            $149.99
          </h2>
          <span className="text-sm sm:text-3xl text-DarkGrayishBlue line-through">
            $169.99
          </span>
        </div>

        <button className="flex items-center justify-center gap-2.5 sm:gap-5 text-white text-base sm:text-3xl font-bold font-Montserrat bg-DarkCyan py-3 sm:py-7 px-8 w-full rounded-lg sm:rounded-3xl active:brightness-50">
          <ShoppingCart size={22} color={"#FFF"} className="sm:hidden" />
          <ShoppingCart size={40} color={"#FFF"} className="hidden sm:block" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
