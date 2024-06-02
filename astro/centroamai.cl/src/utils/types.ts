import type { IconType } from "react-icons";

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

export type AmaiService = {
  icon: IconType;
  service: string;
  descriptions: string[];
};

export type AmaiNavService = {
  service: string;
  description: string;
};

export type NavImageItemType = {
  title: string;
  image: string;
  imageAlt: string;
};
