import type { AmaiNavService } from "@/utils/types";

const NavServiceItem = ({ services }: { services: AmaiNavService[] }) => {
  return (
    <ul className="grid grid-cols-2 gap-x-5 justify-items-center">
      {services.map((amaiService: AmaiNavService, index: number) => (
        <li
          className="space-y-2 hover:bg-cgreen/10 rounded-xl p-2 transition-colors duration-300 ease-in-out"
          key={index}
        >
          <h3 className="font-bold leading-none">{amaiService.service}</h3>
          <p className="line-clamp-3 text-sm leading-4 text-cgray">
            {amaiService.description}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default NavServiceItem;
