import { CarouselItem } from "@components/common/ui/carousel";

const ServiceCircle = ({ dotColor }: { dotColor: string }) => {
  return (
    <CarouselItem className="basis-1/12 p-0 flex justify-center items-center">
      <svg
        className="hidden md:block"
        height="100"
        width="50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle r="10" cx="25" cy="50" fill={dotColor} />
      </svg>
      <svg
        className="block md:hidden"
        height="100"
        width="50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle r="5" cx="25" cy="50" fill={dotColor} />
      </svg>
    </CarouselItem>
  );
};

export default ServiceCircle;
