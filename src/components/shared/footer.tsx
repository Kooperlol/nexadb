import React from "react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <div className="relative bottom-0 z-10 flex flex-row justify-between items-end p-8 bg-main-foreground text-white text-center">
      <div className="flex flex-col text-left">
        <h4>NexaDB</h4>
        <h5>{t("value")}</h5>
      </div>
      <h5 className="">© 2024 Nexa Database LLC. {t("rights")}</h5>
    </div>
  );
};

export default Footer;
