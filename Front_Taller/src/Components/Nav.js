import React from 'react';
import PropTypes from 'prop-types';
import './styles/BadgesList.css';
import {faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  Button,
  Container,
 
} from "reactstrap";
function Nav(props) {
  const logged_out_nav = (
   
      <Button onClick={() => props.display_form('login')}
       className="list-group-item list-group-item-action "color="btn btn-primary" >Iniciar Sesión  </Button>
      
    
  );
  return <div>{logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};
