import { useEffect, useState } from "react";

import LogoNormal from "@assets/images/amai_logo_full.webp";
import LogoWhite from "@assets/images/amai_logo_full_white.webp";

import NavMenu from "./NavMenu";
import SheetHamb from "./SheetHamb";

const NavSection = () => {
  const [navBarColor, setNavBarColor] = useState("py-6 text-white");
  const [logo, setLogo] = useState(LogoWhite);

  useEffect(() => {
    const changeColor = () => {
      const scrollPercent = window.scrollY / window.innerHeight;

      // Si el porcentaje de scroll es mayor a X, cambia el color
      if (scrollPercent > 0.63) {
        setNavBarColor("bg-white pt-2 lg:py-4 text-cgray shadow-md");
        setLogo(LogoNormal);
      } else {
        setNavBarColor("py-6 text-white");
        setLogo(LogoWhite);
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
          alt="Logo centro amai"
          loading="lazy"
          className="w-36"
        />

        {/* NAV MENU */}
        <div className="lg:flex items-center justify-center w-full hidden">
          <NavMenu />
        </div>

        <div className="hidden lg:block lg:w-36"></div>

        {/* MOBILE HAMBURGER */}
        <div className="lg:hidden">
          <SheetHamb />
        </div>
      </div>
    </nav>
  );
};

export default NavSection;
