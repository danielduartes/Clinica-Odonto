import React from 'react';
import { Link } from 'react-router-dom';

// Mapeamento dos links para criação automática dos cards (Mantido do código moderno)
const adminLinks = [
  { 
    title: 'Painel Admin', 
    description: 'Voltar para a visão geral.', 
    path: '/admin',
    color: 'hover:bg-cyan-500/90'
  },
  { 
    title: 'Pacientes', 
    description: 'Gerenciar cadastros de pacientes e históricos.', 
    path: '/admin/pacientes',
    color: 'hover:bg-indigo-500/90'
  },
  { 
    title: 'Consultas', 
    description: 'Visualizar, alterar e gerenciar agendamentos.', 
    path: '/admin/consultas',
    color: 'hover:bg-teal-500/90'
  },
  { 
    title: 'Mensagens', 
    description: 'Ver e responder mensagens de contato.', 
    path: '/admin/mensagens',
    color: 'hover:bg-amber-500/90'
  },
  { 
    title: 'Marcar Consulta', 
    description: 'Agendamento rápido de nova consulta.', 
    path: '/admin/marcarconsulta',
    color: 'hover:bg-lime-500/90'
  },
  { 
    title: 'Cadastrar Paciente', 
    description: 'Adicionar novo paciente ao sistema.', 
    path: '/admin/cadastrarpaciente',
    color: 'hover:bg-fuchsia-500/90'
  },
];


function Admin() {
  return (
    <>
      {/* Corpo com fundo cinza claro para modernizar a área de trabalho */}
      <div className='bg-gray-100 min-h-screen'>
        
        {/* === HEADER/NAVEGAÇÃO (ESTILO ORIGINAL RESTAURADO) === */}
        <div className='fixed top-0 left-0 w-full z-50 bg-sky-400'>
          <div className='bg-cyan-500 px-10 py-3 border-b-2 border-gray-400'> {/* Corrigi o bg para cyan-500 como no Consultas.jsx */}
            <div className='flex justify-between m-3'>
              
              {/* Links de Navegação */}
              <nav className='flex items-center ml-20 text-lg'>
                {/* Mapeia os links, mas usa a lógica de estilo do original, mantendo a ordem correta */}
                <Link to="/admin" className='mx-10 font-semibold text-white hover:text-cyan-900'>Admin</Link>
                <Link to="/admin/pacientes" className='mx-10 font-semibold text-white hover:text-cyan-900'>Pacientes</Link>
                <Link to="/admin/consultas" className='mx-10 font-semibold text-white hover:text-cyan-900'>Consultas</Link>
                <Link to="/admin/mensagens" className='mx-10 font-semibold text-white hover:text-cyan-900'>Mensagens</Link>
                <Link to="/admin/marcarconsulta" className='mx-10 font-semibold text-white hover:text-cyan-900'>Marcar Consulta</Link>
                <Link to="/admin/cadastrarpaciente" className='mx-10 font-semibold text-white hover:text-cyan-900'>Cadastrar Paciente</Link>
              </nav>
              
              {/* Informações da Clínica */}
              <div className='mr-10'>
                <p className='text-white text-xl font-sans font-medium'>Sorriso Raiz</p>
                <p className='text-white text-xs font-serif'>Dra. Juliana Medeiros</p>
              </div>
              
            </div>
          </div>
        </div>
        
        {/* === CONTEÚDO PRINCIPAL (Moderno) === */}
        <main className='pt-28 p-8 max-w-7xl mx-auto'>
          
          <div className='mb-10'>
            <h1 className='text-3xl font-extrabold text-gray-900'>
              Bem-vindo(a) ao Painel Administrativo 🦷
            </h1>
            <p className='text-gray-500 mt-2'>Visão geral e acesso rápido às funcionalidades principais da clínica.</p>
          </div>

          <hr className="mb-8" />

          {/* === GRID DE ACESSO RÁPIDO (CARDS) === */}
          <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {adminLinks.slice(1).map((item) => ( // Uso .slice(1) para não incluir o link "Admin" repetido
              <Link 
                key={item.path} 
                to={item.path} 
                className={`group bg-white p-6 rounded-xl shadow-md border border-gray-200 transition duration-300 ease-in-out transform hover:scale-[1.02] ${item.color} hover:shadow-xl`}
              >
                <div className="flex items-center justify-between">
                    <span className="text-4xl text-cyan-600 group-hover:text-white">⭐</span>
                </div>
                <div className="mt-4">
                  <h2 className='text-xl font-bold text-gray-800 group-hover:text-white'>
                    {item.title}
                  </h2>
                  <p className='text-sm text-gray-500 mt-1 group-hover:text-gray-200'>
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}

export default Admin;