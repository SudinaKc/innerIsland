

import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'react-dropdown/style.css';
import { IoIosLogOut } from "react-icons/io";
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
  console.log(user)

  return (

    <Navbar expand="lg" className="lh-lg position-sticky top-0 bg-light" style={{ zIndex: 500, boxShadow: "0px 10px 8px -15px #111" }}>
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: "#3F464C" }}>
          {Logo}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" style={{ marginRight: "30px" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/experts" style={{ marginRight: "30px" }}>
              Psychologists
            </Nav.Link>
            <Nav.Link as={Link} to="/appointments" style={{ marginRight: "30px" }}>
              Appointments
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ marginRight: "30px" }}>
              About
            </Nav.Link>
            {user ? (
              <Nav.Link>
                {/* <button
                  className="btn btn-success btn-rounded button"
                  onClick={onLogout}
                >
                  Logout
                </button> */}
              </Nav.Link>
            ) : (
              <Nav.Link>
                <Link
                  to="/login"
                  className="btn btn-success btn-rounded button"
                >
                  Login
                </Link>
              </Nav.Link>
            )}
            {user && (
              <div className="user-image">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="transparent"
                    id="user-dropdown"
                    style={{
                      outline: "none",
                      boxShadow: "none",
                      border: "none", // Remove border as well
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={user.user.image}
                      alt=""
                      className="rounded-circle"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                      }}
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="mt-1">
                    <Dropdown.Item>
                      <Link
                        to={"/profile"}
                        className="text-decoration-none"
                      >
                        <div className="text-black ">

                          Profile
                        </div>
                      </Link>

                    </Dropdown.Item>
                    <Dropdown.Item >
                      <div onClick={onLogout} className="d-flex gap-2 align-items-center">
                        Logout
                        <IoIosLogOut className="text-success fw-bolder" />
                      </div>

                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default Header;


