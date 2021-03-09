
import React from 'react'

import Layout1 from './Layout1';

import { BrowserRouter, Switch,Route } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import Menu from '../pages/MenuLogin';
import Badges1  from '../pages/Solicitud';
import Solicitud  from '../pages/LoginSolicitud';
import Vista from '../pages/VistasDocente';
import Home from '../pages/Home';
import Observacion  from '../pages/EnviarObservacion';


function App (){
  
              return(
                  <BrowserRouter>
                    <Switch>
                      <Layout1>

                        <Route exact path="/Home" component={Home}/>

                        <Route exact path="/MenuLogin" component={Menu}/>  
                       
                        <Route exact path="/Info/Solicitud" component={Badges1}/>
                    
                        <Route exact path="/Reservar" component={Menu}/>                 
                        <Route exact path="/badges/:badgeId/edit" component={Vista} />
                        <Route exact path="/Info" component={Solicitud} />
                        <Route exact path="/Reservar/admin" component={Vista} />
                        <Route exact path="/badges/Insertar" component={Vista} />´
                        <Route exact path="/InfoGraf" component={Observacion} />

                      </Layout1>  
                    </Switch>    
                  </BrowserRouter>
                  )
    
}

export default App;
