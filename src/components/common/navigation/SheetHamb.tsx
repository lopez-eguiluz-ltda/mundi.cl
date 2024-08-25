import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@shadcn/sheet";
import { useState } from "react";

import { FaHome } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineCall } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

const navHambItems = [
  {
    title: "Inicio",
    icon: FaHome,
  },
  {
    title: "Equipo",
    icon: RiTeamFill,
  },
  {
    title: "Contacto",
    icon: MdOutlineCall,
  },
];

const SheetHamb = () => {
  const [open, setOpen] = useState(false);

  const hambClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <IoMenu size={46} aria-label="Menú navegación celular" />
      </SheetTrigger>

      <SheetContent className="pt-12 w-[200px] sm:w-[300px] lg:hidden">
        <SheetHeader>
          <SheetTitle className="pb-4">Menú</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <div className="flex flex-col items-start justify-center gap-5 w-full">
          {navHambItems.map((item) => (
            <a
              href={`/#${item.title.toLowerCase()}`}
              key={item.title}
              className="inline-flex items-center justify-center gap-5"
              onClick={hambClick}
            >
              <item.icon size={24} className="text-cgreen" />
              <p className="font-medium sm:text-xl">{item.title}</p>
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetHamb;
