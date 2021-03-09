import PropTypes from 'prop-types';
import React from 'react';
import "./styles/App.css";
import './styles/Navbar.css'
class SolicitudLogin extends React.Component{
  state = {
    username: '',
    password: '',
  };
  
  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

    render(){
        
        return(
            <>
          
      
          
          <div className="wrapper" > 
          <br ></br> 
          <br ></br> 
          <br ></br> 
          
          
          <div className="form-wrapper" > 
          
         
            <form className='form' onSubmit={e => this.props.handle_login(e, this.state)}>
            <div className='form-group'> 
            <div>
            <h1 className="text-light">Iniciar Sesión</h1> 
            </div>     
                <label >
                  <strong className="text-light bg-dark">Correo</strong>
                  <input
                   className="form-control"
                   type="text"
                   name="username"
                   placeholder='Ingresar usuario'
                   value={this.state.username}
                   onChange={this.handle_change}
                />
                </label>
            </div> 
            <div className='form-group'>  
                <label className='pass'>
                  <strong className="text-light bg-dark">Codigo</strong>
                  <input
                   className="form-control"
                   type="password"
                   name="password"
                   placeholder='Ingresar contraseña'
                   value={this.state.password}
                   onChange={this.handle_change}
                  />
                </label>
            </div> 
            <div class="col text-center">

            <button className="btn btn-primary">Iniciar sesión</button>
            </div>
           
          </form>
          </div> 
          
      
         </div> 
         </>
        )
        
}
}

export default SolicitudLogin;
SolicitudLogin.propTypes = {
  handle_login: PropTypes.func.isRequired
};