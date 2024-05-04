import type { TeamType } from "./types";

import camila from "@assets/images/equipo/camila_eguiluz.jpg";
import karla from "@assets/images/equipo/karla_lopez.jpg";
import mauro from "@assets/images/equipo/mauro_rivera.jpg";
import carmina from "@assets/images/equipo/carmina_nicolai.jpg";
import paulette from "@assets/images/equipo/paulette_toha.jpeg";
import claudia from "@assets/images/equipo/claudia_salas.jpg";
import scarlett from "@assets/images/equipo/scarlett_orellana.jpeg";
import daniel from "@assets/images/equipo/daniel_oliva.jpg";


import { ImFacebook, ImLinkedin2 } from "react-icons/im";
import { SiInstagram } from "react-icons/si";

export const teams: TeamType[] = [
  {
    name: "Camila Eguiluz",
    position: "Fonoaudiología",
    photo: camila,
    socialLink: [
      {
        icon: ImFacebook,
        link: "#",
      },
      {
        icon: SiInstagram,
        link: "#",
      },
      {
        icon: ImLinkedin2,
        link: "#",
      },
    ],
  },

  {
    name: "Karla López",
    position: "Fonoaudiología",
    photo: karla,
    socialLink: [
      {
        icon: ImFacebook,
        link: "#",
      },
      {
        icon: SiInstagram,
        link: "#",
      },
      {
        icon: ImLinkedin2,
        link: "#",
      },
    ],
  },

  {
    name: "Mauro Rivera",
    position: "Medicina Biorreguladora",
    photo: mauro,
    socialLink: [
      {
        icon: ImFacebook,
        link: "#",
      },
      {
        icon: SiInstagram,
        link: "#",
      },
      {
        icon: ImLinkedin2,
        link: "#",
      },
    ],
  },

  {
    name: "Daniel Oliva",
    position: "Nutrición",
    photo: daniel,
    socialLink: [
      {
        icon: ImFacebook,
        link: "#",
      },
      {
        icon: SiInstagram,
        link: "#",
      },
      {
        icon: ImLinkedin2,
        link: "#",
      },
    ],
  },

  {
    name: "Carmina Nicolai",
    position: "Obstetricia Pro-parto",
    photo: carmina,
    socialLink: [
      {
        icon: ImFacebook,
        link: "#",
      },
      {
        icon: SiInstagram,
        link: "#",
      },
      {
        icon: ImLinkedin2,
        link: "#",
      },
    ],
  },

  {
    name: "Paulette Tohá",
    position: "Psicología Infantil",
    photo: paulette,
    socialLink: [
      {
        icon: ImFacebook,
        link: "#",
      },
      {
        icon: SiInstagram,
        link: "#",
      },
      {
        icon: ImLinkedin2,
        link: "#",
      },
    ],
  },

  {
    name: "Claudia Salas",
    position: "Medicina Infanto-Juvenil",
    photo: claudia,
    socialLink: [
      {
        icon: ImFacebook,
        link: "#",
      },
      {
        icon: SiInstagram,
        link: "#",
      },
      {
        icon: ImLinkedin2,
        link: "#",
      },
    ],
  },

  {
    name: "Scarlett Orellana",
    position: "Medicina Infanto-Juvenil",
    photo: scarlett,
    socialLink: [
      {
        icon: ImFacebook,
        link: "#",
      },
      {
        icon: SiInstagram,
        link: "#",
      },
      {
        icon: ImLinkedin2,
        link: "#",
      },
    ],
  },
];
