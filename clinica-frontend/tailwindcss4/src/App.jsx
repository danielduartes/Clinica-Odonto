import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/home'
import Contato from './Pages/contato'
import SobreNos from './Pages/sobrenos'

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