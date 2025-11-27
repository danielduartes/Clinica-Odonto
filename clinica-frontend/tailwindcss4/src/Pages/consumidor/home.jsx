import React from 'react';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    {/* Header */}
      <div className='bg-cyan-800 min-h-screen'>
        <div className='fixed top-0 left-0 w-full z-50 bg-cyan-900'>
          <div className='bg-cyan-800 px-10 py-3 border-b-2 border-gray-400'>
            <div className='flex justify-between m-3'>
              <nav className='flex items-center ml-20 text-lg'>
                <Link to="/" className='mx-10 font-semibold text-white hover:text-cyan-300'>Home</Link>
                <Link to="/sobrenos" className='mx-10 font-semibold text-white hover:text-cyan-300'>Sobre Nós</Link>
                <Link to="/contato" className='mx-10 font-semibold text-white hover:text-cyan-300'>Contato</Link>
              </nav>
              <div className='mr-10'>
                <p className='text-white text-xl font-sans font-medium'>Sorriso Raiz</p>
                <p className='text-white text-xs font-serif'>Dra. Juliana Medeiros</p>
              </div>
            </div>
          </div>
        </div>

        {/* Página */}
        <div className='pt-24 px-20 flex justify-between'> 
          <div className='mt-16 mb-15'>
            <div>
              <h2 className='text-white mb-6 pb-5 border-sky-300 border-b-3 font-semibold'>
                Uma clínica preparada para <br/>atender <span className='text-cyan-300 font-semibold'> suas necessidades</span>
              </h2>
            </div>
            <div className='bg-cyan-600 px-2 py-5 rounded-lg mb-9 font-medium'>
              <p className='text-white'>Estamos localizados em uma área de fácil acesso e contamos com uma equipe <br/> altamente capacitada, para proporcionar aos nossos pacientes o melhor <br/> cuidado para a saúde bucal e a realização de um sorriso mais bonito e saudável.</p>
            </div>
            <div className='mr-20'>
              <img src="src/assets/imagens/clinica.jpg" alt="clinica"  className='w-130 h-75 rounded-xl shadow-xl mt-10 ml-20 mb-10'/> 
            </div>
          </div>
          <div className='bg-sky-300 p-8 pt-4 flex flex-col rounded-2xl shadow-xl mt-16 w-4/12 h-fit'>
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
                <p className='text-black font-thin'>R. Antônio Rabelo Júnior, 170 - 4º andar -<br/> Sala 401 - Miramar, João Pessoa - PB</p>
              </div>
              <div>
                <button className='mt-7 text-white bg-cyan-800 hover:bg-sky-500 p-2 px-3 rounded-lg font-semibold'>Agende sua consulta</button>
              </div>
            </div>
          </div>
          
        </div> 
      </div> 

      {/* Rodapé */}
      <div className='grid grid-cols-3 divide-x divide-gray-400 my-7 font-light'>
        <div className='pl-30'>
          <p className='mb-3'>Dra. Juliana Medeiros</p>
          <p>Dentistas especializada para <br />atender a sua necessidade!</p>
        </div>
        <div className='mt-3'>
          <p>Sorriso Raiz - Copyright 2025 © - <br/> Todos os Direitos Reservados</p>
        </div>
        <div className='flex ml-50 mt-7 mx-10'>
          <div className='flex justify-between'>
            <Link><img src="src/assets/imagens/instagram.png" alt="instagram" className='w-8 h-8 mr-5 transition duration-300 hover:scale-120'/></Link>
          </div>
          <div>
            <Link><img src="src/assets/imagens/whatsapp.png" alt="whatsapp" className='w-8 h-8 mr-5 transition duration-300 hover:scale-120'/></Link>
          </div>
          <div>
            <Link><img src="src/assets/imagens/email.png" alt="email" className='w-8.5 h-8.5 transition duration-300 hover:scale-120'/></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home