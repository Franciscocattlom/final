import {Routes, Route} from 'react-router-dom'
import { Home } from './Componentes/Home';
import {Recomendados} from './Componentes/Recomendados'
import { Login } from './Componentes/Login';
import { Register } from './Componentes/Register';
import { AuthProvider } from './Context/authContext';
import { ProtectedRoute } from './Componentes/ProtectedRoute';
import Peliculas from './Componentes/Peliculas';
import Menu from './Componentes/Menu'


function App() {
  return (
    <div >
      <Menu/>
      <AuthProvider>
      <Routes>
      <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute> }/>
      <Route path='/recomendados' element={<ProtectedRoute>
        <Recomendados/>
      </ProtectedRoute>}/>
      <Route path='/peliculas' element={
        <ProtectedRoute>
          <Peliculas></Peliculas>
        </ProtectedRoute>}/>
      
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
      </AuthProvider>
    </div>
    
   
  );
}

export default App;
