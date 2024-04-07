import { Application } from "@prisma/client";

function getTranslatedApplicationGender(application: Application, t: any) {
  if (!application) {
    throw new Error("Invalid application data structure");
  }

  if (application.gender === "Male") {
    return t("gender-options.male");
  } else if (application.gender === "Female") {
    return t("gender-options.female");
  } else {
    return t("gender-options.other");
  }
}

export default getTranslatedApplicationGender;
