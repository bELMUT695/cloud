import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import api from '../api';
import './styles/Badges.css';
import './styles/estilos.css';
import PageLoader from '../Components/PageLoading';

import {
  Table,
  Container,
} from "reactstrap";


class Home extends React.Component{

  state = {
    loading: true,
    error: null,
    data:undefined,
    dataP:undefined,
    busqueda: '',
  }

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
     this.setState({loading:false,error:error})
    }
  }

  

  render(){
    if (this.state.loading){
      return <PageLoader />
    }
    return(
      //console.log(this.state.data),
      <div className="home">
      <div class="field" id="searchform">
          <input 
           type="text"
           id="searchterm"
           placeholder="Buscar"
           className=""
           value={this.state.busqueda}
           onChange={this.onChange1}/>
          <button type="button" id="search">Buscar!</button>
      </div>
      <script class="cssdeck" src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>

      <Container>
        <br/>
        <br/>
        <br/>
        <div>
          <div class="container">
            <Table className="table table-bordered table-hover table-fixed">
              <thead className="table-dark">
                <tr class="tr">
                  <th class="th1">Aula</th>
                  <th class="th2">Curso</th>
                  <th class="th3">Grupo</th>
                  <th class="th4">Profesor</th>
                  <th class="th4">Apellido</th>
                  <th class="th5">Escuela</th>
                  <th class="th6">Dia</th>
                  <th class="th7">Horario Inicio</th>
                  <th class="th8">Horario Fin</th>
                  <th class="th9">Estado</th>
                  <th class="th10">Aforo</th>
                </tr>
              </thead>
              <tbody className="table-light">
                {
                  this.state.dataP.map((data) => (
                      <tr class="tr" key={data.id_horario}>
                      <td class="th1">{data.id_aula.id_aula}</td>
                      <td class="th2">{data.id_grupo.id_curso.nombres !=null?data.id_grupo.id_curso.nombres:"-----"}</td>
                      <td class="th3">{data.id_grupo.numero !=null?data.id_grupo.numero:"-----"}</td>
                      <td class="th4">{data.id_grupo.id_docente.nombre !=null?data.id_grupo.id_docente.nombre:"-----"}</td>
                      <td class="th4">{data.id_grupo.id_docente.apellido!=null?data.id_grupo.id_docente.apellido:"-----"}</td>
                      <td class="th5">{data.id_grupo.id_curso.escuela !=null?data.id_grupo.id_curso.escuela :"----"}</td>
                      <td class="th6">{data.dia !=null?data.dia:"-----"}</td>
                      <td class="th7">{data.hora_inicia !=null?data.hora_inicia:"----"}</td>
                      <td class="th8">{data.hora_fin !=null?data.hora_fin:"----"}</td>
                      <td class="th9">{data.id_aula.estado}</td>
                      <td class="th10">{data.id_aula.capacidad}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
      </div>
    );
  }
}

export default Home;