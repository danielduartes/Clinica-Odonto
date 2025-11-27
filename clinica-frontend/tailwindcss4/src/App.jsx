import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/consumidor/home'
import Contato from './Pages/consumidor/contato'
import SobreNos from './Pages/consumidor/sobrenos'
import Funcionarios from './Pages/admin/funcionarios'
import Pacientes from './Pages/admin/pacientes'
import Consultas from './Pages/admin/consultas'
import MarcarConsulta from './Pages/admin/marcar-consulta'
import Admin from './Pages/admin/admin'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/sobrenos" element={<SobreNos/>}/>
        <Route path="/funcionarios" element={<Funcionarios/>}/>
        <Route path="/pacientes" element={<Pacientes/>}/>
        <Route path="/consultas" element={<Consultas/>}/>
        <Route path="/marcarconsulta" element={<MarcarConsulta/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </Router>
  )

}

export default App