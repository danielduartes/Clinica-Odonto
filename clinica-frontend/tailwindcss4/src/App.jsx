import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body className='bg-cyan-800 min-h-screen'>
        <div className='fixed top-0 left-0 w-full z-50'>
          <div className='bg-cyan-800 px-10 py-4 border-b-2 border-gray-400'>
            <div className='flex justify-between m-3'>
              <nav className='flex items-center ml-20 text-lg'>
                <a href="" className='text-white font-semibold hover:text-sky-300 mx-15'>Home</a>
                <a href="" className='text-white font-semibold hover:text-sky-300 mx-15'>Sobre Nós</a>
                <a href="" className='text-white font-semibold hover:text-sky-300 mx-15'>Contato</a>
              </nav>
              <div className='mr-10'>
                <p className='text-white text-xl font-sans font-medium'>Sorriso Raiz</p>
                <p className='text-white text-xs font-serif'>Dra. Juliana Medeiros</p>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute top-0 left-0 ml-30 mt-40'>
          <div>
            <h2 className='text-white mb-6 pb-5 border-sky-300 border-b-3 font-semibold'>
              Uma clínica preparada para <br/>atender <span className='text-cyan-300 font-semibold'> suas necessidades</span>
            </h2>            
          </div>
          <div className='bg-cyan-600 px-7 py-5 rounded-lg mb-9 font-medium'>
            <p className='text-white'>Estamos localizados em uma área de fácil acesso e contamos com uma equipe <br/> altamente capacitada, para proporcionar aos nossos pacientes o melhor <br/> cuidado para a saúde bucal e a realização de um sorriso mais bonito e saudável.</p>
          </div>
          <div className='mr-20'>
            <img src="src/assets/imagens/clinica.jpg" alt="clinica"  className='w-120 h-75 rounded-xl ml-35 mb-50 shadow-xl'/>
          </div>
        </div>
        <div className='bg-sky-300 p-8 pt-4 flex flex-col rounded-2xl absolute right-0 top-0 mt-50 mr-30 shadow-xl'>
          <div className='flex flex-col space-y-1'>
            <div className='pt-3 pb-7'>
              <h2 className='text-white flex items-start font-semibold text-xl'>Venha nos visitar!</h2>
            </div>
            <div className='flex items-start gap-4'>
              <img src="src/assets/imagens/telefone.png" alt="telefone" className='w-4 h-4 mr-2 mt-1'/>
              <p className='text-black font-thin'>(83) 99129-2872</p>
            </div>
            <div className='flex items-start gap-4'>
              <img src="src/assets/imagens/carta.png" alt="carta" className='w-7 h-7'/>
              <p className='text-black font-thin'>sorrisoraiz@gmail.com</p>
            </div>
            <div className='flex items-start gap-4'>
              <img src="src/assets/imagens/localizacao.png" alt="localizacao" className='w-6 h-6'/>
              <p className='text-black font-thin'>R. Antônio Rabelo Júnior, 170 - 4º andar -<br/> sala 401 - Miramar, João Pessoa - PB</p>
            </div>
            <div>
              <button className='mt-7 relative mr-60 bg-cyan-800 hover:bg-sky-500 p-2 px-3 rounded-lg font-semibold'>Agende sua consulta</button>
            </div>
          </div>
        </div>
      </body>
    </>
  )
}

export default App