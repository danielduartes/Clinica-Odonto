import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Consultas() {
  const [consultas, setConsultas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

    // URL para exclusão (certifique-se de que o caminho está correto)
  const API_EXCLUIR_URL = 'http://localhost/Clinica-Odonto/admin/consultas-excluir.php'; // Alterado para o nome do arquivo PHP que você deve criar

  // Função para deletar a consulta
  const handleExcluir = async (id, paciente) => {
      if (!window.confirm(`Tem certeza que deseja excluir a consulta de ${paciente} (ID: ${id})?`)) {
          return; // Cancela a exclusão
      }

      try {
          const response = await fetch(API_EXCLUIR_URL, {
              method: 'POST', // Usamos POST no React para enviar o body, o PHP aceita.
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ id: id }),
          });

          const resultado = await response.json();
          
          if (response.ok) {
              alert(resultado.sucesso);
              // Atualiza a lista de consultas no frontend, removendo o item excluído
              setConsultas(consultas.filter(c => c.id !== id));
          } else {
              alert(`Erro ao excluir: ${resultado.erro || 'Erro desconhecido'}`);
              console.error(resultado);
          }
      } catch (error) {
          console.error('Erro de rede:', error);
          alert('Não foi possível conectar ao servidor para exclusão.');
      }
  };

  const API_URL = 'http://localhost/Clinica-Odonto/admin/consultas.php'; 

  useEffect(() => {
    const buscarConsultas = async () => {
      try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error(`Erro de rede: ${response.status}`);
        }
        
        const dados = await response.json();
        setConsultas(dados);
        
      } catch (error) {
        console.error("Houve um erro ao buscar as consultas:", error);
        setErro("Não foi possível carregar os dados. Verifique a API.");
      } finally {
        setCarregando(false);
      }
    };

    buscarConsultas();
  }, []);
  
  if (carregando) {
    return <div className="p-20 text-center">Carregando consultas...</div>;
  }

  if (erro) {
    return <div className="p-20 text-center text-red-600">{erro}</div>;
  }
  
  return (
    <>
      <div className='min-h-screen'>
        <div className='fixed top-0 left-0 w-full z-50 bg-sky-400'>
          <div className='bg-cyan-500 px-10 py-3 border-b-2 border-gray-400'>
            <div className='flex justify-between m-3'>
              <nav className='flex items-center ml-20 text-lg'>
                  {/* LINKS CORRIGIDOS, SEM CARACTERES ESPECIAIS */}
                <Link to="/admin" className='mx-10 font-semibold text-white hover:text-cyan-900'>Admin</Link>
                <Link to="/funcionarios" className='mx-10 font-semibold text-white hover:text-cyan-900'>Funcionários</Link>
                <Link to="/pacientes" className='mx-10 font-semibold text-white hover:text-cyan-900'>Pacientes</Link>
                <Link to="/consultas" className='mx-10 font-semibold text-white hover:text-cyan-900'>Consultas</Link>
                <Link to="/marcarconsulta" className='mx-10 font-semibold text-white hover:text-cyan-900'>Marcar Consulta</Link>
                <Link to="/cadastrarpaciente" className='mx-10 font-semibold text-white hover:text-cyan-900'>Cadastrar Paciente</Link>
              </nav>
              <div className='mr-10'>
                <p className='text-white text-xl font-sans font-medium'>Sorriso Raiz</p>
                <p className='text-white text-xs font-serif'>Dra. Juliana Medeiros</p>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-32 p-10'>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">📋 Lista de Consultas</h2>
          {consultas.length === 0 ? (
            <p className="text-gray-500">Nenhuma consulta agendada.</p>
          ) : (
            <div className="overflow-x-auto shadow-md rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-cyan-400">
                  <tr>
                    <th className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">ID</th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">Paciente</th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">CPF</th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">Data</th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">Hora</th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">Funcionário?</th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">Ações</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Mapeamento dos dados */}
                  {consultas.map((consulta) => (
                    <tr key={consulta.id} className="hover:bg-gray-50">
                      <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">{consulta.id}</td>
                      <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-700">{consulta.paciente}</td>
                      <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-700">{consulta.cpf}</td>
                      <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-700">{consulta.data}</td>
                      <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-700">{consulta.hora}</td>
                      <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-700">{consulta.funcionario}</td>
                      <td className="py-4 px-6 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handleExcluir(consulta.id, consulta.paciente)}
                          className="text-red-600 hover:text-red-900 bg-red-100 hover:bg-red-200 p-2 rounded-lg font-semibold transition duration-150"
                        >
                          Excluir 🗑️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
);
}

export default Consultas;