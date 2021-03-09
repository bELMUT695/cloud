import React, { Component } from 'react';
import './styles/BadgeNew.css';
import './styles/App.css';
import SolicitudLogin from '../Components/SolicitudLogin';
import swal from 'sweetalert';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8000/core/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        });
        
        if(this.state.logged_in){
         
            swal({
                title: "Inicio de sesion exitosa",
                button: "Aceptar",
                timer:"100000"
              });
          document.location.assign('/Info/Solicitud')
          
          
        }
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/core/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in:true,
          displayed_form: '',
          username: json.username
        });
        
      });
     
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
   
     
   

    return (
      
      <div  className="box1">
       
      <div className="NaVertical">
       
     <div className="container-fluid">
       <div className="row">
       
        <SolicitudLogin handle_login={this.handle_login} />
  
       
       
       
       </div> 
      
     </div> 
     </div>
     </div>
        
    );
    
  }
}

export default App;