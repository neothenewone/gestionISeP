import Loguin from './Loguin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormNuevoExpte from './formNuevoExpte';
import Edit from './Edit';
import GeneraCaratula from './generaCaratula';
import EditaExpediente from './EditaExpediente';
import ConsultaExpediente from './ConsultaExpediente';
import QRscanner from '../src/modulos/QRscanner'
import ModuloUsuarios from './modulos/moduloUsuarios';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loguin ></Loguin>}/>
          <Route path='/usuarioLogueado' element={<Edit />}/>
          <Route path='/imprime' element={<GeneraCaratula />}/>
          <Route path='/nuevo' element={<FormNuevoExpte />}/>
          <Route path='/editaExpediente' element={<EditaExpediente />}/>
          <Route path='/consultaExpediente' element={<ConsultaExpediente />}/>
          <Route path='/LectorQr' element={<QRscanner />}/>
          <Route path='/usuarios' element={<ModuloUsuarios superUser={true} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
