import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import './styles/Badges.css';
const EnviarObservacion = () => {
   const frmContact = { userEmail:'', concernCategory:'', concernCategory1:'', emailTitle:'', emailDetails:'',emailTitle2:'',emailTitle3:''};
   const [contact,setContact] = useState(frmContact);
   const [showMessage, setShowMessage] = useState(false);
   const handleChange = e => { 
		const {name,value} = e.target;
		setContact({...contact,[name]:value}); 
   };
   const handleSubmit = e =>{
	    e.preventDefault();
	   
		emailjs.send('123456','template_p37fbw8', contact, 'user_rwhfld0Crxgel0EJU8Ngm')
		.then((response) => {
				   console.log('SUCCESS!', response.status, response.text);
				   setContact(frmContact);
				   setShowMessage(true);
		}, (err) => {
				   console.log('FAILED...', err);
		});
   }
  return (
	<div className="soli">
		<div>
			<br>
			</br>
			<br>
			</br>
			<br>
			</br>
		</div>
    <div className="formu">  
	 
    <div className="container pt-2 text-center">
		
      
		{ showMessage ? <div className="alert alert-success col-md-5 mx-auto" role="alert">Email Send Success!!</div> : ``}
	   <div className="Centrado"> 
	       <h1>Enviar Observación</h1>
		<form onSubmit={handleSubmit}>
			  
			  <div className="pt-3 col-md-5 mx-auto">
					<div className="form-group text-left"> <b>Nombre</b> <br/>
						<input required type="text" value={contact.userEmail} name="userEmail" onChange={handleChange} className="form-control" placeholder="Tu Nombre" />
					</div>
			  </div>
			
			  <div className="pt-3 col-md-5 mx-auto">
					<div className="form-group text-left"> <b>Pabellon</b> <br/>
						<select  required className="form-control" value={contact.concernCategory} onChange={handleChange} name="concernCategory">
						    <option value='' >----</option>
							<option value="Nuevo" >Nuevo</option>
							<option value="Antiguo">Antiguo</option>
			
						</select>
					</div>
			  </div>
              <div className="pt-3 col-md-5 mx-auto">
					<div className="form-group text-left"> <b>Lugar de estudio</b> <br/>
						<select  required className="form-control" value={contact.concernCategory1} onChange={handleChange} name="concernCategory1">
						    <option value='' >----</option>
							<option value="Aula" >Aula</option>
							<option value="Laboratorio">Laboratorio</option>
			
						</select>
					</div>
			  </div>
			  <div className="pt-3 col-md-5 mx-auto">
					<div className="form-group text-left"> <b>Describa su Observacion</b> <br/>
						<textarea required name="emailDetails" onChange={handleChange} className="form-control" placeholder="Describa su solicitud" value={contact.emailDetails}></textarea>
					</div>
			  </div>
			  <div className="pt-3 col-md-5 mx-auto text-center">
					<button className="btn btn-primary">Enviar Solicitud</button>
			  </div>
			  
			  
		</form>
		
		</div>
    </div>  		
	</div>
	</div>
  );
}
export default EnviarObservacion;