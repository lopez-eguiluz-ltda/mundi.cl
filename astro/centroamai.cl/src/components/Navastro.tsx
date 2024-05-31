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

const Navastro = () => (
  <nav className="fixed z-10 w-full backdrop-blur-sm">
    <div className="flex justify-between items-center px-40 py-8 text-white gap-10">
      <img
        src="nav/amai_logo_full_white.png"
        alt="Logo centroamai"
        className="w-36"
      />

      <div className="flex-grow flex items-center justify-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className="inline-flex items-center justify-center bg-transparent text-lg focus:bg-cgreen focus:text-white hover:bg-cpurple/50 hover:text-white data-[state=open]:bg-cpurple/50 rounded-3xl px-4 py-2 transition-all font-medium duration-300 ease-in-out"
              >
                Inicio
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-lg focus:bg-cgreen focus:text-white hover:bg-cpurple hover:text-white data-[state=open]:bg-cpurple/50 rounded-3xl transition-all duration-300 ease-in-out">
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
                      {navServicesChild.map((amaiService: AmaiNavService) => (
                        <li className="space-y-2 hover:bg-cgreen/10 rounded-xl p-2 transition-colors duration-300 ease-in-out">
                          <h3 className="font-bold leading-none">
                            {amaiService.service}
                          </h3>
                          <p className="line-clamp-3 text-sm leading-4 text-cgray">
                            {amaiService.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-lg focus:bg-cgreen focus:text-white hover:bg-cpurple hover:text-white data-[state=open]:bg-cpurple/50 rounded-3xl transition-all duration-300 ease-in-out">
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
                      {navServicesAdult.map((amaiService: AmaiNavService) => (
                        <li className="space-y-2 hover:bg-cgreen/10 rounded-xl p-2 transition-colors duration-300 ease-in-out">
                          <h3 className="font-bold leading-none">
                            {amaiService.service}
                          </h3>
                          <p className="line-clamp-3 text-sm leading-4 text-cgray">
                            {amaiService.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#equipo"
                className="inline-flex items-center justify-center bg-transparent text-lg focus:bg-cgreen focus:text-white hover:bg-cpurple/50 hover:text-white data-[state=open]:bg-cpurple/50 rounded-3xl px-4 py-2 transition-all font-medium duration-300 ease-in-out"
              >
                Equipo
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#contacto"
                className="inline-flex items-center justify-center bg-transparent text-lg focus:bg-cgreen focus:text-white hover:bg-cpurple/50 hover:text-white data-[state=open]:bg-cpurple/50 rounded-3xl px-4 py-2 transition-all font-medium duration-300 ease-in-out"
              >
                Contacto
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="w-36"></div>
    </div>
  </nav>
);

export default Navastro;
