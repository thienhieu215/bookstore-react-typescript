import React from 'react';
import style from './NavBar.module.scss'
import { TStore } from "./../../store/store";
import { useSelector } from "react-redux";
import { Container, Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import SearchBar from '../SearcBar/SearchBar';

const NavigationBar = () => {

  const numbItems: number = useSelector((state: TStore) => state.cartReducer.numbOfItems);

  return (

    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" style={{ marginBottom: 20 }}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="/">Book Store</Navbar.Brand>
        <Col xs={6} lg={6}>
          <SearchBar />
        </Col>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/newbooks">New Books</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/cart">Cart ({numbItems})</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
