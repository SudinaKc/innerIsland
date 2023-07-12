import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { logoutUserAsync, reset } from './../redux/slice/userSlice';
import { Logo } from "./LogoSvg";
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
    <Navbar expand="lg" className="lh-lg position-sticky top-0 bg-light  " style={{ zIndex: 500, boxShadow: "0px 10px 8px -15px #111" }}>
      <Container >
        <Navbar.Brand as={Link} to="/" style={{ color: "#3F464C" }}>
          {/* <strong>innerIsland</strong> */}


{/* logo */}
          {
            Logo
          }

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto  align-items-center">
            <Nav.Link as={Link} to="/" style={{ marginRight: "30px" }}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/experts"
              style={{ marginRight: "30px" }}
            >
              Psychologists
            </Nav.Link>
            <Nav.Link as={Link} to="/appointments" style={{ marginRight: "30px" }}>
              Appointments
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


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;



