"use client";
import {
  IconButton,
  ModalBody,
  Button,
  MenuItem,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { MdLanguage } from "react-icons/md";
import LocalSwitcher from "./local-switcher";
import { useTranslations } from "next-intl";

const SettingsMenu = () => {
  const t = useTranslations("Header");
  const tMenu = useTranslations("Buttons");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>{t("settings.language.value")}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <LocalSwitcher />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>{tMenu("close")}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <IconButton
        icon={<MdLanguage />}
        backgroundColor={"purple.600"}
        color="white"
        className="w-min h-min"
        title={t("settings.language.value")}
        aria-label="Language settings"
        onClick={onOpen}
      />
    </>
  );
};

export default SettingsMenu;
