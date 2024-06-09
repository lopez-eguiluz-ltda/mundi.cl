

import Autoplay from "embla-carousel-autoplay";

import FrontCarouselItem from "./FrontCarouselItem";
import carouselItems from "@/utils/carouselSeed";
import type { CarouselItemType } from "@/utils/types";
import { Carousel, CarouselContent } from "@/components/ui/carousel";

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
          stopOnMouseEnter: false,
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
