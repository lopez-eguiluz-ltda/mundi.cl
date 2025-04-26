import { CarouselItem } from "@shadcn/carousel";
import type { CarouselItemType } from "@utils/types";

const FrontCarouselItem = ({ item }: { item: CarouselItemType }) => (
  <CarouselItem className="relative select-none">
    <img
      src={item.image.src}
      alt="Home"
      loading="eager"
      className="object-cover w-full h-[80vh] opacity-90 blur-sm rounded-b-3xl"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-primary-normal to-transparent opacity-100 rounded-b-3xl"></div>

    <div className="absolute top-0 left-0 flex flex-col justify-center items-center lg:items-start p-10 sm:p-20 lg:p-32 xl:p-40 w-full h-full">
      <h2 className="text-center md:text-left text-xs font-semibold sm:text-sm md:text-base lg:text-lg text-white border-[1px] rounded-3xl py-1 px-5 my-6 animate-fade-in-right animate-delay-200 animate-duration-slower">
        {item.header}
      </h2>
      <h3 className="text-center text-5xl sm:text-7xl lg:text-8xl text-white font-bold animate-fade-in-down animate-delay-500 animate-duration-slower">
        {item.title}
      </h3>
      <hr className="opacity-30 m-3 w-4/5 lg:w-3/4 xl:w-[700px] animate-fade-in-right animate-delay-700 animate-duration-slower" />

      <h4 className="text-center lg:text-left text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white sm:p-3 w-full lg:w-3/4 xl:w-7/12 font-light animate-fade-in-right animate-delay-800 animate-duration-slower">
        {item.subtitle}
      </h4>

      <div className="flex flex-col gap-5 px-3 py-5 animate-fade-in animate-delay-1000 animate-duration-slower">
        <div className="relative w-52 lg:w-96">
          <div className="absolute w-full h-full bg-black rounded-full opacity-50 z-20 transform translate-x-1 translate-y-1.5"></div>
          <a
            className="flex justify-center items-center bg-white hover:bg-accent-light rounded-full px-4 py-2 transition-colors duration-300 ease-in-out uppercase font-semibold z-20 relative text-accent-normal hover:text-white text-center"
            href="https://agendamiento.reservo.cl/makereserva/agenda/f0Jn8dB0F0pERa8N1U96tu94p2z5Uv"
            target="_blank"
            rel="noreferrer"
            referrerPolicy="no-referrer"
          >
            Reserva aquí
          </a>
        </div>
      </div>
    </div>
  </CarouselItem>
);

export default FrontCarouselItem;
