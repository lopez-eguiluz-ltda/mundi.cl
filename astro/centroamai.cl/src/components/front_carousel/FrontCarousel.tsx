import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import portada1 from "@assets/images/carousel/portada_1.jpg";
import portada2 from "@assets/images/carousel/portada_2.jpg";
import portada3 from "@assets/images/carousel/portada_3.jpg";

const FrontCarousel = () => {
  return (
    <Carousel
      opts={{
        loop: true,
        active: false,
        duration: 60,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <div className="relative">
            <img
              src={portada1.src}
              alt="Home"
              className="object-cover w-full h-[80vh] opacity-90 blur-sm rounded-b-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cbackground to-transparent opacity-100 rounded-b-3xl"></div>

            <div className="absolute top-0 left-0 flex flex-col justify-center items-start p-20 w-full h-full">
              <h2 className="text-2xl text-white">
                Solicita tu hora con nuestros especialistas
              </h2>
              <h1 className="text-7xl text-white font-bold mb-5">
                Centro amai
              </h1>
              <hr className="opacity-15 p-2 w-1/3 mb-3" />

              <div className="relative w-1/4">
                <div className="absolute w-full h-full bg-black rounded-full opacity-50 z-10 transform translate-x-1 translate-y-1.5"></div>
                <a
                  className="flex justify-center items-center bg-white hover:bg-cpurple rounded-full px-4 py-2 transition-colors duration-300 ease-in-out uppercase font-semibold z-20 relative text-cgreen hover:text-white"
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

        <CarouselItem>
          <div className="relative">
            <img
              src={portada2.src}
              alt="Home"
              className="object-cover w-full h-[80vh] opacity-90 blur-sm rounded-b-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#7FAEB5] to-transparent opacity-100 rounded-b-3xl"></div>

            <div className="absolute top-0 left-0 flex flex-col justify-center items-start p-20 w-full h-full">
              <h2 className="text-2xl text-white">
                Solicita tu hora con nuestros especialistas
              </h2>
              <h1 className="text-7xl text-white font-bold mb-5">
                Centro amai
              </h1>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="relative">
            <img
              src={portada3.src}
              alt="Home"
              className="object-cover w-full h-[80vh] opacity-90 blur-sm rounded-b-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#7FAEB5] to-transparent opacity-100 rounded-b-3xl"></div>

            <div className="absolute top-0 left-0 flex flex-col justify-center items-start p-20 w-full h-full">
              <h2 className="text-2xl text-white">
                Solicita tu hora con nuestros especialistas
              </h2>
              <h1 className="text-7xl text-white font-bold mb-5">
                Centro amai
              </h1>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default FrontCarousel;
