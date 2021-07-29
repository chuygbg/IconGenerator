export type IconsId =
  | "facebook"
  | "instagram";

export type IconsKey =
  | "Facebook"
  | "Instagram";

export enum Icons {
  Facebook = "facebook",
  Instagram = "instagram",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Facebook]: "61697",
  [Icons.Instagram]: "61698",
};
