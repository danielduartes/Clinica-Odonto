import React from 'react';

import { Link } from 'react-router-dom';

function Admin() {
  return (
    <>
      <div className='bg-cyan-400 min-h-screen'>
        <div className='fixed top-0 left-0 w-full z-50 bg-sky-400'>
          <div className='bg-cyan-400 px-10 py-3 border-b-2 border-gray-400'>
            <div className='flex justify-between m-3'>
              <nav className='flex items-center ml-20 text-lg'>
                <Link to="/admin" className='mx-10 font-semibold text-white hover:text-cyan-900'>Admin</Link>
                <Link to="/funcionarios" className='mx-10 font-semibold text-white hover:text-cyan-900'>Funcionários</Link>
                <Link to="/pacientes" className='mx-10 font-semibold text-white hover:text-cyan-900'>Pacientes</Link>
                <Link to="/consultas" className='mx-10 font-semibold text-white hover:text-cyan-900'>Consultas</Link>
                <Link to="/marcarconsulta" className='mx-10 font-semibold text-white hover:text-cyan-900'>Marcar Consulta</Link>
              </nav>
              <div className='mr-10'>
                <p className='text-white text-xl font-sans font-medium'>Sorriso Raiz</p>
                <p className='text-white text-xs font-serif'>Dra. Juliana Medeiros</p>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-40'>
            <div>
                <p className='text-2xl text-white font-semibold'>Bem-vindo à página do administrador</p>
            </div>
            <div>
                
            </div>
        </div>
      </div>
    </>
  );
}

export default Admin;