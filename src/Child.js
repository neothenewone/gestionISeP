
import React, {useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom';
import Cookies from 'universal-cookie';
import QrScan from 'react-qr-reader'
export default function Child(props) {
    const navitate = useNavigate()
      
    const cookies=new Cookies();
    const datos={}


           const [qrscan, setQrscan] = useState(true);
          
          
           const handleScan =async data => {

               if (data) {
                console.log(data)
                props.direccion(data)
                cookies.set("adress",data, {path:"/"}) 
                const usuario=cookies.get('adress',{path:"/"})
                alert(usuario + "  estoy en el usuario del lector y soy "+cookies.get('apellido',{path:"/"}) + " con nivel "+cookies.get('nivel',{path:"/"}) + " del destino " + cookies.get('destino',{path:"/"}))
                navitate('../usuarioLogueado')
               }
           }
           const handleError = err => {
           console.error(err)
           }
       

 
    return (
    <React.Fragment>
   
            <div>
                
                <span>Escanee el codigo QR del Expediente</span>
              
    
                <center>
                <div style={{marginTop:30}}>
                <QrScan
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ height: 240, width: 320 }}
                    />
                </div>

               
                </center>
    
               
          </div>
    </React.Fragment>
  );
}