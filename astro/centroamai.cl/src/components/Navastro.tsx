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
import type { AmaiNavService } from "@/utils/types";

const childService: AmaiNavService[] = [
  {
    service: "Pediatría ambulatoria",
    description: "Control niño sano y Urgencias pediátricas",
  },
  {
    service: "Endocrinología pediátrica",
    description:
      "Diagnóstico y seguimiento de patologías del sistema endocrino: Diabetes, hiper/hipotiroidismo, pubertad precoz, otros.",
  },
  {
    service: "Neurología infantil",
    description: "Diagnóstico y seguimiento de trastornos del neurodesarrollo.",
  },
  {
    service: "Terapia ocupacional",
    description:
      "Evaluación, diagnóstico y terapia en trastornos del neurodesarrollo, integración sensorial y rechazo alimentario.",
  },
  {
    service: "Fonoaudiología",
    description:
      "Evaluación, diagnóstico y terapia en trastornos de la comunicación, deglución, neurodesarrollo y rechazo alimentario.",
  },
  {
    service: "Psicología",
    description:
      "Evaluación, diagnóstico y terapia en trastornos del neurodesarrollo y habilidades parentales.",
  },
  {
    service: "Psicopedagogía",
    description:
      "Evaluación, diagnóstico y terapia en trastornos del neurodesarrollo, potenciar lectoescritura y acompañamiento estudiantil.",
  },
  {
    service: "Nutrición",
    description:
      "Acompañamiento en inicio de la alimentación complementaria, método BLW y Alergias alimentarias.",
  },
];

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
              <div className="flex gap-8 p-6 md:w-[400px] lg:w-[600px]">
                <div className="basis-1/3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-3xl bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md relative"
                      href="/"
                    >
                      <img
                        src="nav/pediatria.jpg"
                        alt=""
                        className="object-contain opacity-50 rounded-3xl "
                      />

                      <div className="absolute mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                    </a>
                  </NavigationMenuLink>
                </div>

                <div className="basis-2/3 bg-white">
                  <ul className="grid grid-cols-2 justify-items-center">
                    {childService.map((amaiService: AmaiNavService) => (
                      <li className="space-y-2 hover:bg-cgreen/10 rounded-xl p-2 transition-colors duration-300 ease-in-out">
                        <h2 className="font-bold leading-none">
                          {amaiService.service}
                        </h2>
                        <p className="line-clamp-2 text-sm leading-snug text-cgray">
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
