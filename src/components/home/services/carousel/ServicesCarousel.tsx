import AutoScroll from "embla-carousel-auto-scroll";
import ServiceTitle from "./ServiceTitle";
import ServiceCircle from "./ServiceCircle";
import { Fragment, useEffect, useMemo, useState } from "react";
import { Carousel, CarouselContent } from "@shadcn/carousel";

const ServiceCarousel = () => {
  const dotColor = "#E67C26";
  const services: string[] = [
    "Nutrición",
    "Medicina",
    "Kinesiología",
    "T. Ocupacional",
    "Psicología",
    "Fonoaudiología",
    "Psicopedagogía",
    "Neurología",
    "Pediatría",
  ];

  const [speed, setSpeed] = useState(1.5);

  useEffect(() => {
    const adjustSpeed = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSpeed(0.5); // Velocidad para móviles
      } else if (width < 1024) {
        setSpeed(1.0); // Velocidad para tabletas
      } else {
        setSpeed(1.5); // Velocidad para escritorios
      }
    };

    adjustSpeed();
    window.addEventListener("resize", adjustSpeed);
    return () => {
      window.removeEventListener("resize", adjustSpeed);
    };
  }, []);

  return (
    <section className="py-2 sm:py-10 md:py-12 select-none">
      <Carousel
        className="w-full"
        opts={{
          loop: true,
          active: true,
          align: "center",
        }}
        plugins={[
          AutoScroll({
            speed: speed,
            startDelay: 500,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
            stopOnFocusIn: false,
          }),
        ]}
      >
        <CarouselContent>
          {services.map((service) => (
            <Fragment key={service}>
              <ServiceTitle title={service} />
              <ServiceCircle dotColor={dotColor} />
            </Fragment>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ServiceCarousel;
