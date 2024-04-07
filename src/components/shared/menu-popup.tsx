import {
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
import { JSXElementConstructor, ReactElement } from "react";
import { useTranslations } from "next-intl";

interface MenuPopupProps {
  icon: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  iconMessage: string;
  title: string;
  body: React.ReactNode;
}

export const MenuPopup: React.FC<MenuPopupProps> = ({
  icon,
  iconMessage,
  title,
  body,
}: MenuPopupProps) => {
  const t = useTranslations("Buttons");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <MenuItem icon={icon} onClick={onOpen}>
        {iconMessage}
      </MenuItem>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          {body}
          <ModalFooter>
            <Button onClick={onClose}>{t("close")}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
