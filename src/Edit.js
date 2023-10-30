import * as React from 'react';
import { set, useForm } from 'react-hook-form';
import {useNavigate,useParams} from 'react-router-dom';
import Cookies from 'universal-cookie';
import './edit.css';

import regresaBienFecha from './regresaBienFecha';

var muestraEdita=false;
const cookies=new Cookies();

function Loguin() {

  
 
const navitate = useNavigate()
const usuario=cookies.get('apellido',{path:"/"})
const direccio=cookies.get('adress',{path:"/"})
console.log("estoy en el edit "+ direccio)
const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({});

  
  const onSubmit = () => {
    
    navitate('/nuevo')
    };

  const volver=()=>
  {
    
    navitate('/')
  }
  
 

  const consultaExpediente=()=>{
    navitate('/consultaExpediente')
  };
 
  if(!usuario){
    alert("Acceso no Autorizado")
     window.location.href='./';
     
}
const editaUsuarios=()=>{
  navitate('/usuarios')
};

if(!usuario){
  alert("Acceso no Autorizado")
   window.location.href='./';
   
}
  return (
    <div ><h1 className="resolucion_edit">
    El dispositivo donde esta realizando el presente no cumple con la
    resolucion de pantalla mínima para continuar. Si esta desde un celular intente Girando la pantalla.
  </h1>
    <div className='form__container_edit'>
      
      <form onSubmit={handleSubmit(onSubmit)} className='form_edit_back'>
        <section className="form__group">
          <h3 className="edit__title">Bienvenido usuario  {usuario}</h3>
          

          <hr/>

        
       
    
        <div className="Boton_Grande">
          <input type="submit" value="Genere Nuevo expediente" className="Boton_Grande_Nuevo"/>
          <input type="button" value="Consulta Expediente" className="Boton_Grande_Existente" onClick={consultaExpediente}/>
          <input type="button" value="Usuarios" className="Boton_Grande_Existente" onClick={editaUsuarios}/>
        </div>
        <div className="Boton_Grande">
         
          
        </div>
        <div className="contenedor_boton_edit">
          <input type="button" value="Salir" className="botton_Volver" onClick={volver}/>
          
        </div>
        </section>
      </form>

      <footer>
        <div className="edit__footer">
          <p>DTyD 2023 sistemas@isepsantafe.edu.ar</p>
        </div>
      </footer>
      
    </div></div>
  );
}
export default Loguin;
