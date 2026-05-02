import { useState } from "react";

import { RiServiceFill, RiTeamFill } from "react-icons/ri";
import { MdOutlineCall } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { cn } from "@utils/shadcn";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@components/common/ui/sheet";

const navHambItems = [
  {
    title: "Inicio",
    icon: BiSolidHomeAlt2,
  },
  {
    title: "Equipo",
    icon: RiTeamFill,
  },
  {
    title: "Servicios",
    icon: RiServiceFill,
  },
  {
    title: "Contacto",
    icon: MdOutlineCall,
  },
];

const SheetHamb = ({ logoColorHamb }: { logoColorHamb: string }) => {
  const [open, setOpen] = useState(false);

  const hambClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="select-none">
        <IoMenu
          size={46}
          aria-label="Menú navegación celular"
          className={cn(
            "hover:cursor-pointer",
            logoColorHamb === "white" ? "text-white/80" : "text-cgray/60",
          )}
        />
      </SheetTrigger>

      <SheetContent
        side={"top"}
        className="max-h-screen overflow-y-auto py-12 transition-all duration-300 ease-in-out xl:hidden"
      >
        <SheetHeader>
          <SheetTitle className="text-accent-normal text-center text-lg font-bold">
            Menú de navegación
          </SheetTitle>
        </SheetHeader>
        <div className="flex w-full flex-col items-start justify-center gap-5 px-6">
          {navHambItems.map((item) => (
            <a
              href={`/#${item.title.toLowerCase()}`}
              key={item.title}
              className="group inline-flex items-center justify-center gap-5"
              onClick={hambClick}
            >
              <item.icon
                size={24}
                className="text-accent-normal transition-all duration-300 group-hover:opacity-50"
              />
              <p className="font-medium transition-all duration-300 group-hover:opacity-50 sm:text-xl">
                {item.title}
              </p>
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetHamb;
