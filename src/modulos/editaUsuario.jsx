import { useForm } from 'react-hook-form';
import axios from "axios";
import convierte from '../convierte'
import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import seteaCokie from '../seteaCokie';
import ObtieneDatosCookies from '../obtieneDatosCookiesUsuario'
import { useState } from 'react';
import './usuarios.css';
import asignaPass from '../asignaPass.js'

import devuelveDependenciaConstultada from '../devuelveDependencia';

function ModuloEditaUsuarios (props) {
  const cookies=new Cookies();
  const navitate = useNavigate();
  const parametro=props.datos
const destinos=devuelveDependenciaConstultada()
  /*
  if(!parametro.identificacion){
     window.location.href='./';
 }*/
  const URI='https://wwwa.isepsantafe.edu.ar/expedientes/usuarios/actualiza/'
 

  
  const update=async (data)=>{
    alert(URI+parametro.identificacion)
    const resultado=await axios.put(URI+parametro.identificacion,convierte(data))
navitate('../usuarioLogueado')
   }
const {register, formState: { errors }, watch, handleSubmit,} = useForm({
defaultValues: parametro//recupero lo que pasa por parametros
});
  
const guardar=(data)=>{update(data)}
const blanquear=async()=>
{ const nuevoPass=await asignaPass("Alem_2050")
  const resultado=await axios.put(URI+parametro.identificacion,nuevoPass)

}
  

  return (
    <div>
      <div className="titulo">
      
        <h2>Modulo de Edicion de Usuarios</h2>
        <h3>Usuario logueado:  {parametro.apellido}</h3>
      </div>
      <h1 className="resolucion">
        El dispositivo donde esta realizando el presente no cumple con la
        resolucion de pantalla mínima para continuar. Si esta desde un celular intente Girando la pantalla.
      </h1>
      
      <form className='v' onSubmit={handleSubmit(guardar)}>
      
        <section className="datos-">
         
    <div className="grupo_form">
          {errors.apellido?.type === 'required' && (
            <span className="aviso-s-loguin">*</span>
          )}
          
          {errors.apellido?.type === 'minLength' && (
              <span className="s">
               6 u 8 numeros
              </span>
            )}
          <input
            type="text"
            placeholder=" apellido"
            className="inputa_form"
            id="apellido"
            {...register('apellido', {
              required: true,
              minLength: 3,
              maxLength:16
            })}
          />
            <label for="apellido" className="form__label">
            Apellido
            </label>
            <span className="form__line"></span>
    </div>
    <div className="grupo_form">
    {errors.nombre?.type === 'required' && (
            <span className="aviso-campos-loguin">*</span>
          )}
          
          {errors.nombre?.type === 'minLength' && (
              <span className="aviso_formulario">
               6 u 8 numeros
              </span>
            )}
          <input
            type="text"
            placeholder=" "
            className="input_form"
            id="nombre"
            {...register('nombre', {
              required: true,
              minLength: 3,
              maxLength:16
            })}
          />
            <label for="nombre" className="form__label">
            Nombre
            </label>
            <span className="form__line"></span>
    </div>
    
    <div className="grupo_form">
    {errors.identificacion?.type === 'required' && (
            <span className="aviso-campos-loguin">*</span>
          )}
          
          {errors.identificacion?.type === 'minLength' && (
              <span className="aviso_formulario">
               6 u 8 numeros
              </span>
            )}
          <input
            type="text"
            placeholder=" "
            className="input_form"
            id="identificacion"
            {...register('identificacion', {
              required: true,
              minLength: 3,
              maxLength:16
            })}
          />
            <label for="identificacion" className="form__label">
            Identificacion
            </label>
            <span className="form__line"></span>
    </div>
   

    <div className="grupo_form">
    <div>
            <label for="nivel">Unidad de Destino</label>
            <br />
          <select
            className="deptos" id='destino'
            {...register('destino', {
              required: true,
            })}
          >
            {destinos.map((cate) =>
            <><option key={cate.id} value={cate.id}>
            {cate.descripcion}
            </option>
            </>
        )}     
          
          
          

          </select></div>
    
    </div>


        
   
    <div className="">
    <div className="">
    <div>
            <label for="nivel">Nivel de Acceso</label>
            <br />
          <select
            className="deptos" id='nivel'
            {...register('nivel', {
              required: true,
            })}
          >
           
           <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select></div>
          
    </div>
    
    </div>
    <div className="grupo_form">
    <div>
            <label for="estado">Estado</label>
            <br />
          <select
            className="deptos" id='estado'
            {...register('estado', {
              required: true,
            })}
          >
            <option value="1">Activo</option>
            <option value="2">Suspendido</option>
           
          </select></div>
    
    </div>
    <input type="submit" value="Guardar"  className="botonCancelar" id="btnSalir" />
        </section>
        <input type="button" value="Blanquear Pass" onClick={blanquear} className="botonCancelar" id="btnSalir" />
        
        </form>
     
    </div>
  );
};
export default ModuloEditaUsuarios;
