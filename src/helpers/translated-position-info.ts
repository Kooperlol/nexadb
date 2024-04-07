import { Position } from "@prisma/client";

function getTranslatedPositionInfo(positionData: Position, userLocale: string) {
  if (!positionData || typeof positionData.about !== "object") {
    throw new Error("Invalid position data structure");
  }

  const translatedPosition = (positionData.about as any)[userLocale];

  if (!translatedPosition) {
    console.warn(`Translation for locale "${userLocale}" not found.`);
    return null;
  }

  return translatedPosition;
}

export default getTranslatedPositionInfo;
