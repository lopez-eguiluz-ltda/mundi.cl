import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navServicesAdult, navServicesChild } from "@/utils/servicesSeed";
import type { AmaiNavService } from "@/utils/types";

const Navastro = () => (
  <nav className="fixed z-10 w-full backdrop-blur-sm">
    <div className="flex justify-start items-center px-40 py-8 text-white gap-10">
      <img
        src="nav/amai_logo_full_white.png"
        alt="Logo centroamai"
        className="w-36"
      />
      <h1 className="text-lg font-">Inicio</h1>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-lg focus:bg-cgreen focus:text-white hover:bg-cpurple hover:text-white data-[state=open]:bg-cpurple/50 rounded-3xl">
              Pediatría
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex gap-5 p-5 md:w-[400px] lg:w-[800px]">
                <div className="basis-1/3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-3xl bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md relative"
                      href="/"
                    >
                      <img
                        src="nav/pediatria.jpg"
                        alt=""
                        className="object-cover h-full opacity-50 rounded-3xl "
                      />

                      <div className="absolute mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
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
            <NavigationMenuTrigger className="bg-transparent text-lg focus:bg-cgreen focus:text-white hover:bg-cpurple hover:text-white data-[state=open]:bg-cpurple/50 rounded-3xl">
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
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </nav>
);

export default Navastro;
