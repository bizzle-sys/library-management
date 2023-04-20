import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { GiArchiveRegister } from "react-icons/gi";
import { SlLogin } from "react-icons/sl";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "firebase/auth";
import { auth } from "../../Config/Firebase-config/firebase-config";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export const Header = () => {
  const { user } = useSelector((state) => state.user);
  const handleOnLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => toast.error(error.message));
  };
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand>
          <Link to="/">LM </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Link className="nav-link" to="/signin">
              <SlLogin className="fs-1" /> Sign In
            </Link>
            <Link className="nav-link" to="/signup">
              <GiArchiveRegister className="fs-1" /> Sign Up
            </Link>
            <Link to="#" className="nav-link" onClick={handleOnLogout}>
              <BiLogOut className="fs-1" /> Sign Out
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
