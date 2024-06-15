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
import { usePathname } from "next/navigation";

export default function Header() {
  const locale = useLocale();
  const t = useTranslations("Header");
  const path = usePathname();
  const isActive = (href: string) => path === href || (path.includes("careers") && href.includes("careers"));
  return (
    <Navbar
      sticky="top"
      expand="lg"
      style={{ padding: "15px 25px" }}
      className="bg-main-foreground d-flex justify-content-between"
    >
      <Container fluid>
        <NavbarBrand
          href={`/${locale}`}
          className="text-white font-bold hover:text-purple-950"
        >
          NexaDB
        </NavbarBrand>
        <NavbarToggle className="bg-white" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2">
            <Nav.Link
              href={`/${locale}`}
            >
              <p className={isActive(`/${locale}`) ? "active-nav" : "deactive-nav"}>
              {t("user-nav.home")}
              </p>
            </Nav.Link>
            <Nav.Link
              href={`/${locale}/database`}
            >
              <p className={isActive(`/${locale}/database`) ? "active-nav" : "deactive-nav"}>
                {t("user-nav.database")}
              </p>
            </Nav.Link>
            <NavDropdown
              title={
                <span className={isActive(`/${locale}/careers`) ? "active-nav" : "deactive-nav"}>
                  {t("user-nav.careers")}
                </span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                href={`/${locale}/careers`}
              >
                  {t("user-nav.about-us")}
              </NavDropdown.Item>
              <NavDropdown.Item
                href={`/${locale}/careers/benefits`}
              >
                {t("user-nav.benefits")}
              </NavDropdown.Item>
              <NavDropdown.Item
                href={`/${locale}/careers/search`}
              >
                {t("user-nav.positions")}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href={`/${locale}/contact`}
            >
              <p className={isActive(`/${locale}/contact`) ? "active-nav" : "deactive-nav"}>
                {t("user-nav.contact")}
              </p>
            </Nav.Link>
            <SettingsMenu />
            <Accessibilik />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
