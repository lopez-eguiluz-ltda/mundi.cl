import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import p1 from "@assets/images/carousel/fotos_portada1.jpeg";

const MyCarousel = () => {
  return (
    <Carousel
      opts={{
        loop: true,
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
            className="object-cover w-full h-[80vh] opacity-90 brightness-50 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#7FAEB5] to-transparent"></div>
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
