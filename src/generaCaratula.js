import React from 'react';
import devuelveDepartamento from './devuelveDepartamento';
import devuelveProvincia from './devuelveProvincia';
import regresaBienFecha from './regresaBienFecha';
import {Document, Page, View,Text, PDFViewer,Image} from '@react-pdf/renderer';
import ImagenQR from './imagenQR';
import Logo from '../src/imagenes/escudoIseP.png'
import Cookies from 'universal-cookie';
import ObtieneDatosCookiesExpediente from './obtieneDatosCookiesExpediente';
import { wait } from '@testing-library/user-event/dist/utils';
import devuelveDependenciaConstultada from './devuelveDependencia';
import devuelveCategorias from './modulos/devuelveCategorias';


function Legajo() {
 

  const cookies=new Cookies();
 
  

  const datosVarios=  ObtieneDatosCookiesExpediente() 
  const direccion="Expediente nro:"+datosVarios.idExpediente+" //";

       return (
      <PDFViewer showToolbar="false" style={{width:"100%",height:"100vh"}} >
      <Document  title={"Caratula expediente "+datosVarios.idExpediente} >
        <Page size="A4" style={{"display":"grid"}}>
        <View id="Escudo"style={{alignSelf:"center", height:"75px", width:"75px", marginTop:"10px"}}>
        <Image src={Logo}/></View>
        <Text id='nombre escuela' style={{alignSelf:"center", marginTop:"-5px"}}>
          Instituto de Seguridad Pública</Text>
        <View className="Legajo"style={{ margin:"50px"}}>
        <View className='datosPersonales_legajo' style={{textAlign:"left",fontSize:"32px",margin:"25px",padding:"25px"}}>
     
    <Text className='sub_titulo_legajo'>Expediente Nro: { datosVarios.idExpediente}</Text>
    <Text>Oficina Iniciadora:  {devuelveDependenciaConstultada().filter(categoria=>categoria.id==datosVarios.idUsuarioExpediente)[0].descripcion}</Text>
    <Text>Motivo de Inicio de Expediente: {devuelveCategorias().filter(categoria=>categoria.id==datosVarios.idUsuarioExpediente)[0].descripcion}</Text>
    </View>
    <View className='datosPersonales_legajo' style={{textAlign:"left",fontSize:"12px"}}>
    <Text>Inicio con otro nro de Expediente o nota: {datosVarios.idExpSecretaria != "null" ? "Si:"+datosVarios.idExpSecretaria:"NO"}</Text>
    <Text>Posee nro de Expediente Ministerial: {datosVarios.idExpMinisterio != "null" ? "SI y es= "+datosVarios.idExpMinisterio:"NO"}</Text>
    
    </View>
    
        
        <View style={{textAlign:"left",fontSize:"11px",margin:"10px"}}>


  
</View>
<View id="QR"style={{ alignSelf:"center"}}>       
    <ImagenQR direccion={direccion} tamaño="100"/></View>
  
  

  </View>

  
        </Page>
      </Document>
      </PDFViewer>

    );
  }
export default Legajo