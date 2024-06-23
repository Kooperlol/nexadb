"use client";
import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  NavbarToggle,
} from "react-bootstrap";
import LanguageMenu from "../header/lang-menu";
import { useTranslations, useLocale } from "next-intl";

export default function Header() {
  const t = useTranslations("Header.admin-nav");
  const locale = useLocale();
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
      className="bg-main-foreground d-flex justify-content-between"
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
              href={`/${locale}/admin/applications`}
            >
              {t("applications")}
            </Nav.Link>
            <Nav.Link
              className="text-white hover:text-purple-950"
              href={`/${locale}/admin/positions`}
            >
              {t("positions")}
            </Nav.Link>
            <Nav.Link
              href={`/${locale}/admin/inquiries`}
              className="text-white"
            >
              {t("inquiries")}
            </Nav.Link>
            <LanguageMenu />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
