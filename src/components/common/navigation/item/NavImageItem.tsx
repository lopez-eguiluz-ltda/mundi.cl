import type { NavImageItemType } from "@utils/types";

const NavImageItem = ({ navItem }: { navItem: NavImageItemType }) => {
  return (
    <a
      className="bg-accent-light/50 relative flex h-full w-full flex-col items-center justify-center rounded-3xl no-underline outline-none select-none focus:shadow-md"
      href="/"
    >
      <img
        src={navItem.image}
        alt={navItem.imageAlt}
        loading="lazy"
        className="h-full rounded-3xl object-cover opacity-20"
        draggable={false}
      />

      <div className="absolute mt-4 mb-2 text-3xl font-bold text-white">
        {navItem.title}
      </div>
    </a>
  );
};

export default NavImageItem;
