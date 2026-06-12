import AutoScroll from 'embla-carousel-auto-scroll'
import ServiceTitle from './ServiceTitle'
import ServiceCircle from './ServiceCircle'
import { Fragment, useEffect, useState } from 'react'
import { Carousel, CarouselContent } from '@components/common/ui/carousel'

const getSpeed = (width: number) => {
  if (width < 640) return 0.5
  if (width < 1024) return 1.0
  return 1.5
}

const ServiceCarousel = () => {
  const dotColor = '#E67C26'
  const services: string[] = [
    'Nutrición',
    'Medicina',
    'Kinesiología',
    'T. Ocupacional',
    'Psicología',
    'Fonoaudiología',
    'Psicopedagogía',
    'Neurología',
    'Pediatría',
  ]

  const [speed, setSpeed] = useState(1.5)

  useEffect(() => {
    const adjustSpeed = () => setSpeed(getSpeed(window.innerWidth))

    adjustSpeed()
    window.addEventListener('resize', adjustSpeed)
    return () => {
      window.removeEventListener('resize', adjustSpeed)
    }
  }, [])

  return (
    <section className="py-2 select-none sm:py-10 md:py-12">
      <Carousel
        className="w-full"
        opts={{
          loop: true,
          active: true,
          align: 'center',
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
  )
}

export default ServiceCarousel
