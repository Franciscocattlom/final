import React from "react";
import { Link } from "react-router-dom";
import logo from '../imagenes/Logo_La_Cinestacion.png';
import './menu.css'
import { DropdownButton, Dropdown } from 'react-bootstrap';

export const Menu = () => {
    
    const logoStyles = {
        width: '100px',
        heigth: 'auto'

    };


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
                <img src={logo} alt="Logo" style={logoStyles} />
            </Link>
            <DropdownButton id="dropdown-basic-button" title="Clickeame">
      <Dropdown.Item ><Link to={"/Peliculas"} className="nav-link">
                            Peliculas
                        </Link></Dropdown.Item>
      <Dropdown.Item ><Link to={"/Recomendados"} className="nav-link">
                            Recomendados
                        </Link></Dropdown.Item>
      <Dropdown.Item ><Link to={"/Login"} className="nav-link">
                            Iniciar Sesion
                        </Link></Dropdown.Item>
        <Dropdown.Item><Link to={"/Register"} className="nav-link">
                            Registrarse
                        </Link></Dropdown.Item>
    
    </DropdownButton>
           
                
                    
        </nav>
  );
};
export default Menu;