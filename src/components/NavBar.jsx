import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">Constanza Victoria</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/category/pijama">Pijamas</Nav.Link>
            <Nav.Link as={NavLink} to="/category/conjunto">Conjuntos</Nav.Link>
            </Nav>
            <CartWidget />
            </Container>
      </Navbar>
    </>
  );
};
