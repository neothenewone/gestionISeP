import { useForm } from 'react-hook-form';
import './formulario.css';
import './style.css';
import axios from "axios";
import convierte from './convierte'
import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import seteaCokie from './seteaCokie';
import ObtieneDatosCookies from './obtieneDatosCookiesUsuario';
import ObtieneDatosCookiesExpediente from './obtieneDatosCookiesExpediente';
import devuelveDependenciaConstultada from './devuelveDependencia.js';
import devuelveCategorias from './modulos/devuelveCategorias';
import convierteExpediente from './convierteExpediente'
import seteaCokieExpediente from './seteaCokieExpediente';



function FormNuevoExpte () {
  const cookies=new Cookies();
  const navitate = useNavigate();
  const ID=cookies.get('id');
  
  const fecha = new Date();
const hoy = "Fecha: "+fecha.toLocaleDateString();

  const URI='https://wwwa.isepsantafe.edu.ar/expedientes/'
  
const parametro={}
const usuario=ObtieneDatosCookies()
  

  const store=async (data)=>{

    const resultado = await axios.post(URI+"expedientes/crea",convierteExpediente(data))

    
    await seteaCokieExpediente(resultado.data.Respuesta).then(window.open('/imprime'));
 navitate('/usuarioLogueado')
   
   }

   const update=async (data)=>{
    
    await axios.put(URI+"expedientes/actualiza"+ID,convierteExpediente(data))
    alert("Actualizado!!!")
    
   }
  const {register, formState: { errors }, watch, handleSubmit,} = useForm({
  defaultValues: parametro//recupero lo que pasa por parametros
  });
  const volver=()=>
  {
  
    navitate('/usuarioLogueado')
  }

const categorias=devuelveCategorias()

  const onSubmit = (data) => {

    store(data)
 
  }
 
  const fechaMinima = '1995-07-08';
  const fechaMaxima = '2005-07-07';
  const titulo =
    'Generacion de Expedientes ';
  const subTitulo = 'del Instituto de Seguridad Publica';
  
  


//Aca enpieza el react lo anterior es javascript y hooks


  return (
    <div>
      <div className="titulo">
        <h2>{titulo}</h2>
        <h2>{subTitulo}</h2>
    
        
  
      </div>
      <h1 className="resolucion">
        El dispositivo donde esta realizando el presente no cumple con la
        resolucion de pantalla mínima para continuar. Si esta desde un celular intente Girando la pantalla.
      </h1>
      <h3>Usuario Logueado:{usuario.apellido} </h3>
      <h4>{hoy}</h4>
        <h3>Division:{devuelveDependenciaConstultada().filter(categoria=>categoria.id==usuario.destino)[0].descripcion} </h3>   
      <form className='form__formulario' onSubmit={handleSubmit(onSubmit)}>
        <section className="datos-personales">
          
          <h3 className="encabezados">Datos Generales</h3>{/* ENCABEZADOS*/}
          <hr />
          <div>
            <h5>Titular</h5>
          {errors.titular?.type === 'required' && (
            <span className="aviso_formulario">Es un campo requerido!!!</span>)}
          {errors.titular?.type === 'minLength' && (<span className="aviso_formulario">El apellido debe tener una longitud mayor, controle por favor</span>)}
            <input
            type="text"
            placeholder="Ingrese el apellido del titular" className="input__formulario"
            autoComplete='false'
            maxlength="1024"
            {...register('titular', {
              required: true,
              minLength: 3,
            })}/>
          </div>
          <div>
          <h5>Categoria del Expediente</h5>
          {errors.categoria?.type === 'required' && (
            <span className="aviso_form">Es un campo requerido!!!</span>)}
         
            <select
            type="select"
            placeholder="Titular" className="input__formulario"
            autoComplete='false'
            
            {...register('idCategoria', {
              required: true,
            })}>
            {categorias.map((cate) =>
            <><option key={cate.id} value={cate.id}>
            {cate.descripcion}
            </option>
            </>
        )}     
             
             
            </select>
          </div>
          
          {errors.descripcion?.type === 'minLength' && (<span className="aviso_formulario">Descripcion muy escueta, amplie por favor</span>)}
          <h5>Descripcion del Expediente</h5>
          {errors.descripcion?.type === 'required' && (
            <span className="aviso_formulario">Debe describir de que trata el expediente ya que es un campo requerido!!!</span>)}
          <textarea
            type="text"
            placeholder="Descripcion del Expediente" className="input__formulario"
            autoComplete='false'
            maxlength="1024"
            {...register('descripcion', {
              required: true,
              minLength: 8,
            })}/>
          <div>
          <hr />
            <h5>Expediente Inicial</h5>
          {errors.expedienteInicial?.type === 'required' && (
            <span className="aviso_formulario">Es un campo requerido!!!</span>)}
          {errors.expedienteInicial?.type === 'minLength' && (<span className="aviso_formulario">El apellido debe tener una longitud mayor, controle por favor</span>)}
            <input
            type="text"
            placeholder="Codigo de Expediente Precedente" className="input__formulario"
            autoComplete='false'
            maxlength="1024"
            {...register('idExpSecretaria', {
              minLength: 3,
            })}/>
          </div>
          <div>
          <hr />
            <h5>Expediente Inicial Ministerio</h5>
          {errors.expedienteInicial?.type === 'required' && (
            <span className="aviso_formulario">Es un campo requerido!!!</span>)}
          {errors.expedienteInicial?.type === 'minLength' && (<span className="aviso_formulario">El apellido debe tener una longitud mayor, controle por favor</span>)}
            <input
            type="text"
            placeholder="Codigo de Expediente Ministerio" className="input__formulario"
            autoComplete='false'
            maxlength="1024"
            {...register('idExpMinisterio', {
              minLength: 3,
            })}/>
          </div>
          <div>
            <h5>Fecha Expediente Inicial Ministerio</h5>
          {errors.expedienteInicial?.type === 'required' && (
            <span className="aviso_formulario">Es un campo requerido!!!</span>)}
          {errors.expedienteInicial?.type === 'minLength' && (<span className="aviso_formulario">El apellido debe tener una longitud mayor, controle por favor</span>)}
            <input
            type="date"
            placeholder="Codigo de Expediente Ministerio" className="input__formulario"
            autoComplete='false'
            maxlength="1024"
            {...register('fechaMinisterio', {
              minLength: 3,
            })}/>
          </div>


          <div className="contenedor-boton" >

        
<input type="submit" value="Finalizar"  className="botonEnviar" />
<input type="boton" value="Cancelar"  className="botonCancelar" onClick={volver} id="btnSalir" />

</div>

        
        </section>

                    


     
        </form>
      <footer>
        <div className="corp">
          <p>DTyD 2023 sistemas@isepsantafe.edu.ar</p>
        </div>
      </footer>
    </div>
  );
};
export default FormNuevoExpte;
