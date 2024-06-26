import React from 'react';
import { Navbar, Nav, Container, NavbarBrand, NavbarToggle } from 'react-bootstrap';
import { usePathname } from 'next/navigation';
import LanguageMenu from '../header/lang-menu';
import { useTranslations, useLocale } from 'next-intl';

export default function Header() {
  const t = useTranslations('Header.admin-nav');
  const locale = useLocale();
  const [basicNavbarNavExpanded, setBasicNavbarNavExpanded] = React.useState(false);
  const path = usePathname();

  const handleToggle = () => {
    setBasicNavbarNavExpanded((prevExpanded) => !prevExpanded);
  };

  const isActive = (p: string) => {
    return path.startsWith(p);
  };

  return (
    <Navbar
      sticky="top"
      expand="lg"
      style={{ padding: '15px 25px' }}
      className="bg-main-foreground d-flex justify-content-between"
    >
      <Container fluid>
        <NavbarBrand href={`/${locale}/admin/applications`} className="text-white font-bold hover:text-purple-950">
          NexaDB
        </NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto gap-2">
          <Nav.Link
              href={`/${locale}/admin/applications`}
            >
              <p       className={isActive(`/${locale}/admin/applications`) ? 'active-nav m-0' : 'deactive-nav m-0'}
        style={{ color: 'white', margin: 0 }}>{t('applications')}</p>
            </Nav.Link>
            <Nav.Link
              href={`/${locale}/admin/positions`}
            >
              <p       className={isActive(`/${locale}/admin/positions`) ? 'active-nav m-0' : 'deactive-nav m-0'}
        style={{ color: 'white', margin: 0 }}>{t('positions')}</p>
            </Nav.Link>
            <Nav.Link
              href={`/${locale}/admin/inquiries`}
            >
              <p       className={isActive(`/${locale}/admin/inquiries`) ? 'active-nav m-0' : 'deactive-nav m-0'}
        style={{ color: 'white', margin: 0 }}>{t('inquiries')}</p>
            </Nav.Link>
            <LanguageMenu />
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
