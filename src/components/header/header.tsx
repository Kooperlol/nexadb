"use client";
import React from "react";
import {
  NavDropdown,
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  NavbarToggle,
} from "react-bootstrap";
import SettingsMenu from "./lang-menu";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Accessibilik from "accessibility-react-widget";

export default function Header() {
  const locale = useLocale();
  const t = useTranslations("Header");
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
        <NavbarToggle className="bg-white" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2">
            <Nav.Link className="text-white hover:text-purple-950" href="/">
              {t("user-nav.home")}
            </Nav.Link>
            <Nav.Link
              className="text-white hover:text-purple-950"
              href={`/${locale}/database`}
            >
              {t("user-nav.database")}
            </Nav.Link>
            <NavDropdown
              title={
                <span className="text-white">{t("user-nav.careers")}</span>
              }
              id="basic-nav-dropdown"
              className="text-white hover:text-purple-950"
            >
              <NavDropdown.Item href={`/${locale}/careers`}>
                {t("user-nav.about-us")}
              </NavDropdown.Item>
              <NavDropdown.Item href={`/${locale}/careers/benefits`}>
                {t("user-nav.benefits")}
              </NavDropdown.Item>
              <NavDropdown.Item href={`/${locale}/careers/search`}>
                {t("user-nav.positions")}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href={`/${locale}/contact`} className="text-white">
              {t("user-nav.contact")}
            </Nav.Link>
            <SettingsMenu />
            <Accessibilik />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
