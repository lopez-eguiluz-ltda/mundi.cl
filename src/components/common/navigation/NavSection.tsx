import { useEffect, useState } from "react";

import LogoNormal from "@assets/images/mundi_logo.png";
import LogoWhite from "@assets/images/mundi_logo_full_white.png";

import NavMenu from "./NavMenu";
import SheetHamb from "./SheetHamb";

const NavSection = () => {
  const [navBarColor, setNavBarColor] = useState("py-6 text-white");
  const [logo, setLogo] = useState(LogoWhite);
  const [logoSize, setLogoSize] = useState("w-32");

  const [logoColorHamb, setLogoColorHamb] = useState<"white" | "gray">("white");

  useEffect(() => {
    const changeColor = () => {
      const scrollPercent = window.scrollY / window.innerHeight;

      // Si el porcentaje de scroll es mayor a X, cambia el color
      if (scrollPercent > 0.63) {
        setNavBarColor("bg-white py-2 lg:py-4 text-cgray shadow-md");
        setLogo(LogoNormal);
        setLogoSize("w-16 md:w-20");
        setLogoColorHamb("gray");
      } else {
        setNavBarColor("py-6 text-white");
        setLogo(LogoWhite);
        setLogoSize("w-32");
        setLogoColorHamb("white");
      }
    };

    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <nav
      className={`${navBarColor} fixed z-30 w-full backdrop-blur-md transition-all duration-500 ease-in-out`}
    >
      <div className="flex flex-row justify-between items-center px-10 sm:px-20 lg:px-40 gap-5 lg:gap-10">
        {/* LOGO NAVBAR */}
        <img
          src={logo.src}
          alt="Logo centro mundi"
          loading="lazy"
          className={logoSize}
          draggable={false}
        />

        {/* NAV MENU */}
        <div className="lg:flex items-center justify-center w-full hidden">
          <NavMenu />
        </div>

        <div className="hidden lg:block lg:w-36"></div>

        {/* MOBILE HAMBURGER */}
        <div className="lg:hidden">
          <SheetHamb logoColorHamb={logoColorHamb} />
        </div>
      </div>
    </nav>
  );
};

export default NavSection;
