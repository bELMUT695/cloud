import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";


import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
 
} from './NavbarElements';

class Navbar extends React.Component{
    render(){
        return(
          <div className="borde1">
          <Nav >
            <NavLink to='/' activeClassName="logo1">
            <img className="lo" src={'https://fisiinteligenciaartificial.files.wordpress.com/2018/03/cropped-1200px-escudo_facultad_de_ingenierc3ada_de_sistemas_e_informc3a1tica_de_la_unmsm-svg.png?w=200'} alt='logo' />
            </NavLink>
            <NavMenu activeClassName="nav-two">
              <NavLink to='/Home' activeStyle>
               <div>
                
                <FontAwesomeIcon icon={faHome} />
                Visualizar Aulas
               </div>
              
              </NavLink>
              <NavLink to='/Reservar' activeStyle>
                Gestionar Aulas
              </NavLink>
              <NavLink to='/Info' activeStyle>
              <FontAwesomeIcon icon={ faLocationArrow} />
                Enviar solicitud
              </NavLink>
              <NavLink to='/InfoGraf' activeStyle>
              <FontAwesomeIcon icon={ faLocationArrow} />
                Enviar observación
              </NavLink>
              
              {/* Second Nav */}
              {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
            </NavMenu>
          </Nav>
        </div>
        );
         
        
    }
}

export default Navbar;