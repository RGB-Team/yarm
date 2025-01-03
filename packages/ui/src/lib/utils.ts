import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function removeOperator(str: string) {
  return str.replace(/(>|<|=|:)/g, "");
}

export function parseValue(str: string) {
  return str.replaceAll(".", "");
}
