import { CarouselItem } from "@components/common/ui/carousel";
import type { CarouselItemType } from "@utils/types";

const FrontCarouselItem = ({ item }: { item: CarouselItemType }) => (
  <CarouselItem className="relative select-none">
    <img
      src={item.image.src}
      alt="Home"
      loading="eager"
      className="h-[80vh] w-full rounded-b-3xl object-cover opacity-90 blur-sm"
      draggable={false}
    />
    <div className="from-primary-normal absolute inset-0 rounded-b-3xl bg-gradient-to-br to-transparent opacity-100"></div>

    <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center p-10 sm:p-20 lg:items-start lg:p-32 xl:p-40">
      <h2 className="animate-fade-in-right animate-delay-200 animate-duration-slower my-6 rounded-3xl border-[1px] px-5 py-1 text-center text-xs font-semibold text-white sm:text-sm md:text-left md:text-base lg:text-lg">
        {item.header}
      </h2>
      <h3 className="animate-fade-in-down animate-delay-500 animate-duration-slower text-center text-5xl font-bold text-white sm:text-7xl lg:text-8xl">
        {item.title}
      </h3>
      <hr className="animate-fade-in-right animate-delay-700 animate-duration-slower m-3 w-4/5 opacity-30 lg:w-3/4 xl:w-[700px]" />

      <h4 className="animate-fade-in-right animate-delay-800 animate-duration-slower w-full text-center text-sm font-light text-white sm:p-3 md:text-base lg:w-3/4 lg:text-left lg:text-lg xl:w-7/12 xl:text-xl">
        {item.subtitle}
      </h4>

      <div className="animate-fade-in animate-delay-1000 animate-duration-slower flex flex-col gap-5 px-3 py-5">
        <div className="relative w-52 lg:w-96">
          <div className="absolute z-20 h-full w-full translate-x-1 translate-y-1.5 transform rounded-full bg-black opacity-50"></div>
          <a
            className="hover:bg-accent-light text-accent-normal relative z-20 flex items-center justify-center rounded-full bg-white px-4 py-2 text-center font-semibold uppercase transition-colors duration-300 ease-in-out hover:text-white"
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
