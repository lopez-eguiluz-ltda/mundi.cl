import {
  FaBaby,
  FaAppleWhole,
  FaBrain,
  FaUserNurse,
  FaUserDoctor,
  FaPuzzlePiece,
} from "react-icons/fa6";
import { GiHand } from "react-icons/gi";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { RiSpeakFill } from "react-icons/ri";
import type { AmaiNavService, AmaiService } from "./types";

const navServicesChild: AmaiNavService[] = [
  {
    service: "Pediatría ambulatoria",
    description: "Control niño sano y urgencias pediátricas",
  },
  {
    service: "Endocrinología",
    description:
      "Diagnóstico y seguimiento de: Diabetes, hiper/hipotiroidismo, pubertad precoz y otros.",
  },
  {
    service: "Neurología",
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
      "Alimentación complementaria, método BLW y alergias alimentarias.",
  },
];

const navServicesAdult: AmaiNavService[] = [
  {
    service: "Medicina Biorreguladora",
    description:
      "Evaluación, diagnóstico y tratamiento integral de todo tipo de enfermedades, potenciando el sistema inmune.",
  },
  {
    service: "Medicina General",
    description: "Evaluación y diagnóstico de enfermedades, licencia médica.",
  },
  {
    service: "Matronería",
    description:
      "Acompañamiento en gestación, parto y post parto, PAP, anticoncepción natural y farmacológica.",
  },
  {
    service: "Kinesiología",
    description:
      "Evaluación, diagnóstico y rehabilitación de trastornos musculoesqueléticos. Reintegro deportivo",
  },
  {
    service: "Nutrición",
    description:
      "Nutrición consciente y pautas alimentarias en: Alergias alimentarias, vegetarianismo, veganismo, enfermedad celiaca.",
  },
  {
    service: "Psicología",
    description:
      "Evaluación, diagnóstico y terapia en trastornos de la personalidad y neurodesarrollo.",
  },
  {
    service: "Fonoaudiología",
    description:
      "Evaluación, diagnóstico y terapia en trastornos de la comunicación, deglución y auditivos.",
  },
];

const detailServices: AmaiService[] = [
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
      "Materno infantil",
      "Nutrición vegetariana",
      "Consejería de Lactancia",
    ],
  },
  {
    icon: FaBrain,
    service: "Psicología",
    descriptions: [
      "Psicología infanto-juvenil",
      "Experiencia en TEA",
      "Asesorías en habilidades parentales",
    ],
  },
  {
    icon: RiSpeakFill,
    service: "Fonoaudiología",
    descriptions: [
      "Experiencia en TEA",
      "Rechazo alimentario",
      "Trastornos de lenguaje, habla y deglución",
    ],
  },
  {
    icon: GiHand,
    service: "Terapia Ocupacional",
    descriptions: [
      "AVD (actividades de la vida diaria)",
      "Integración sensorial",
      "Rechazo alimentario",
    ],
  },

  {
    icon: FaUserNurse,
    service: "Matronería",
    descriptions: [
      "Consejería en salud sexual y reproductiva",
      "Consejería en anticoncepción",
      "Medicina placentaria",
    ],
  },
  {
    icon: FaUserDoctor,
    service: "Medicina General",
    descriptions: [
      "Medicina biorreguladora",
      "Medicina ortomolecular",
      "Fitoterapia clínica",
    ],
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
      "Experiencia en TEA",
      "Competencias en Evaluación de N.E.E",
      "Intervención Psicopedagógica",
      "Evaluaciones Psicopedagógicas",
    ],
  },
];

export { navServicesChild,navServicesAdult, detailServices };
