import AutoScroll from "embla-carousel-auto-scroll";
import ServiceTitle from "./ServiceTitle";
import ServiceCircle from "./ServiceCircle";
import { useEffect, useMemo, useState } from "react";
import { Carousel, CarouselContent } from "@shadcn/carousel";

const ServiceCarousel = () => {
  const dotColor = "#D34F4D";
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

  const shuffledServices = useMemo(() => {
    const shuffled = [...services];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

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
    <div className="py-2 sm:py-10 md:py-24 select-none">
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
          {shuffledServices.map((service) => (
            <>
              <ServiceTitle title={service} key={service} />
              <ServiceCircle dotColor={dotColor} key={service + 1} />
            </>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ServiceCarousel;
