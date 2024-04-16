import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import p1 from "@assets/images/carousel/fotos_portada1.jpeg";
import { Button } from "@/components/ui/button";

const MyCarousel = () => {
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
        <CarouselItem className="relative">
          <img
            src={p1.src}
            alt="Home"
            className="absolute inset-0 object-cover w-full h-full opacity-90 brightness-50 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#7FAEB5] to-transparent flex justify-center items-center">
            <Button className="absolute bg-white text-[#3FAEBD] font-bold py-2 px-4 rounded-3xl uppercase">
              Reserva aquí
            </Button>
            <div className="mt-2 ms-2 bg-gray-700 rounded-3xl w-32 h-10"></div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img
            src={p1.src}
            className="object-cover w-full h-[80vh]"
            alt="Home"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src={p1.src}
            className="object-cover w-full h-[80vh]"
            alt="Home"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default MyCarousel;
