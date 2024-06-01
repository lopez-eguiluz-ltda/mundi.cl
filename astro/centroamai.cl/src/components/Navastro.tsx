import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navServicesAdult, navServicesChild } from "@/utils/servicesSeed";
import type { AmaiNavService } from "@/utils/types";
import React, { useEffect, useState } from "react";

import LogoNormal from "@assets/images/amai_logo_full.png";
import LogoWhite from "@assets/images/amai_logo_full_white.png";

import { IoMenu } from "react-icons/io5";

const Navastro = () => {
  var linkClass: string =
    "inline-flex items-center justify-center bg-transparent text-lg focus:bg-cgreen focus:text-white hover:bg-cpurple/50 hover:text-white data-[state=open]:bg-cpurple/50 rounded-3xl px-4 py-2 transition-all font-medium duration-300 ease-in-out";

  var triggerClass: string =
    "bg-transparent text-lg focus:bg-cgreen focus:text-white hover:bg-cpurple hover:text-white data-[state=open]:bg-cpurple/50 rounded-3xl transition-all duration-300 ease-in-out";

  var itemClass: string = "px-2";

  const [navBarColor, setNavBarColor] = useState("py-8 text-white");
  const [logo, setLogo] = useState(LogoWhite);

  useEffect(() => {
    const changeColor = () => {
      const scrollPercent = window.scrollY / window.innerHeight;

      // Si el porcentaje de scroll es mayor a X, cambia el color
      if (scrollPercent > 0.63) {
        setNavBarColor("bg-white pt-2 lg:py-4 text-black shadow-md");
        setLogo(LogoNormal);
      } else {
        setNavBarColor("py-8 text-white");
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
      className={`${navBarColor} fixed z-10 w-full backdrop-blur-sm transition-all duration-500 ease-in-out`}
    >
      <div className="flex flex-row justify-between items-center px-10 sm:px-20 lg:px-40 gap-5 lg:gap-10">
        {/* LOGO NAVBAR */}
        <img src={logo.src} alt="Logo centro amai" className="w-36" />

        {/* NAV LINK */}
        <div className="lg:flex items-center justify-center w-full hidden">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className={linkClass}>
                  Inicio
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className={itemClass}>
                <NavigationMenuTrigger className={triggerClass}>
                  Pediatría
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex gap-5 p-5 md:w-[400px] lg:w-[800px]">
                    <div className="basis-1/3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-center items-center rounded-3xl bg-cpurple/50 no-underline outline-none focus:shadow-md relative"
                          href="/"
                        >
                          <img
                            src="nav/pediatria.jpg"
                            alt=""
                            className="object-cover h-full opacity-20 rounded-3xl "
                          />

                          <div className="absolute mb-2 mt-4 text-3xl font-bold text-white">
                            Pediatría
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </div>

                    <div className="basis-2/3 bg-white">
                      <ul className="grid grid-cols-2 gap-x-5 justify-items-center">
                        {navServicesChild.map(
                          (amaiService: AmaiNavService, index: number) => (
                            <li
                              className="space-y-2 hover:bg-cgreen/10 rounded-xl p-2 transition-colors duration-300 ease-in-out"
                              key={index}
                            >
                              <h3 className="font-bold leading-none">
                                {amaiService.service}
                              </h3>
                              <p className="line-clamp-3 text-sm leading-4 text-cgray">
                                {amaiService.description}
                              </p>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className={itemClass}>
                <NavigationMenuTrigger className={triggerClass}>
                  Adulto
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex gap-5 p-5 md:w-[400px] lg:w-[800px]">
                    <div className="basis-1/3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-center items-center rounded-3xl bg-cpurple/50 no-underline outline-none focus:shadow-md relative"
                          href="/"
                        >
                          <img
                            src="nav/adulto.jpg"
                            alt=""
                            className="object-cover h-full opacity-20 rounded-3xl "
                          />

                          <div className="absolute mb-2 mt-4 text-3xl font-bold text-white">
                            Adulto
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </div>

                    <div className="basis-2/3 bg-white">
                      <ul className="grid grid-cols-2 gap-x-5 justify-items-center">
                        {navServicesAdult.map(
                          (amaiService: AmaiNavService, index: number) => (
                            <li
                              className="space-y-2 hover:bg-cgreen/10 rounded-xl p-2 transition-colors duration-300 ease-in-out"
                              key={index}
                            >
                              <h3 className="font-bold leading-none">
                                {amaiService.service}
                              </h3>
                              <p className="line-clamp-3 text-sm leading-4 text-cgray">
                                {amaiService.description}
                              </p>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className={itemClass}>
                <NavigationMenuLink href="#equipo" className={linkClass}>
                  Equipo
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className={itemClass}>
                <NavigationMenuLink href="#contacto" className={linkClass}>
                  Contacto
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:block lg:w-36"></div>

        {/* MOBILE HAMBURGER */}
        <div className="lg:hidden">
          <button
            onClick={() => {
              console.log("Hola que");
            }}
          >
            <IoMenu size={46} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navastro;
