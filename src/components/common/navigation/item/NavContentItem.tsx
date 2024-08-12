import { NavigationMenuLink } from "@shadcn/navigation-menu";
import NavImageItem from "./NavImageItem";
import NavServiceItem from "./NavServiceItem";
import type { AmaiNavService, NavImageItemType } from "@utils/types";

const NavContentItem = ({
  imageItem,
  services,
}: {
  imageItem: NavImageItemType;
  services: AmaiNavService[];
}) => {
  return (
    <div className="flex gap-5 p-5 md:w-[400px] lg:w-[800px]">
      <div className="basis-1/3">
        <NavigationMenuLink asChild>
          <NavImageItem
            title={imageItem.title}
            image={imageItem.image}
            imageAlt={imageItem.imageAlt}
          />
        </NavigationMenuLink>
      </div>

      <div className="basis-2/3 bg-white">
        <NavServiceItem services={services} />
      </div>
    </div>
  );
};

export default NavContentItem;
