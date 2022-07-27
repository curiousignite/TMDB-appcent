import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar navbar-light mb-5">
        <div className="container">
          <Navbar.Brand href="/">
            <img
              src="/logo.svg"
              width="100%"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}
