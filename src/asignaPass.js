
import encripta from "../src/encripta.js"
const asignaPass=async(data)=>{
 alert(data)
const passw=await encripta(data)

return {
       pass:passw
}
}
  export default asignaPass;