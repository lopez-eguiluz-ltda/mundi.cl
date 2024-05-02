import type { IconType } from "react-icons";
import type { SocialType } from "./enum";

export type TeamType = {
  name: string;
  position: string;
  photo: ImageMetadata;
  socialLink: SocialLinkType[];
};

export type SocialLinkType = {
  icon: IconType;
  link: string;
};
