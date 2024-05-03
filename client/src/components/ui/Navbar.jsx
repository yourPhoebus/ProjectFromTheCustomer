import React from 'react';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function BasicExample({ user, logoutHandler }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">{user ? `${user.name}` : 'Чайный пьяница'}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" style={{ margin: '10px' }} to="/">Home</NavLink>
            { user ? (
              <>
                {user.role === 'Admin' ? (
                  <>
                    <NavLink className="nav-link" style={{ margin: '10px' }} to="/adminpage">Кабинет Админа</NavLink>
                    <Button style={{ margin: 10 }} onClick={logoutHandler}>Выйти</Button>
                  </>
                )
                  : (
                    <>
                      <NavLink className="nav-link" style={{ margin: '10px' }} to="/userpage">Личный Кабинет</NavLink>
                      <Button onClick={logoutHandler}>Выйти</Button>
                    </>
                  )}
                {/* <NavLink style={{ margin: '10px' }} to="/adminpage">Admin</NavLink> */}
              </>
            ) : (
              <>
                <NavLink className="nav-link" style={{ margin: '10px' }} to="/signup">Зарегистрироватся</NavLink>
                <NavLink className="nav-link" style={{ margin: '10px' }} to="/login">Войти</NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default BasicExample;
