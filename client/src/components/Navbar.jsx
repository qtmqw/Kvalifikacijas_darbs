import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { Avatar } from "@material-tailwind/react";
import din from '../assets/din.png'
import { BsCart2 } from 'react-icons/bs'
import React, { useEffect, useState, useContext } from "react";
import { toast } from 'react-toastify';
import { logout } from '../api/lietotajs';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from "../UserContext";

const Navbarf = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault()

    logout()
      .then((res) => {
        toast.success(res.message)
        setUser(null)
        navigate("/")
      }).catch(err => console.log(err))
  }

  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);


  return (
    <Navbar className='w-full bg-white shadow-lg p-4 navbar' expand="lg">
      <Container className='max-w-full'>
        <Navbar.Brand href="/"><img src="abika.svg" className='max-w-[150px]'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="gap-2 p-2 m-auto justify-center">
            <Nav.Link href="/" className={(url === "/" ? " active text-black uppercase rounded-lg bg-gray-400" : "text-black uppercase rounded-lg hover:bg-gray-400 duration-500")}>Sākums</Nav.Link>
            <Nav.Link href="/Par_mums" className={(url === "/Par_mums" ? " active text-black uppercase rounded-lg bg-gray-400" : "text-black uppercase rounded-lg hover:bg-gray-400 duration-500")}>Par Mums</Nav.Link>
            <Nav.Link href="/Sortiments" className={(url === "/Sortiments" ? " active text-black uppercase rounded-lg bg-gray-400" : "text-black uppercase rounded-lg hover:bg-gray-400 duration-500")}>Sortiments</Nav.Link>
            <Nav.Link href="/Kontakti" className={(url === "/Kontakti" ? " active text-black uppercase rounded-lg bg-gray-400" : "text-black uppercase rounded-lg hover:bg-gray-400 duration-500")}>Kontakti</Nav.Link>
          </Nav>
          <Nav className="gap-2">

            <Dropdown>
              <Dropdown.Toggle className=' rounded-full bg-white border-white flex'><Avatar src={din} alt="avatar" className='w-10 h-10 rounded-full' /></Dropdown.Toggle>
              <Dropdown.Menu>
                {!user && <Dropdown.Item href="/Pieslegties">Pieslēgties</Dropdown.Item>}
                {!user && <Dropdown.Item href="/Registreties">Registreties</Dropdown.Item>}

                {user && <Dropdown.Item>{user && <span>{user}</span>}</Dropdown.Item>}
                {user && <Dropdown.Item href="/Profils">Profils</Dropdown.Item>}
                {user && <Dropdown.Divider />}
                {user && <Dropdown.Item onClick={handleLogout}>Izrakstīties</Dropdown.Item>}
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="/Grozs" className='p-2 lg:ml-2'><BsCart2 className='w-7 h-7 text-black' /></Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Navbarf
