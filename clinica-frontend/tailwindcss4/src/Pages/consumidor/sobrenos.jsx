import React from 'react';
import { Link } from 'react-router-dom';

function Sobrenos() {
  return (
    <>
    {/* Header */}
      <div className='bg-white min-h-screen'>
        <div className='fixed top-0 left-0 w-full z-50 bg-cyan-900'>
          <div className='bg-cyan-800 px-10 py-3 border-b-2 border-gray-400'>
            <div className='flex justify-between my-3 ml-2'>
              <nav className='flex items-center text-lg'>
                <Link to='/' className='mx-10 font-semibold text-white hover:text-cyan-300'>Home</Link>
                <Link to='/sobrenos' className='mx-10 font-semibold text-white hover:text-cyan-300'>Sobre Nós</Link>
                <Link to='/contato' className='mx-10 font-semibold text-white hover:text-cyan-300'>Contato</Link>
              </nav>
              <div className='mr-10'>
                <p className='text-white text-xl font-sans font-medium'>Clínica Odonto</p>
                <p className='text-white text-xs font-serif'>Dra. Juliana Medeiros</p>
              </div>
            </div>
          </div>
        </div>

        {/* Página - Titulo */}
        <div className='pt-40 px-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-10'>
          <div className='md:w-1/2 text-left'>
          <h1 className="text-6xl font-bold text-cyan-900 mb-6" style={{ fontSize: '60px' }}>Sobre Nós</h1>


        {/* Página - Texto */}
          <p className='text-gray-700 text-lg leading-relaxed mb-4'>
            A Sorriso Raiz é uma clínica odontológica localizada em João Pessoa – PB,
            criada para oferecer um atendimento humano, moderno e acolhedor. Nosso
            propósito é devolver saúde, bem-estar e confiança por meio de tratamentos
            odontológicos feitos com técnica, cuidado e respeito.
          </p>

          <p className='text-gray-700 text-lg leading-relaxed mb-4'>
            Acreditamos que cada paciente tem uma história, e cada sorriso merece
            atenção especial. Por isso, trabalhamos de forma personalizada, unindo
            tecnologia, precisão e um ambiente que faz você se sentir em casa.
          </p>

          <p className='text-gray-700 text-lg leading-relaxed mb-4'>
            Nossa equipe é formada por cinco dentistas que compartilham valores,
            experiência e paixão pela odontologia:
          </p>
        </div>

        {/* Página - Caixas */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-1/2'>
            <div className='p-5 rounded-xl shadow' style={{ backgroundColor: '#005f78' }}>
              <h2 className='font-bold text-white text-lg mb-2'>Dr. Agamedes Rodrigues</h2>
              <p className='text-white text-sm'>Dentista que une técnica e 
                acolhimento para tratamentos seguros e personalizados.</p>
            </div>

            <div className='bg-gray-300 p-5 rounded-xl shadow'>
              <h2 className='font-bold text-cyan-900 text-lg mb-2'>Dr. Caio Vinicius</h2>
              <p className='text-gray-700 text-sm'>Especialista em estética e reabilitação, 
                sempre atento à harmonia e funcionalidade do sorriso.</p>
            </div>

            <div className='bg-gray-300 p-5 rounded-xl shadow'>
              <h2 className='font-bold text-cyan-900 text-lg mb-2'>Dr. Daniel Duarte</h2>
              <p className='text-gray-700 text-sm'>Profissional dedicado à odontologia clínica, 
                focado em prevenção, diagnóstico preciso e cuidado integral.</p>
            </div>

            <div className='p-5 rounded-xl shadow' style={{ backgroundColor: '#005f78' }}>
              <h2 className='font-bold text-white text-lg mb-2'>Dr. Daniel Flor</h2>
              <p className='text-white text-sm'>Dentista que preza pela qualidade, 
                sensibilidade e atenção às necessidades de cada paciente.</p>
            </div>

            <div className='p-5 rounded-xl shadow' style={{ backgroundColor: '#005f78' }}>
              <h2 className='font-bold text-white text-lg mb-2'>Dr. Ricksson Medeiros</h2>
              <p className='text-white text-sm'>Profissional que acompanha de perto as inovações da odontologia
                 para oferecer tratamentos modernos e confortáveis.</p>
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
            <Link to={"https://www.instagram.com/draronisemedeiros/"} target='_blank'><img src="src/assets/imagens/instagram.png" alt="instagram" className='w-8 h-8 mr-5 transition duration-300 hover:scale-120'/></Link>
          </div>
          <div>
            <Link to={"https://api.whatsapp.com/send?text=https%3A%2F%2Fshare.google%2Fmt5vTDUvSNM68jJES"} target='_blank'><img src="src/assets/imagens/whatsapp.png" alt="whatsapp" className='w-8 h-8 mr-5 transition duration-300 hover:scale-120'/></Link>
          </div>
          <div>
            <Link><img src="src/assets/imagens/email.png" alt="email" className='w-8.5 h-8.5 transition duration-300 hover:scale-120'/></Link>
          </div>
        </div>
      </div>

    </>
  );
}

export default Sobrenos;
