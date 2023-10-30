import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import './usuarios.css';
import devuelveDependenciaConstultada from '../devuelveDependencia';
function ModuloDevuelveUsuarios (props) {
  const cookies=new Cookies();
  const navitate = useNavigate();

  const fuaa=(datillo)=>{
    alert(datillo)
  }
    const sidebar = (
      <ul>
        {props.cosas.map((cosas) =>
          <><li key={cosas.id}>
            <h6>Nombre y apellido</h6> {cosas.nombre}{""}
            {cosas.apellido}
           
            <h6>Destino</h6>
            {devuelveDependenciaConstultada().filter(categoria=>categoria.id==cosas.destino)[0].descripcion}
          </li>
          <button onClick={()=>props.myID(cosas.id)} >editar</button>
          </>
        )}
      </ul>
    );
    
  /*
  if(!parametro.identificacion){
     window.location.href='./';
 }*/
  const URI='https://wwwa.isepsantafe.edu.ar/expedientes/usuarios/'
  
 
  
  


 
  
  
  return (
    <div>
     
     {sidebar}
     
      
    </div>
  );
};
export default ModuloDevuelveUsuarios;
