import React from "react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <div className="flex flex-row justify-between items-end p-8 bg-main-foreground text-white text-center">
      <div className="flex flex-col text-left">
        <p className="text-xl">NexaDB</p>
        <p>{t("value")}</p>
      </div>
      <p className="">© 2024 Nexa Database LLC. {t("rights")}</p>
    </div>
  );
};

export default Footer;
