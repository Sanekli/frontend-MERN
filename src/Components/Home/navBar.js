import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CurrentUser } from "../../Redux/Actions/actions";
import { LOGOUT } from "../../Redux/Consts/action-type";

function NavBar() {
  const navigate = useNavigate();
  // const [user, setUser] = useState(null);
  // const token = useSelector(state => state.Reducers.SignInUsers.token)
  // const user = useSelector(state => state.Reducers.GetUser.user)
  const token = localStorage.getItem("token")
  const user = JSON.parse(localStorage.getItem("current_user")) || {}
  console.log(user.role);
  const dispatch = useDispatch()

  // useEffect(() => {
  //   const storedUser = JSON.parse(localStorage.getItem("current_user"));
  //   setUser(storedUser);
  // }, [user]);

  const logout = () => {
    localStorage.clear();
    dispatch({
      type: LOGOUT
    })
    // setUser(null);
    navigate("/");
  };

  return (
    <div>
      <Navbar bg="black" variant="dark">
        <Container className="navbar">
          <Navbar.Brand className="navbarLogo">IMMO SANEKLI </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/AboutUs">
              AboutUs
            </Nav.Link>
            <Nav.Link as={Link} to="/Product">
              Our service
            </Nav.Link>
            {user.role === "admin" && (
              <Nav.Link as={Link} to="/listNewReservation">
                Reservations
              </Nav.Link>
            )}
            {token ? (
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/Login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
