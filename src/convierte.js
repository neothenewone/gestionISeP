

const convierte=(data)=>{
  alert(data.nivel)
    function primeraMayuscula(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    return {
            nombre:primeraMayuscula(data.nombre),
            apellido:data.apellido.toUpperCase(),
            nivel:data.nivel,
            estado:data.estado,
            identificacion:data.identificacion,
            destino:data.destino
    }
}
export default convierte;