import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import './styles/Badges.css';
const Solicitud = () => {
   const frmContact = { userEmail:'', concernCategory:'', emailTitle:'', emailDetails:'',emailTitle2:'',emailTitle3:''};
   const [contact,setContact] = useState(frmContact);
   const [showMessage, setShowMessage] = useState(false);
   const handleChange = e => { 
		const {name,value} = e.target;
		setContact({...contact,[name]:value}); 
   };
   const handleSubmit = e =>{
	    e.preventDefault();
	   
		emailjs.send('1234','template_miqrdks', contact, 'user_rwhfld0Crxgel0EJU8Ngm')
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
    <div className="container pt-2 text-center">
		
		
		{ showMessage ? <div className="alert alert-success col-md-5 mx-auto" role="alert">Email Send Success!!</div> : ``}
	   <div className="Centrado1"> 
	     <h1>Enviar Observación</h1>
		<form onSubmit={handleSubmit}>
			  
			  <div className="pt-3 col-md-5 mx-auto">
					<div className="form-group text-left"> <b>Docente</b> <br/>
						<input required type="text" value={contact.userEmail} name="userEmail" onChange={handleChange} className="form-control" placeholder="Tu Nombre" />
					</div>
			  </div>
			  <div className="pt-3 col-md-5 mx-auto">
					<div className="form-group text-left"> <b>Email</b> <br/>
						<input value={contact.emailTitle} required type="text" name="emailTitle" onChange={handleChange}  className="form-control" placeholder="Your email" />
					</div>
			  </div>
			  <div className="pt-3 col-md-5 mx-auto">
					<div className="form-group text-left"> <b>Escuela</b> <br/>
						<select  required className="form-control" value={contact.concernCategory} onChange={handleChange} name="concernCategory">
						    <option value='' >Escuela</option>
							<option value="Sistemas" >Sistemas</option>
							<option value="Software">Software</option>
			
						</select>
					</div>
			  </div>
			  
			  <div className="pt-3 col-md-5 mx-auto">
					<div className="form-group text-left"> <b>Curso</b> <br/>
						<input value={contact.emailTitle2} required type="text" name="emailTitle2" onChange={handleChange}  className="form-control" placeholder="Your Curso" />
					</div>
			  </div>
			  <div className="pt-3 col-md-5 mx-auto">
					<div className="form-group text-left"> <b>Grupo</b> <br/>
						<input value={contact.emailTitle3} required type="text" name="emailTitle3" onChange={handleChange}  className="form-control" placeholder="Your email" />
					</div>
			  </div>
			  <div className="pt-3 col-md-5 mx-auto">
					<div className="form-group text-left"> <b>Describa su solicitud</b> <br/>
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
  );
}
export default Solicitud;