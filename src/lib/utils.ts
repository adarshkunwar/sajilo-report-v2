import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

export const cn = (...input: ClassValue[]) => {
  return twMerge(clsx(...input));
};
