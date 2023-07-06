import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { logoutUserAsync, reset } from './../redux/slice/userSlice';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(
    (state) => state.user
  );
  function onLogout() {
    dispatch(logoutUserAsync())

    dispatch(reset())
    navigate("/")
  }
  return (
    <Navbar expand="lg" className="lh-lg position-sticky top-0 bg-light  " style={{ zIndex: 500 }}>
      <Container>
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
            {
              (user) ? (


                <Nav.Link>
                  <Link
                    to={"/logout"}
                    className="btn btn-success btn-rounded button"
                    onClick={onLogout}
                  >
                    Logout
                  </Link>

                </Nav.Link>
              ) : (

                <Nav.Link >
                  <Link
                    to={"/login"}
                    className="btn btn-success btn-rounded button"
                  >
                    login

                  </Link>
                </Nav.Link>
              )
            }

<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul className="dropdown-menu">
    <li><button className="dropdown-item" type="button">Action</button></li>
    <li><button className="dropdown-item" type="button">Another action</button></li>
    <li><button className="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
