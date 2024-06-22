"use client";
import React, { useEffect, useState } from "react";
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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isActive = (href: string) =>
    path === href || (path.includes("careers") && href.includes("careers"));

  return (
    <Navbar
      sticky="top"
      expand="lg"
      style={{ padding: "15px 25px" }}
      className="bg-main-foreground"
    >
      <Container
        fluid
        className="d-flex align-items-center justify-content-between"
      >
        <NavbarBrand
          href={`/${locale}`}
          className="text-white font-bold hover:text-purple-950"
        >
          NexaDB
        </NavbarBrand>
        <NavbarToggle className="bg-white" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2 flex items-center md:items-start">
            <Nav.Link href={`/${locale}`} className="d-flex align-items-center">
              <p
                className={
                  isActive(`/${locale}`) ? "active-nav m-0" : "deactive-nav m-0"
                }
              >
                {t("user-nav.home")}
              </p>
            </Nav.Link>
            <Nav.Link
              href={`/${locale}/database`}
              className="d-flex align-items-center"
            >
              <p
                className={
                  isActive(`/${locale}/database`)
                    ? "active-nav m-0"
                    : "deactive-nav m-0"
                }
              >
                {t("user-nav.database")}
              </p>
            </Nav.Link>
            <NavDropdown
              title={
                <span
                  className={
                    isActive(`/${locale}/careers`)
                      ? "active-nav m-0"
                      : "deactive-nav m-0"
                  }
                >
                  {t("user-nav.careers")}
                </span>
              }
              id="basic-nav-dropdown"
              className="d-flex align-items-center flex-col"
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

            <Nav.Link
              href={`/${locale}/contact`}
              className="d-flex align-items-center"
            >
              <p
                className={
                  isActive(`/${locale}/contact`)
                    ? "active-nav m-0"
                    : "deactive-nav m-0"
                }
              >
                {t("user-nav.contact")}
              </p>
            </Nav.Link>
            <SettingsMenu />
            {isClient &&
              typeof window !== "undefined" &&
              localStorage !== undefined && <Accessibilik />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
