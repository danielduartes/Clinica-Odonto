import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/consumidor/home'
import Contato from './Pages/consumidor/contato'
import SobreNos from './Pages/consumidor/sobrenos'
import Pacientes from './Pages/admin/pacientes'
import Consultas from './Pages/admin/consultas'
import MarcarConsulta from './Pages/admin/marcar-consulta'
import CadastrarPaciente from './Pages/admin/cadastrar-paciente'
import Admin from './Pages/admin/admin'
import Mensagens from './Pages/admin/mensagens'
import AlterarConsulta from './Pages/admin/alterar-consultas'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/sobrenos" element={<SobreNos/>}/>
        <Route path="/admin/pacientes" element={<Pacientes/>}/>
        <Route path="/admin/consultas" element={<Consultas/>}/>
        <Route path="/admin/marcarconsulta" element={<MarcarConsulta/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/cadastrarpaciente" element={<CadastrarPaciente/>}/>
        <Route path="/admin/mensagens" element={<Mensagens/>}/>
        <Route path="/admin/alterar-consultas/:id" element={<AlterarConsulta/>}/>
      </Routes>
    </Router>
  )

}

export default App