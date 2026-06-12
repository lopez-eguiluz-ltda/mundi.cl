import { CarouselItem } from '@components/common/ui/carousel'
import type { CarouselItemType } from '@utils/types'

const FrontCarouselItem = ({ item }: { item: CarouselItemType }) => (
  <CarouselItem className="relative select-none">
    <img
      src={item.image.src}
      alt="Home"
      loading="eager"
      className="h-[80vh] w-full rounded-b-3xl object-cover opacity-90 blur-sm"
      draggable={false}
    />
    <div className="absolute inset-0 rounded-b-3xl bg-gradient-to-br from-primary-normal to-transparent opacity-100"></div>

    <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center p-10 sm:p-20 lg:items-start lg:p-32 xl:p-40">
      <h2 className="my-6 animate-fade-in-right rounded-3xl border-[1px] px-5 py-1 text-center text-xs font-semibold text-white animate-delay-200 animate-duration-slower sm:text-sm md:text-left md:text-base lg:text-lg">
        {item.header}
      </h2>
      <h3 className="animate-fade-in-down text-center text-5xl font-semibold text-white animate-delay-500 animate-duration-slower sm:text-7xl lg:text-8xl">
        {item.title}
      </h3>
      <hr className="m-3 w-4/5 animate-fade-in-right opacity-30 animate-delay-700 animate-duration-slower lg:w-3/4 xl:w-[700px]" />

      <h4 className="w-full animate-fade-in-right text-center text-sm font-light text-white animate-delay-800 animate-duration-slower sm:p-3 md:text-base lg:w-3/4 lg:text-left lg:text-lg xl:w-7/12 xl:text-xl">
        {item.subtitle}
      </h4>

      <div className="flex animate-fade-in flex-col gap-5 px-3 py-5 animate-delay-1000 animate-duration-slower">
        <div className="relative w-52 lg:w-96">
          <div className="absolute z-20 h-full w-full translate-x-1 translate-y-1.5 transform rounded-full bg-zinc-950 opacity-50"></div>
          <a
            className="relative z-20 flex items-center justify-center rounded-full bg-white px-4 py-2 text-center font-semibold text-accent-normal uppercase transition-colors duration-300 ease-in-out hover:bg-accent-light hover:text-white"
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
)

export default FrontCarouselItem
