import {
  FaBaby,
  FaAppleWhole,
  FaUserDoctor,
  FaPuzzlePiece,
} from "react-icons/fa6";
import { GiHand } from "react-icons/gi";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { RiMentalHealthFill, RiSpeakFill } from "react-icons/ri";
import { LuBrain } from "react-icons/lu";

import type { NavService, Service } from "./types";

const navServicesChild: NavService[] = [
  {
    name: "Pediatría ambulatoria",
    description: "Control niño sano y urgencias pediátricas",
  },
  {
    name: "Neurología",
    description: "Diagnóstico y seguimiento de trastornos del neurodesarrollo.",
  },
  {
    name: "Terapia ocupacional",
    description:
      "Evaluación, diagnóstico y terapia en trastornos del neurodesarrollo, integración sensorial y rechazo alimentario.",
  },
  {
    name: "Fonoaudiología",
    description:
      "Evaluación, diagnóstico y terapia en trastornos de la comunicación, deglución, neurodesarrollo y rechazo alimentario.",
  },
  {
    name: "Psicología",
    description:
      "Evaluación, diagnóstico y terapia en trastornos del neurodesarrollo y habilidades parentales.",
  },
  {
    name: "Psicopedagogía",
    description:
      "Evaluación, diagnóstico y terapia en trastornos del neurodesarrollo, potenciar lectoescritura y acompañamiento estudiantil.",
  },
  {
    name: "Nutrición",
    description:
      "Alimentación complementaria, método BLW y alergias alimentarias.",
  },
];

const navServicesAdult: NavService[] = [
  {
    name: "Medicina General",
    description: "Evaluación y diagnóstico de enfermedades, licencia médica.",
  },
  {
    name: "Kinesiología",
    description:
      "Evaluación, diagnóstico y rehabilitación de trastornos musculoesqueléticos. Reintegro deportivo",
  },
  {
    name: "Nutrición",
    description:
      "Nutrición consciente y pautas alimentarias en: Alergias alimentarias, vegetarianismo, veganismo, enfermedad celiaca.",
  },
  {
    name: "Psicología",
    description:
      "Evaluación, diagnóstico y terapia en trastornos de la personalidad y neurodesarrollo.",
  },
  {
    name: "Fonoaudiología",
    description:
      "Evaluación, diagnóstico y terapia en trastornos de la comunicación, deglución y auditivos.",
  },
];

const detailServices: Service[] = [
  {
    icon: FaBaby,
    service: "Pediatría",
    descriptions: [
      "Pro lactancia materna",
      "Pro crianza respetuosa",
      "Asesores de BLW",
      "Uso racional de medicamentos",
    ],
  },
  {
    icon: FaAppleWhole,
    service: "Nutrición",
    descriptions: [
      "Selectividad alimentaria",
      "Nutrición vegetariana",
      "Atención neurodivergente",
    ],
  },
  {
    icon: RiMentalHealthFill,
    service: "Psicología",
    descriptions: [
      "Psicología infanto-juvenil",
      "Experiencia en autismo",
      "Asesorías en habilidades parentales",
    ],
  },
  {
    icon: RiSpeakFill,
    service: "Fonoaudiología",
    descriptions: [
      "Experiencia en autismo",
      "Rechazo alimentario",
      "Trastornos de lenguaje, habla, deglución y motricidad orofacial",
      "Frenillo lingual alterado",
      "Experiencia en apraxia del habla infantil y tartamudez",
    ],
  },
  {
    icon: GiHand,
    service: "Terapia Ocupacional",
    descriptions: [
      "AVD (actividades de la vida diaria)",
      "Integración y modulación sensorial",
      "Rechazo alimentario",
      "Experiencia en neurodesarrollo, autismo y TDAH",
    ],
  },
  {
    icon: FaUserDoctor,
    service: "Medicina General",
    descriptions: ["Medicina ortomolecular", "Fitoterapia clínica"],
  },
  {
    icon: MdOutlinePersonalInjury,
    service: "Kinesiología",
    descriptions: [
      "Rehabilitación musculoesquelética",
      "Reintegro deportivo",
      "Masoterapia, crioterapia & ultrasonido",
      "Electroestimulación",
    ],
  },
  {
    icon: FaPuzzlePiece,
    service: "Psicopedagogía",
    descriptions: [
      "Experiencia en autismo",
      "Competencias en Evaluación de N.E.E",
      "Intervención Psicopedagógica",
      "Evaluaciones Psicopedagógicas",
    ],
  },
  {
    icon: LuBrain,
    service: "Neurología",
    descriptions: [
      "Neurología",
      "Evaluación neurológica",
      "Controles neurológicos",
      "Certificado MINEDUC",
    ],
  },
];

export { navServicesChild, navServicesAdult, detailServices };
