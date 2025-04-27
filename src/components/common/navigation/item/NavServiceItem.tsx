import type { NavService } from "@utils/types";

const NavServiceItem = ({ services }: { services: NavService[] }) => {
  return (
    <ul className="grid grid-cols-2 gap-x-5 justify-items-center">
      {services.map((service: NavService) => (
        <li
          className="space-y-2 hover:bg-accent-normal/10 rounded-xl p-2 transition-colors duration-300 ease-in-out"
          key={service.name}
        >
          <h3 className="font-bold leading-none">{service.name}</h3>
          <p className="line-clamp-3 text-sm leading-4 text-cgray">
            {service.description}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default NavServiceItem;
