import Autoplay from "embla-carousel-autoplay";

import FrontCarouselItem from "./FrontCarouselItem";
import { Carousel, CarouselContent } from "@shadcn/carousel";
import carouselItems from "@utils/carouselSeed";
import type { CarouselItemType } from "@utils/types";

const FrontCarousel = () => {
  return (
    <section>
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
          {carouselItems.map((carouselItem: CarouselItemType) => (
            <FrontCarouselItem item={carouselItem} key={carouselItem.header} />
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default FrontCarousel;
