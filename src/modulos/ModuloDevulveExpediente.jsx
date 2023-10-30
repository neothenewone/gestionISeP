import axios from "axios";
import React from "react";

const client = axios.create({
  baseURL: "https://wwwa.isepsantafe.edu.ar/expedientes/expedientes/"
});

export default function App(pro) {
  const [a, setPost] = React.useState(null);
console.log(pro.pro)
  React.useEffect(() => {
    async function getPost() {
      const response = await client.post('/'+pro.pro);
      setPost(response.data);
    }
    getPost();
  }, []);

  

  if (!a) return "No post!"

  return (
    <div>
      
{a.descripcion}
    </div>
  );
}


