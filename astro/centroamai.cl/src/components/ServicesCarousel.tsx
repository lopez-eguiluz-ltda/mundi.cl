import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import p1 from "@assets/images/carousel/fotos_portada1.jpeg";
import { Card, CardContent } from "./ui/card";

const FrontCarousel = () => {
  return (
    <Carousel
      className="w-full"
      opts={{
        loop: true,
        active: true,
        align: "center",
      }}
      plugins={[
        AutoScroll({
          speed: 2,
          startDelay: 500,
          stopOnInteraction: false,
          stopOnMouseEnter: false,
          stopOnFocusIn: false,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem className="basis-1/3 p-0 flex justify-center items-center">
          <h1 className="text-6xl hover:text-7xl hover:text-cpurple font-light">
            Nutrición
          </h1>
        </CarouselItem>

        <CarouselItem className="basis-1/12 p-0 flex justify-center items-center">
          <svg height="100" width="50" xmlns="http://www.w3.org/2000/svg">
            <circle r="10" cx="25" cy="50" fill="red" />
          </svg>
        </CarouselItem>

        <CarouselItem className="basis-1/3 p-0 flex justify-center items-center">
          <h1 className="text-6xl font-light">Medicina</h1>
        </CarouselItem>

        <CarouselItem className="basis-1/12 p-0 flex justify-center items-center">
          <svg height="100" width="50" xmlns="http://www.w3.org/2000/svg">
            <circle r="10" cx="25" cy="50" fill="red" />
          </svg>
        </CarouselItem>

        <CarouselItem className="basis-1/3 p-0 flex justify-center items-center">
          <h1 className="text-6xl font-light">Kinesiología</h1>
        </CarouselItem>

        <CarouselItem className="basis-1/12 p-0 flex justify-center items-center">
          <svg height="100" width="50" xmlns="http://www.w3.org/2000/svg">
            <circle r="10" cx="25" cy="50" fill="red" />
          </svg>
        </CarouselItem>

        <CarouselItem className="basis-1/3 p-0 flex justify-center items-center">
          <h1 className="text-6xl font-light">T. Ocupacional</h1>
        </CarouselItem>

        <CarouselItem className="basis-1/12 p-0 flex justify-center items-center">
          <svg height="100" width="50" xmlns="http://www.w3.org/2000/svg">
            <circle r="10" cx="25" cy="50" fill="red" />
          </svg>
        </CarouselItem>

        <CarouselItem className="basis-1/3 p-0 flex justify-center items-center">
          <h1 className="text-6xl font-light">Psicología</h1>
        </CarouselItem>

        <CarouselItem className="basis-1/12 p-0 flex justify-center items-center">
          <svg height="100" width="50" xmlns="http://www.w3.org/2000/svg">
            <circle r="10" cx="25" cy="50" fill="red" />
          </svg>
        </CarouselItem>

        <CarouselItem className="basis-1/3 p-0 flex justify-center items-center">
          <h1 className="text-6xl font-light">Fonoaudiología</h1>
        </CarouselItem>

        <CarouselItem className="basis-1/12 p-0 flex justify-center items-center">
          <svg height="100" width="50" xmlns="http://www.w3.org/2000/svg">
            <circle r="10" cx="25" cy="50" fill="red" />
          </svg>
        </CarouselItem>

        <CarouselItem className="basis-1/3 p-0 flex justify-center items-center">
          <h1 className="text-6xl font-light">Psicopedagogía</h1>
        </CarouselItem>

        <CarouselItem className="basis-1/12 p-0 flex justify-center items-center">
          <svg height="100" width="50" xmlns="http://www.w3.org/2000/svg">
            <circle r="10" cx="25" cy="50" fill="red" />
          </svg>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default FrontCarousel;
