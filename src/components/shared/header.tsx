"use client";
import React, { JSXElementConstructor, ReactElement, useState } from "react";
import { AiOutlineFontSize, AiFillSound } from "react-icons/ai";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { MdLanguage, MdSettings } from "react-icons/md";
import {
  NavDropdown,
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  NavbarToggle,
} from "react-bootstrap";

export default function Header() {
  const [basicNavbarNavExpanded, setBasicNavbarNavExpanded] =
    React.useState(false);

  const handleToggle = () => {
    setBasicNavbarNavExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Navbar
      sticky="top"
      expand="lg"
      style={{ padding: "15px 25px" }}
      className="bg-main-foreground d-flex justify-content-between" // Align items horizontally
    >
      <Container fluid>
        <NavbarBrand
          href="/"
          className="text-white font-bold hover:text-purple-950"
        >
          NexaDB
        </NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2">
            <Nav.Link className="text-white hover:text-purple-950" href="/">
              Home
            </Nav.Link>
            <Nav.Link
              className="text-white hover:text-purple-950"
              href="/database"
            >
              Database
            </Nav.Link>
            <NavDropdown
              title={<span className="text-white">Careers</span>}
              id="basic-nav-dropdown"
              className="text-white hover:text-purple-950"
            >
              <NavDropdown.Item href="/careers">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/careers/benefits">
                Benefits
              </NavDropdown.Item>
              <NavDropdown.Item href="/careers/search">
                Positions
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact" className="text-white">
              Contact
            </Nav.Link>
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
                  iconMessage="Language"
                  title="Language"
                  body={<ModalBody>Language</ModalBody>}
                />
                <MenuItem icon={<AiOutlineFontSize />}>Font Size</MenuItem>
                <MenuItem icon={<AiFillSound />}>Read Page </MenuItem>
              </MenuList>
            </Menu>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

interface MenuPopupProps {
  icon: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  iconMessage: string;
  title: string;
  body: React.ReactNode;
}

const MenuPopup: React.FC<MenuPopupProps> = ({
  icon,
  iconMessage,
  title,
  body,
}: MenuPopupProps) => {
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
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
