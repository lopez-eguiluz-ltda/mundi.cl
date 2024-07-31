import type { NavImageItemType } from "@/utils/types";

const NavImageItem = ({ title, image, imageAlt }: NavImageItemType) => {
  return (
    <a
      className="flex h-full w-full select-none flex-col justify-center items-center rounded-3xl bg-cpurple/50 no-underline outline-none focus:shadow-md relative"
      href="/"
    >
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        className="object-cover h-full opacity-20 rounded-3xl "
      />

      <div className="absolute mb-2 mt-4 text-3xl font-bold text-white">
        {title}
      </div>
    </a>
  );
};

export default NavImageItem;
