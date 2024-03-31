import { IconType } from "react-icons";

export interface CoffeeDescriptionTypes {
  bgColor: "darkYellow" | "yellow" | "gray" | "purple";
}

export interface CoffeeDescriptionProps {
  text: string;
  icon: IconType;
  bgColor: "darkYellow" | "yellow" | "gray" | "purple";
}
