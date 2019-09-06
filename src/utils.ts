import Color from "color";

export function findTextColor(backgroundColor: string): string {
  if (Color(backgroundColor).isDark()) {
    return "white";
  } else {
    return "black";
  }
}
