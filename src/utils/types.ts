import type { IconType } from "react-icons";

export type TeamType = {
  name: string;
  position: string;
  photo: ImageMetadata;
  socialLink: SocialLinkType[];
};

export type SocialLinkType = {
  icon: IconType;
  name: string;
  link: string;
};

export type Service = {
  icon: IconType;
  service: string;
  descriptions: string[];
};

export type NavService = {
  name: string;
  description: string;
};

export type NavImageItemType = {
  title: string;
  image: string;
  imageAlt: string;
};

export type CarouselItemType = {
  header: string;
  title: string;
  subtitle: string;
  image: ImageMetadata;
};
