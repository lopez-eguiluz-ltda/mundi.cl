import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navastro = () => (
  <nav className="fixed z-10 w-full backdrop-blur-sm">
    <div className="flex justify-start items-center px-40 py-8 text-white gap-10">
      <img
        src="nav/amai_logo_full_white.png"
        alt="Logo centroamai"
        className="w-36"
      />
      <h1 className="text-lg">Felipe</h1>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-lg focus:bg-cgreen focus:text-white hover:bg-cpurple hover:text-white data-[state=open]:bg-cpurple/50 rounded-3xl">
              Pediatría
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex gap-8 p-6 md:w-[400px] lg:w-[600px]">
                <li className="basis-1/2">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-3xl bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <img
                        src="nav/pediatria.jpg"
                        alt=""
                        className="object-contain rounded-t-3xl"
                      />

                      <div className="p-6">
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components that you can copy and
                          paste into your apps. Accessible. Customizable. Open
                          Source.
                        </p>
                      </div>
                    </a>
                  </NavigationMenuLink>
                </li>
                <div className="basis-1/2">
                  <h2 className="font-bold">Pediatría 1</h2>
                  <h3>Subtitulo pediatría</h3>
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

		  <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-lg focus:bg-cgreen focus:text-white hover:bg-cpurple hover:text-white data-[state=open]:bg-cpurple/50 rounded-3xl">
              Adulto
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex gap-8 p-6 md:w-[400px] lg:w-[600px]">
                <li className="basis-1/2">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-3xl bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <img
                        src="nav/pediatria.jpg"
                        alt=""
                        className="object-contain rounded-t-3xl"
                      />

                      <div className="p-6">
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components that you can copy and
                          paste into your apps. Accessible. Customizable. Open
                          Source.
                        </p>
                      </div>
                    </a>
                  </NavigationMenuLink>
                </li>
                <div className="basis-1/2">
                  <h2 className="font-bold">Pediatría 1</h2>
                  <h3>Subtitulo pediatría</h3>
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </nav>
);

export default Navastro;
