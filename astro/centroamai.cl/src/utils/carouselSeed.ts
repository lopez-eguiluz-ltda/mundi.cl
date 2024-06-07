import type { CarouselItemType } from "./types";
import portada1 from "@assets/images/carousel/portada_1.jpg";
import portada2 from "@assets/images/carousel/portada_2.jpg";
import portada3 from "@assets/images/carousel/portada_3.jpg";

const carouselItems: CarouselItemType[] = [
  {
    image: portada1,
    header: "Solicita tu hora",
    title: "Centro amai",
    subtitle: "¿Qué estas esperando para venir? 🤭 ¡Te esperamos! ♥️",
  },
  {
    image: portada2,
    header: "Tu centro médico terapéutico",
    title: "Centro amai",
    subtitle:
      "Atención desde la primera infancia, buscando promover la salud física y emocional, facilitando un desarrollo óptimo en todas las etapas de la vida.",
  },
  {
    image: portada3,
    header: "Apoyo integral",
    title: "Centro amai",
    subtitle:
      "Equipo multidisciplinario enfocado en la salud materno infantil 🤰🤱🏻",
  },
];

export default carouselItems;
