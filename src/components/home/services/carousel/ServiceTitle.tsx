import { CarouselItem } from "@components/common/ui/carousel";

const ServiceTitle = ({ title }: { title: string }) => {
  return (
    <CarouselItem className="basis-1/3 p-0 flex justify-center items-center">
      <h2 className="text-white text-base sm:text-2xl md:text-4xl lg:text-6xl font-light">
        {title}
      </h2>
    </CarouselItem>
  );
};

export default ServiceTitle;
