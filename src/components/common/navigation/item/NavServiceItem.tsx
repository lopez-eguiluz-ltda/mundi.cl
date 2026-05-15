import type { NavService } from '@utils/types'

const NavServiceItem = ({ services }: { services: NavService[] }) => {
  return (
    <ul className="grid grid-cols-2 justify-items-center gap-x-5">
      {services.map((service: NavService) => (
        <li
          className="space-y-2 rounded-xl p-2 transition-colors duration-300 ease-in-out hover:bg-accent-normal/10"
          key={service.name}
        >
          <h3 className="leading-none font-bold">{service.name}</h3>
          <p className="line-clamp-3 text-sm leading-4 text-cgray">{service.description}</p>
        </li>
      ))}
    </ul>
  )
}

export default NavServiceItem
