import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar expand="lg" className="lh-lg">
      <Container className="custom_container">
        <Navbar.Brand as={Link} to="/" style={{ color: "#3F464C" }}>
          <strong>innerIsland</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto  align-items-center">
            <Nav.Link as={Link} to="/" style={{ marginRight: "30px" }}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/meditation"
              style={{ marginRight: "30px" }}
            >
              Meditation
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ marginRight: "30px" }}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              <Link>
                <button
                  type="button"
                  className="btn btn-success btn-rounded  "
                  style={{
                    padding: "10px 25px",
                    backgroundColor: "RGB(20, 152, 92)",
                  }}
                >
                 Login
                </button>
              </Link>
            </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
