import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../context/AuthContext";

const Index = () => {
  const navigate = useNavigate();
  const { user, logout } = Auth();

  function handleLinkRedirect(e: React.FormEvent, path: string) {
    e.preventDefault();
    navigate(path);
  }

  function handleClickLogout(e: React.FormEvent, path: string) {
    e.preventDefault();
    logout();
    navigate(path);
  }
  return (
    <Navbar
      expand="xxl"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary"
    >
      <Container fluid>
        <Navbar.Brand onClick={(e) => handleLinkRedirect(e, "/")}>
          Task Manager
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link onClick={(e) => handleLinkRedirect(e, "/")}>
              Inicio
            </Nav.Link>
            <Nav.Link onClick={(e) => handleLinkRedirect(e, "/dashboard")}>
              Dashboard
            </Nav.Link>
          </Nav>
          <Nav className="d-flex">
            {!user && (
              <Nav.Link onClick={(e) => handleLinkRedirect(e, "/registrar-se")}>
                Registrar-se
              </Nav.Link>
            )}

            {!user && (
              <Nav.Link onClick={(e) => handleLinkRedirect(e, "/entrar")}>
                Entrar
              </Nav.Link>
            )}
            {user && (
              <Nav.Link onClick={(e) => handleClickLogout(e, "/")}>
                Sair
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Index;
