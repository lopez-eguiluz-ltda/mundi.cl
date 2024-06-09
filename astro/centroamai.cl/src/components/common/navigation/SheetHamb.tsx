import { Sheet, SheetContent, SheetTrigger } from "@/components/common/ui/sheet";
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

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <IoMenu size={46} />
      </SheetTrigger>
      <SheetContent className="pt-12 w-[200px] sm:w-[300px] lg:hidden">
        <div className="flex flex-col items-start justify-center gap-5 w-full">
          {navHambItems.map((item, index) => (
            <a
              href="/"
              key={index}
              className="inline-flex items-center justify-center gap-5"
              onClick={() => {
                setOpen(false);
              }}
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
