import { Position } from "@prisma/client";

function getTranslatedListed(position: Position, t: any) {
  if (!position) {
    throw new Error("Invalid position data structure");
  }

  if (position.listed) {
    return t("listed-options.yes");
  } else {
    return t("listed-options.no");
  }
}

export default getTranslatedListed;
