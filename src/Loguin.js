import React, { useState, useEffect } from 'react';
import { set, useForm } from 'react-hook-form';
import {useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import './loguin.css'
import removeCokies from './removeCokies'
import seteaCokie from './seteaCokie';
import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import  encrypt from './encripta.js'
import compare from './compare.js'
import { Alert } from 'bootstrap';
import ImagenQR from './imagenQR';
const cookies=new Cookies();
const UR_usuarios='https://wwwa.isepsantafe.edu.ar/expedientes/usuarios/'
const key={user:'v.01.02',magicword:'spectopatronum'}
function Loguin() {
  

const [cargando, setCargando] = useState(false);


 const navitate = useNavigate()
 removeCokies();
 
 
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({});


const loguin=(cosa)=>{
  try {
   
   


    console.log(cosa.usuario)
        cookies.set('usuario',cosa.usuario, {path:"/"})
        cookies.set('pass',cosa.pass, {path:"/"})
        setCargando(true)
        getUsuarioById(cosa.usuario,cosa.pass)
    

  } catch (error) {
    
  }
  
       
        
   
}
  const getUsuarioById=async (dato,dato2)=>{ 
    
      try {
        const primera= "  "
        setCargando(true)
       
        const estaAbierto= await axios.post(UR_usuarios+dato);
      
       
    if(estaAbierto.data){
      alert("entro")
      const check=await compare(dato2,estaAbierto.data.pass)

      if(check){
        console.log(estaAbierto.data)
        setCargando(false)
        seteaCokie(estaAbierto.data)
       
        navitate('./usuarioLogueado')
      }else{
        alert("CREDENCIALES INVALIDAS")
        setCargando(false)
            }
     
    }
    else{
      alert("USUARIO NO ENCONTRADO")
      setCargando(false)
    }
     
      
      }catch{}}
       
  //
  return (
    <div> 
      
     
      <div className='form__loguin_ingreso'>
      <div className='imagen_loguin'><h1 style={{"textAlign":"center","margin":"50px","color":"white"}}>Sistema de Gestión</h1>
      <h6 style={{"textAlign":"center","margin":"50px","color":"white"}}>V1.00.1</h6>
      </div>
    

    <form className="form_use" onSubmit={handleSubmit(loguin)}>
    

    
        <div className="form__container">
        <div className='escudo_loguin'></div>
        <div>
      {cargando && (<Spinner color='priority'/>)}
      </div>
    <h1 className="form__title_Important">Instituto de Seguridad Pública</h1>

          <div className="form__group">
          {errors.usuario?.type === 'required' && (
            <span className="aviso-campos-loguin">*</span>
          )}
          
          {errors.usuario?.type === 'minLength' && (
              <span className="aviso_formulario">
               6 u 8 numeros
              </span>
            )}
          <input
            type="text"
            placeholder=" "
            className="form__input"
            id="usuario"
            {...register('usuario', {
              required: true,
              minLength: 6,
              maxLength:8
            })}
          />
            <label for="dni" className="form__label">
              Usuario
            </label>
            <span className="form__line"></span>
        </div>
          <div className="form__group">
            {errors.pass?.type === 'required' && (
              <span className="aviso-campos-loguin">*</span>
            )}
           
            
            <input
              className="form__input"
              id="pass"
              type="password"
              placeholder=" "
              autoComplete='true'
              {...register('pass', {
                required: true,
                
              })}
            /> 
          <label for="pass" className="form__label">
          Contraseña
          </label>
          <span className="form__line"></span>
          </div>
          <div className="form__group">
            
           
            
            
          </div>
          <input type="submit" className="form__submit" value="Continuar" />
          <div className="form__footer">
          <h4 className='form__footer'>DTyD 2023 sistemas@isepsantafe.edu.ar</h4>
        </div>
        </div>
      </form>
         </div>
    </div>
  );
}
export default Loguin;
