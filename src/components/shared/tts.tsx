"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  MenuItem,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useTts } from "tts-react";
import type { TTSHookProps } from "tts-react";

interface CustomProps extends TTSHookProps {
  highlight?: boolean;
  icon: any;
  iconMessage: string;
}

const TTS = ({
  children,
  icon,
  iconMessage,
  highlight = true,
}: CustomProps) => {
  const t = useTranslations("TTS");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { ttsChildren, state, play, stop, pause } = useTts({
    children,
    markTextAsSpoken: highlight,
  });

  return (
    <>
      <MenuItem icon={icon} onClick={onOpen}>
        {iconMessage}
      </MenuItem>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t("title")}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{ttsChildren}</ModalBody>

          <ModalFooter className="flex flex-row gap-1">
            <div className="flex flex-row gap-1">
              <Button disabled={state.isPlaying} onClick={play}>
                {t("play")}
              </Button>
              <Button disabled={!state.isPlaying} onClick={pause}>
                {t("pause")}
              </Button>
              <Button onClick={stop}>{t("stop")}</Button>
            </div>
            <Button
              className="w-fit"
              colorScheme="blue"
              mr={3}
              onClick={onClose}
            >
              {t("close")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TTS;
