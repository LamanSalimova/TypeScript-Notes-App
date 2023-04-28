import * as React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./header.css";

const Header: React.FunctionComponent = () => {
  return (
    <header>
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="navbarBrand">Notes</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
