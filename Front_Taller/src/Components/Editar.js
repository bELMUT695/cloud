import React from 'react';

import {
  
    //ModalBody,
    FormGroup,
   
  } from "reactstrap";
 
class Editar extends React.Component{
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
          readOnly
          value={this.props.formValues.id_grupo.id_curso.escuela}
        />
      </FormGroup>
      <FormGroup>
        <label>
         Nombre del Curso:
        </label>
      
        <input
          className="form-control"
          name="Nombre"
          type="text"
          readOnly
          onChange={this.props.onChange}
          value={this.props.formValues.id_grupo.id_curso.nombre}
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
          readOnly
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
          name="hora_inicio"
          type="time"
          readOnly
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
           readOnly
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

export default Editar;