import ObtieneDatosCookies from "./obtieneDatosCookiesUsuario";

const convierteExpediente=(data,idExpediente)=>{
  const usuario=ObtieneDatosCookies()
    function primeraMayuscula(str) {
     
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    return {
            usuarioID:usuario.id,
            dependenciaID:usuario.destino,
            idExpSecretaria:data.idExpSecretaria ? data.idExpSecretaria : null,
            titular:primeraMayuscula(data.titular),
            idCategoria:data.idCategoria,
            descripcion:data.descripcion,
            idExpMinisterio:data.idExpMinisterio ? data.idExpMinisterio:null,
            fechaMinisterio:data.fechaMinisterio ? data.fechaMinisterio:null,
            
    }
}
export default convierteExpediente;