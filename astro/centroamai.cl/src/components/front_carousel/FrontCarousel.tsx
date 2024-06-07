import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import portada1 from "@assets/images/carousel/portada_1.jpg";
import portada2 from "@assets/images/carousel/portada_2.jpg";
import portada3 from "@assets/images/carousel/portada_3.jpg";
import Image from "astro/components/Image.astro";
import FrontCarouselItem from "./FrontCarouselItem";
import carouselItems from "@/utils/carouselSeed";
import type { CarouselItemType } from "@/utils/types";

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
        {carouselItems.map((carouselItem: CarouselItemType, index: number) => (
          <FrontCarouselItem item={carouselItem} key={index} />
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default FrontCarousel;
