"use client";
import { AiOutlineFontSize } from "react-icons/ai";
import {
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  ModalBody,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
} from "@chakra-ui/react";
import { MdLanguage, MdSettings, MdSpeaker } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { MenuPopup } from "../shared/menu-popup";
import LocalSwitcher from "./local-switcher";
import { useTranslations } from "next-intl";
import TTS from "../shared/tts";
import { useLoading } from "@/providers/loading-provider";

const SettingsMenu = () => {
  const t = useTranslations("Header");
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState(1);
  const { setIsLoading } = useLoading();
  const [isLoadingSettings, setIsLoadingSettings] = useState(true);

  useEffect(() => {
    // Font Size
    const storedMultiplier = localStorage.getItem("fontSizeMultiplier");
    const multiplier = storedMultiplier
      ? Math.min(200, Math.max(100, parseFloat(storedMultiplier)))
      : 100;
    handleFontSizeChange(multiplier);
  }, []);

  // Font Size Change
  const handleFontSizeChange = (val: number) => {
    if (val < 100 || val > 200) return;
    const newMultiplier = val / 100;
    setFontSizeMultiplier(newMultiplier);
    localStorage.setItem(
      "fontSizeMultiplier",
      (newMultiplier * 100).toString()
    );
    setIsLoading(true);
    document.documentElement.style.fontSize = `calc(1em * ${newMultiplier})`;
    setIsLoading(false);
    setIsLoadingSettings(false);
  };

  // Styles for the font size slider
  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<MdSettings />}
        color={"white"}
        width={"fit-content"}
        background={"#3a3053"}
      />
      <MenuList textColor={"black"}>
        <MenuPopup
          icon={<MdLanguage />}
          iconMessage={t("settings.language.value")}
          title={t("settings.language.value")}
          body={
            <ModalBody>
              <LocalSwitcher />
            </ModalBody>
          }
        />
        <MenuPopup
          icon={<AiOutlineFontSize />}
          iconMessage={t("settings.font-size")}
          title={t("settings.font-size")}
          body={
            <ModalBody>
              <Slider
                aria-label="font-size-slider"
                min={100}
                max={200}
                onChange={(value) => handleFontSizeChange(value)}
                value={fontSizeMultiplier * 100}
              >
                <SliderMark value={125} {...labelStyles}>
                  125%
                </SliderMark>
                <SliderMark value={150} {...labelStyles}>
                  150%
                </SliderMark>
                <SliderMark value={175} {...labelStyles}>
                  175%
                </SliderMark>
                <SliderMark
                  value={fontSizeMultiplier * 100}
                  textAlign="center"
                  bg="purple"
                  color="white"
                  mt="-10"
                  ml="-5"
                  w="12"
                >
                  {Math.ceil(fontSizeMultiplier * 100)}%
                </SliderMark>
                <SliderTrack>
                  <SliderFilledTrack bg="purple" />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </ModalBody>
          }
        />
        <TTS icon={<MdSpeaker />} iconMessage={t("settings.read-page.value")}>
          {document.documentElement.innerText}
        </TTS>
      </MenuList>
    </Menu>
  );
};

export default SettingsMenu;
