import { Select } from "@chakra-ui/react";
import React, { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

const LocalSwitcher = () => {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const localActive = useLocale();

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    startTransition(() => {
      router.replace(`${pathname.replace(/^\/[a-z]{2}/, `/${locale}`)}`);
    });
  };

  return (
    <Select defaultValue={localActive} onChange={onSelectChange}>
      <option value="en">{t("settings.language.options.en")}</option>
      <option value="es">{t("settings.language.options.es")}</option>
      <option value="fr">{t("settings.language.options.fr")}</option>
    </Select>
  );
};

export default LocalSwitcher;
