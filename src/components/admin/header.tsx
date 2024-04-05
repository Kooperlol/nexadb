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
            <Nav.Link
              className="text-white hover:text-purple-950"
              href="/admin/applications"
            >
              Applications
            </Nav.Link>
            <Nav.Link
              className="text-white hover:text-purple-950"
              href="/admin/positions"
            >
              Positions
            </Nav.Link>
            <Nav.Link href="/admin/inquiries" className="text-white">
              Inquiries
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
