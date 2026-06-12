import { CarouselItem } from '@components/common/ui/carousel'

const ServiceTitle = ({ title }: { title: string }) => {
  return (
    <CarouselItem className="flex basis-1/3 items-center justify-center p-0">
      <h2 className="text-base font-light text-white sm:text-2xl md:text-4xl lg:text-6xl">
        {title}
      </h2>
    </CarouselItem>
  )
}

export default ServiceTitle
