import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/consumidor/home'
import Contato from './Pages/consumidor/contato'
import SobreNos from './Pages/consumidor/sobrenos'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/sobrenos" element={<SobreNos/>}/>
      </Routes>
    </Router>
  )

}

export default App