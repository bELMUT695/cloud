import React from 'react';

import {
  
    FormGroup,
   
  } from "reactstrap";
 
 
class Editar1 extends React.Component{
  render(){
    return (<>
        <FormGroup>
        <label>
         Escuela:
        </label>
      
        <input
          className="form-control"
          name="escuela"
          type="text"
          onChange={this.props.onChange}
          value={this.props.formValues2.escuela}
        />
      </FormGroup> 
      <FormGroup>
        <label>
         Nombre del Curso:
        </label>
      
        <input
          className="form-control"
          name="nombres"
          type="text"
          onChange={this.props.onChange}
          value={this.props.formValues2.nombres}
        />
      </FormGroup>
      <FormGroup>
        <label>
         Docente:
        </label>
      
        <input
          className="form-control"
          name="nombre"
          type="text"
          onChange={this.props.onChange}
          value={this.props.formValues4.nombre}
        />
      </FormGroup>
      <FormGroup>
        <label>
         Apellidos:
        </label>
      
        <input
          className="form-control"
          name="apellido"
          type="text"
          onChange={this.props.onChange}
          value={this.props.formValues4.apellido}
        />
      </FormGroup>
      <FormGroup>
        <label>
         Dia:
        </label>
      
        <input
          className="form-control"
          name="dia"
          type="text"
          onChange={this.props.onChange}
          value={this.props.formValues.dia}
        />
      </FormGroup>
      <FormGroup>
        <label>
         Hora Inicio:
        </label>
      
        <input
          className="form-control"
          name="hora_inicia"
          type="time"
          max="22:30:00"
           min="10:00:00" 
           step="1"
          onChange={this.props.onChange}
          value={this.props.formValues.hora_inicia}
        />
      </FormGroup>
     
      <FormGroup>
        <label>
         Hora Fin:
        </label>
      
        <input
          className="form-control"
          name="hora_fin"
          type="time"
          max="22:30:00"
           min="10:00:00" 
           step="1"
          onChange={this.props.onChange}
          value={this.props.formValues.hora_fin}
        />
      </FormGroup>
      </>  
     


         

          
    )
    
  }
}

export default Editar1;