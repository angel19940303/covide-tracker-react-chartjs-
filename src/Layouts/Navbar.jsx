import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import logo from '../Assets/images/logo.svg';

const NavComp = () => {
  return (
    <div>
      <Navbar className='Navbar' variant='light' expand='lg' sticky='top'>
        <Container>
          <OverlayTrigger
            placement='bottom'
            delay={{ show: 150, hide: 150 }}
            overlay={<Tooltip className='myToolTip'>COVID-19 Tracker</Tooltip>}>
            <Navbar.Brand className='titleContiner'>
              <img src={logo} alt='logo' className='logo' />
              <p className='title'>COVID-19 Tracker</p>
            </Navbar.Brand>
          </OverlayTrigger>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto justify-content-end navWidth'>
              <OverlayTrigger
                placement='bottom'
                delay={{ show: 150, hide: 150 }}
                overlay={
                  <Tooltip className='myToolTip'>Github Repositorie</Tooltip>
                }>
                <Nav.Link
                  href='https://github.com/MedElBoudali/Coronavirus-Update'
                  target='_blank'>
                  <i className='fab fa-github navIcons'></i>
                  {window.innerWidth < 992 && (
                    <span className='navIconsSpan'>Github Repositorie</span>
                  )}
                </Nav.Link>
              </OverlayTrigger>

              <OverlayTrigger
                placement='bottom'
                delay={{ show: 150, hide: 150 }}
                overlay={
                  <Tooltip className='myToolTip'>
                    World Health Organization
                  </Tooltip>
                }>
                <Nav.Link href='https://www.who.int/' target='_blank'>
                  <i className='fas fa-laptop-medical navIcons'></i>
                  {window.innerWidth < 992 && (
                    <span className='navIconsSpan'>
                      World Health Organization
                    </span>
                  )}
                </Nav.Link>
              </OverlayTrigger>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavComp;
