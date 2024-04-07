import { Position } from "@prisma/client";

function getTranslatedPosition(positionData: Position, userLocale: string) {
  if (!positionData || typeof positionData.position !== "object") {
    throw new Error("Invalid position data structure");
  }

  const translatedPosition = (positionData.position as any)[userLocale];

  if (!translatedPosition) {
    console.warn(`Translation for locale "${userLocale}" not found.`);
    return null;
  }

  return translatedPosition;
}

export default getTranslatedPosition;
