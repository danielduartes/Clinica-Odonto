import React from 'react';

import { Link } from 'react-router-dom';

function Contato() {
  return (
    <>
     {/* Header */}
      <div className='bg-white min-h-screen'>
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
        <div className='flex justify-between'>
          <div className='pt-60 pl-10 flex flex-col'>
            <div>
              <p className='text-cyan-500 text-3xl font-semibold'>Ajude-nos a melhorar <br/> nosso atendimento!</p>
            </div>
            <div className='pt-3'>
              <p className='text-sky-400 text-lg font-light'>Vamos criar algo juntos!</p>
            </div>
            <div className='bg-gray-200 mt-10 mr-64 w-60 flex justify-between pt-5 ml-66 rounded-lg'>
              <div className='bg-gray-400 w-12 h-12 rounded-lg ml-7'>
                <img src="src\assets\imagens\whatsapp.png" alt="whatsapp" className='w-8 h-8 content-center m-2'/>
              </div>
              <div className='pb-5 mr-10'>
                <div>
                  <p className='font-light'>WhatsApp</p>
                </div>
                <div>
                  <p className='font-light'>(83) 99129-2872</p>
                </div>
              </div>
            </div>
          </div>
          <form action="">
            <div className='mt-40 mr-70 '>
              <div className='bg-cyan-500 w-100 h-120 rounded-xl'>
                <div className='flex items-start'>
                  <p className='text-white text-lg mt-8 ml-10 font-semibold'>Mande-nos uma mensagem</p>
                </div>
                <div className='mt-5 mr-3'>
                  <input required type="text" name="nome" id="nome" className='bg-white h-8 w-80 rounded-xl px-4 invalid:border-pink-500 focus:border-cyan-800 focus:outline-cyan-800' placeholder='Nome Completo'/>
                </div>
                <div className='mt-5 mr-3'>
                  <input required type="email" name="email" id="email" className='bg-white h-8 w-80 rounded-xl px-4 invalid:border-pink-500 focus:border-cyan-800 focus:outline-cyan-800' placeholder='E-mail'/>
                </div>
                <div className='mt-5 mr-3'>
                  <input required type="text" name="assunto" id="assunto" className='bg-white h-8 w-80 rounded-xl px-4 invalid:border-pink-500 focus:border-cyan-800 focus:outline-cyan-800' placeholder='Assunto'/>
                </div>
                <div>
                  <p className='text-white font-semibold text-start ml-9 mt-5'>Mensagem</p>
                </div>
                <div className='mt-2 mr-3'>
                  <textarea required type="text" name="mensagem" id="mensagem" className='bg-white h-30 w-80 rounded-xl px-4 py-2 p text-start'/>
                </div>
                <div>
                  <button type='submit' className='mt-7 mr-65 text-white bg-cyan-800 hover:bg-sky-600 p-2 px-3 rounded-lg font-semibold'>Enviar</button>
                </div>
              </div>
            </div>
          </form>
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
  );
}

export default Contato;