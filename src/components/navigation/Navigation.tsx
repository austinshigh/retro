import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "./Navigation.css"

function BasicExample() {
  return (
    <Navbar expand="sm" className="nav-bar-width">
      <Container>
        <Navbar.Brand href="/">Austin High</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/hangman">Play Hangman!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BasicExample
