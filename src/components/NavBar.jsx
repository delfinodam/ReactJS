import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Constanza Victoria</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Pijamas</Nav.Link>
            <Nav.Link href="#features">Lencería</Nav.Link>
            <Nav.Link href="#pricing">Conjuntos</Nav.Link>
            </Nav>
            <CartWidget />
            </Container>
      </Navbar>
    </>
  );
};
