import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import api from '../api';
import { withRouter } from 'react-router'
import './styles/estilo.css';
import './styles/Badges.css';
import RadioButton from "../Components/RadioButton";
import Insertar from '../Components/Insertar';
import Editar from '../Components/Editar';
import Editar1 from '../Components/Editar1';
import PageLoader from '../Components/PageLoading';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const url="http://localhost:8000/core/horario/";
class VistasDocente extends React.Component {
  
  state = {
    loading: true,
    error: null,
    data:undefined,
    dataP:undefined,
    contador:undefined,
    modalActualizar: false,
    modalActualizar1: false,
    modalInsertar: false,
    modalEliminar: false,
    busqueda: '',
    form: {
      id_horario: '',
      dia:'',
      hora_inicia: '',
      hora_fin: '',
      id_grupo: '',
      id_aula: '',
       },
    Docente: {
      id_docente: '',
      nombre: '',
      apellido:'',
    },
    Grupo:{
      id_grupo: '',
      numero: '',
      id_docente:'',
      id_curso: '',
     
    },
    curso: {
      id_curso: '',
      nombres:'',
      escuela: '',
    },
    aula: {
      id_aula: '',
      capacidad:'',
      estado: '',
    },
  };
  

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };
  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  handleChange = (e) => {
    this.setState({
      paymentMethod: "COD",
      forma: {
        ...this.state.forma,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleChange1 = (e) => {
    this.setState({
      paymentMethod: "COD",
     
      Docente: {
        ...this.state.Docente,
        [e.target.name]: e.target.value,
      },
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
      aula: {
        ...this.state.aula,
        [e.target.name]: e.target.value,
      },
      curso: {
        ...this.state.curso,
        [e.target.name]: e.target.value,
      },
      Grupo:{
        ...this.state.Grupo,
        [e.target.name]: e.target.value,
      },
    });
  };



  handleClick1 = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    this.setState({ modalActualizar: false });
    
    try {
      
      this.state.form.id_aula.estado= this.state.paymentMethod;
      //this.state.form.curso.nombre= "Algoritmo I";
     
      //this.state.form.curso=this.state.form;
     // console.log(this.state.forma);
     // await api.badges.update1(this.state.form.curso.id_curso, this.state.form.curso);
      await api.badges.update(this.state.form.id_aula.id_aula, this.state.form.id_aula);
      console.log(this.state.dataP);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleClick4 = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    this.setState({ modalActualizar1: false });

    try {
      console.log(this.state.Docente)
      await api.badges.update3(this.state.Docente.id_docente, this.state.Docente);
      await api.badges.update(this.state.aula.id_aula, this.state.aula);
      await api.badges.update1(this.state.form.id_horario, this.state.form);
      await api.badges.update2(this.state.curso.id_curso, this.state.curso);
      await api.badges.update4(this.state.Grupo.id_grupo, this.state.Grupo);
      
      const data=await api.badges.list();
      
      this.setState({loading:false,dataP:data})
      
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };




  handleClick3 = () => {  
        axios.delete(url+this.state.form.id_horario).then(response=>{
        this.setState({ loading: false, error: null });
        this.setState({ modalEliminar: false });
        this.fetchData();
      })  
    } 
  ;
  
  
  


	radioChangeHandler = (event) => {

		this.setState({
			paymentMethod: event.target.value
		});
	}
  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };
  cerrarEliminar = () => {
    this.setState({ modalEliminar: false });
  };
  cerrarModalActualizar1 = () => {
    this.setState({ modalActualizar1: false });
  };

  mostrarModalEliminar = (dato) => {
    this.setState({
      
      form: dato,
      curso:dato.id_grupo.id_curso,
      Docente:dato.id_grupo.id_docente,
      aula:dato.id_aula,
    
      modalEliminar: true,
    });
     
  };
  
  mostrarModalActualizar = (dato) => {
    this.setState({
      
      form: dato,
      forma:dato,
      modalActualizar: true,
    });
   
  };
  mostrarModalActualizar1 = (dato) => {
    this.setState({
      
      form: dato,
      curso:dato.id_grupo.id_curso,
      Docente:dato.id_grupo.id_docente,
      aula:dato.id_aula,
      Grupo:dato.id_grupo,
    
      modalActualizar1: true,
    });
   
  };
  editar = () => {
  
    this.setState({ modalActualizar: false });
  };

  editar = () => {
  
    this.setState({ modalActualizar1: false });
  };


  


  
  onChange1=async e=>{
    e.persist();
    await this.setState({busqueda: e.target.value});
    this.filtrarElementos();
  }


  filtrarElementos=()=>{
     var search=this.state.data.filter(item => {
      if(item.id_aula.id_aula.toString().includes(this.state.busqueda)||
        item.id_aula.estado.toString().includes(this.state.busqueda)
        ){
        return item;
      }
      if( item.id_grupo.id_docente.nombre !=null) {
          if(item.id_grupo.id_docente.nombre.toString().includes(this.state.busqueda)){
            return item;
          }
      }
      if( item.id_grupo.id_curso.nombres !=null) {
        if(item.id_grupo.id_curso.nombres.toString().includes(this.state.busqueda)){
          return item;
        }
    }
    });
    this.setState({dataP: search});
  }

  componentDidMount(){
   this.fetchData()
  }
  fetchData=async () => {
     this.setState({loading:true,error:null})

     try{
      const data=await api.badges.list();
      console.log(data);
      this.setState({loading:false,dataP:data})
      this.setState({loading:false,data:data})
     }catch(error){
      this.setState({loaSding:false,error:error})
     }
  }
 
  render() {
    if (this.state.loading){
      return <PageLoader />
    }

  
    return (
         <>
      <div className="home">
       <div className="field" id="searchform">
          <input 
           type="text"
           id="searchterm"
           placeholder="Buscar"
           className=""
           value={this.state.busqueda}
           onChange={this.onChange1}/>
          <button type="button" id="search">Buscar!</button>
        </div>
        <script className="cssdeck" src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
      <Container >
               
              <br />
                <br />
                <br />
              <div  className="container">
      
                <Table className="table table-bordered table-hover table-fixed">
                  <thead className="table-dark ">
                      <tr className="trt">
                      <th className="th1t" >Aula</th>
                      <th className="th2t">Curso</th>
                      <th className="th3t">NªGr</th>
                      <th className="th4t">Profesor</th>
                      <th className="th5t">Escuela</th>
                      <th className="th6t">Dia</th>
                      <th className="th7t">Horario Inicio</th>
                      <th className="th8t">Horario Fin</th>
                      <th className="th9t">Estado</th>
                      <th className="th10t">Aforo</th>
                      <th className="th11t">Opciones</th>
                    </tr>
                  </thead>
      
                  <tbody tbody="true" className="table-light">
                    {this.state.dataP.map((data1) => (
      
                             
                              <tr tr="true" className="trt" key={data1.id_horario}>
 
                                <td className="th1t">{data1.id_aula.id_aula}</td>
                                <td className="th2t">{data1.id_grupo.id_curso.nombres !=null?data1.id_grupo.id_curso.nombres:"-----"}</td>
                                <td className="th3t">{data1.id_grupo.numero !=null?data1.id_grupo.numero:"-----"}</td>
                                <td className="th4t">{data1.id_grupo.id_docente.nombre !=null?data1.id_grupo.id_docente.nombre:"-----"}</td>
                                <td className="th5t">{data1.id_grupo.id_curso.escuela !=null?data1.id_grupo.id_curso.escuela :"----"}</td>
                                <td className="th6t">{data1.dia !=null?data1.dia:"-----"}</td>
                                <td className="th7t">{data1.hora_inicia !=null?data1.hora_inicia:"----"}</td>
                                <td className="th8t">{data1.hora_fin !=null?data1.hora_fin:"----"}</td>
                                <td className="th9t">{data1.id_aula.estado}</td>
                                <td className="th10t">{data1.id_aula.capacidad}</td>
                               
                                <td >
                            
                                <Button
                                  color="btn btn-primary"
                                  onClick={() => this.mostrarModalActualizar(data1)}
                                  btn-sm="true"
                                >
                                  Reservar
                                </Button> {" "}
                            
                                <Button color="btn btn-info" className="btn btn-default" onClick={() => this.mostrarModalActualizar1(data1)} btn-sm="true">
                                <span className="glyphicon glyphicon-floppy-open"></span> <FontAwesomeIcon icon={faEdit}/></Button>
                                {" "}
                                <Button color="btn btn-danger center" onClick={() => this.mostrarModalEliminar(data1)} className="display-3"><FontAwesomeIcon icon={faTrashAlt}/></Button>
                               
                               
                              </td>
                                </tr>
                    ))}
                  </tbody>
                </Table>
                </div>
              </Container>
             </div>
             <Modal   isOpen={this.state.modalActualizar}>
             <ModalHeader>
              <div><h3>Reservar Registro</h3></div>
             </ModalHeader>
      
             <ModalBody>
             <FormGroup>
                <label>
                Codigo:
                </label>
              
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.form.id_aula.id_aula}
                />
              </FormGroup>
               <Editar
                onChange={this.handleChange}
                formValues={this.state.form}/>
               <FormGroup>
               <div className="radio-btn-container" style={{ display: "flex" }}>
                
                <RadioButton 
                  changed={ this.radioChangeHandler } 
                  id="1" 
                  name="lastName"
                  type="text"
                  onChange={this.handleChangeOcupado}
                  isSelected={ this.state.paymentMethod === "Ocupado" } 
                  label="Ocupado" 
                  value="Ocupado" 
                />
      
                <RadioButton 
                  changed={ this.radioChangeHandler } 
                  id="2"
                  name="lastName" 
                  type="text"
                  onChange={this.handleChange}
                  isSelected={ this.state.paymentMethod === "Disponible" } 
                  label="Disponible" 
                  value="Disponible" 
                />
               
              </div>
              
               </FormGroup>
               </ModalBody>
               <ModalFooter>
                  
                  <Button
                    
                    color="primary"
                    onClick={this.handleClick1}
                  >
                      
                    Reservar
                   
                  </Button>
                 
                  <Button
      
                    color="danger"
                    onClick={() => this.cerrarModalActualizar()}
                    
                  >
                    Cancelar
                  </Button>
                </ModalFooter>
               </Modal>


               <Modal   isOpen={this.state.modalActualizar1}>
             <ModalHeader>
              <div><h3>Editar Registro</h3></div>
             </ModalHeader>
              
             <ModalBody>
             <FormGroup>
                <label>
                Codigo:
                </label>
              
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.form.id_aula.id_aula}
                />
              </FormGroup>
               <Editar1
                onChange={this.handleChange1}
                formValues={this.state.form}
                formValues1={this.state.aula}
                formValues2={this.state.curso}
                formValues4={this.state.Docente}/>
               <FormGroup>
               <label>
                 Grupo:
                </label>
              
                <input
                  className="form-control"
                  name="numero"
                  type="number"
                  onChange={this.handleChange1}
                  value={this.state.Grupo.numero}
                />
                <label>
                 Aforo:
                </label>
              
                <input
                  className="form-control"
                  name="capacidad"
                  type="number"
                  onChange={this.handleChange1}
                  value={this.state.aula.capacidad}
                />
              </FormGroup>
             
               </ModalBody>

               <ModalFooter>
            
                  <Button
                    
                    color="primary"
                    onClick={this.handleClick4}
                  >
                      
                    Editar
                   
                  </Button>
                 
                  <Button
      
                    color="danger"
                    onClick={() => this.cerrarModalActualizar1()}
                    
                  >
                    Cancelar
                  </Button>
                </ModalFooter>
               </Modal>


               <Modal isOpen={this.state.modalInsertar}>
               <ModalHeader>
                 <div><h3>Insertar Aula</h3></div>
                </ModalHeader>
                <Insertar 
                onChange={this.handleChange}
                formValues={this.state.form}
                />
               <ModalFooter>
               
                  <Button
                    color="primary"
                    onClick={this.handleClick2}
                  >
                    Insertar
                  </Button>
                  
                  <Button
                    className="btn btn-danger"
                    onClick={() => this.cerrarModalInsertar()}
                    
                  >
                    Cancelar
                  </Button>
                </ModalFooter>
              </Modal>
              <Modal isOpen={this.state.modalEliminar}>
                <ModalHeader>
                 <div><h3>Eliminar</h3></div>
                </ModalHeader>
      
                <ModalBody>
                  <FormGroup>
                    <label>
                      Estas seguro de Eliminar? 
                    </label>
                    
                    <input
                        className="form-control"
                        readOnly
                        type="text"
                        value={this.state.aula.id_aula}
                    />
                  </FormGroup>
                </ModalBody>
      
                <ModalFooter>
                  <Button
                    color="primary"
                    onClick={this.handleClick3}
                  >
                    Aceptar
                  </Button>
                  <Button
                    className="btn btn-danger"
                    onClick={() => this.cerrarEliminar()}
                  >
                    Cancelar
                  </Button>
                </ModalFooter>
              </Modal>
               </>
     
     
    );
  }
}
export default VistasDocente;
