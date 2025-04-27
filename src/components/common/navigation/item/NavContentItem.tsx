import { NavigationMenuLink } from "@shadcn/navigation-menu";
import NavImageItem from "./NavImageItem";
import NavServiceItem from "./NavServiceItem";
import type { NavService, NavImageItemType } from "@utils/types";

const NavContentItem = ({
  navItem,
  services,
}: {
  navItem: NavImageItemType;
  services: NavService[];
}) => {
  return (
    <div className="flex gap-5 p-5 md:w-[400px] lg:w-[800px]">
      <div className="basis-1/3">
        <NavigationMenuLink asChild>
          <NavImageItem navItem={navItem} />
        </NavigationMenuLink>
      </div>

      <div className="basis-2/3 bg-white">
        <NavServiceItem services={services} />
      </div>
    </div>
  );
};

export default NavContentItem;
