import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import portada1 from "@assets/images/carousel/portada_1.jpg";
import portada2 from "@assets/images/carousel/portada_2.jpg";
import portada3 from "@assets/images/carousel/portada_3.jpg";
import Image from "astro/components/Image.astro";

const FrontCarousel = () => {
  return (
    <Carousel
      opts={{
        loop: true,
        active: true,
        duration: 60,
      }}
      plugins={[
        Autoplay({
          delay: 10000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {/*<CarouselItem>
          <img
            src={portada1.src}
            alt="Home"
            className="object-cover w-full h-[80vh] opacity-90 blur-sm rounded-b-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cbackground to-transparent opacity-100 rounded-b-3xl"></div>

          <div className="absolute top-0 left-0 flex flex-col justify-center items-center lg:items-start p-10 sm:p-20  w-full h-full">
            <h2 className="text-center md:text-left text-lg sm:text-2xl text-white">
              Solicita tu hora con nuestros especialistas
            </h2>
            <h1 className="text-center text-5xl sm:text-7xl text-white font-bold mb-5">
              Centro amai
            </h1>
            <hr className="opacity-15 p-2 w-5/6 lg:w-96 mb-3" />

            <div className="flex flex-col gap-5">
              <div className="relative w-52 lg:w-96">
                <div className="absolute w-full h-full bg-black rounded-full opacity-50 z-20 transform translate-x-1 translate-y-1.5"></div>
                <a
                  className="flex justify-center items-center bg-white hover:bg-cpurple rounded-full px-4 py-2 transition-colors duration-300 ease-in-out uppercase font-semibold z-20 relative text-cgreen hover:text-white text-center"
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
    </CarouselItem>*/}

        <CarouselItem>
          <img
            src={portada2.src}
            alt="Home"
            className="object-cover w-full h-[80vh] opacity-90 blur-sm rounded-b-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cbackground to-transparent opacity-100 rounded-b-3xl"></div>

          <div className="absolute top-0 left-0 flex flex-col justify-center items-center lg:items-start p-10 sm:p-20 lg:p-52 w-full h-full">
            <h3 className="text-center md:text-left text-lg sm:text-lg text-white border-[1px] rounded-3xl py-1 px-5 uppercase my-6">
              Tu centro médico terapéutico
            </h3>
            <h2 className="text-center text-5xl sm:text-7xl lg:text-8xl text-white font-bold">
              Centro amai
            </h2>
            <hr className="opacity-30 m-3 w-5/6 lg:w-1/3" />

            <h4 className="text-center md:text-left text-lg sm:text-2xl lg:text-xl text-white p-3 w-1/2 font-light">
              Con un equipo especializado y comprometido, buscamos promover la
              salud física y emocional, así como facilitar un desarrollo óptimo
              en todas las etapas de la vida.
            </h4>

            <div className="flex flex-col gap-5">
              <div className="relative w-52 lg:w-96">
                <div className="absolute w-full h-full bg-black rounded-full opacity-50 z-20 transform translate-x-1 translate-y-1.5"></div>
                <a
                  className="flex justify-center items-center bg-white hover:bg-cpurple rounded-full px-4 py-2 transition-colors duration-300 ease-in-out uppercase font-semibold z-20 relative text-cgreen hover:text-white text-center"
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

        {/*
        <CarouselItem>
          <img
            src={portada2.src}
            alt="Home"
            className="object-cover w-full h-[80vh] opacity-90 blur-sm rounded-b-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cbackground to-transparent opacity-100 rounded-b-3xl"></div>

          <div className="absolute top-0 left-0 flex flex-col justify-center items-center lg:items-start p-10 sm:p-20  w-full h-full">
            <h3 className="text-center md:text-left text-lg sm:text-2xl text-white">
              Apoyo a la Maternidad y Alimentación Infantil
            </h3>
            <h2 className="text-center text-5xl sm:text-6xl text-white font-bold mb-5">
              Equipo multidisciplinario
            </h2>
            <h2 className="text-center text-5xl sm:text-4xl text-white font-bold mb-5">
              enfocado en la salud materno infantil 🤰🤱🏻
            </h2>
            <hr className="opacity-15 p-2 w-5/6 lg:w-96 mb-3" />

            <div className="flex flex-col gap-5">
              <div className="relative w-52 lg:w-96">
                <div className="absolute w-full h-full bg-black rounded-full opacity-50 z-20 transform translate-x-1 translate-y-1.5"></div>
                <a
                  className="flex justify-center items-center bg-white hover:bg-cpurple rounded-full px-4 py-2 transition-colors duration-300 ease-in-out uppercase font-semibold z-20 relative text-cgreen hover:text-white text-center"
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
  </CarouselItem> */}
      </CarouselContent>
    </Carousel>
  );
};

export default FrontCarousel;
