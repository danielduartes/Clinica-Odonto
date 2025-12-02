import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Mensagens() {
  const [mensagens, setMensagens] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  const API_URL = 'http://localhost/Clinica-Odonto/admin/mensagens.php'; 
  const API_EXCLUIR_URL = 'http://localhost/Clinica-Odonto/admin/mensagens-excluir.php'; // Adicionado URL de exclusão

  // Adicionada a função para deletar o paciente
  const handleExcluir = async (id, nome) => {
      if (!window.confirm(`Tem certeza que deseja excluir esta mensagem de ${nome} (ID: ${id})?`)) {
          return;
      }

      try {
          const response = await fetch(API_EXCLUIR_URL, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ id: id }),
          });

          const resultado = await response.json();
          
          if (response.ok) {
              alert(resultado.sucesso);
              setMensagens(mensagens.filter(p => p.id !== id));
          } else {
              alert(`Erro ao excluir: ${resultado.erro || 'Erro desconhecido'}`);
              console.error(resultado);
          }
      } catch (error) {
          console.error('Erro de rede:', error);
          alert('Não foi possível conectar ao servidor para exclusão.');
      }
  };

  useEffect(() => {
    const buscarMensagens = async () => {
      try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error(`Erro de rede: ${response.status}`);
        }
        
        const dados = await response.json();
        setMensagens(dados);
        
      } catch (error) {
        console.error("Houve um erro ao buscar os pacientes:", error);
        setErro("Não foi possível carregar os dados. Verifique a API.");
      } finally {
        setCarregando(false);
      }
    };

    buscarMensagens();
  }, []);
  if (carregando) {
    return <div className="p-20 text-center">Carregando pacientes...</div>;
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
                <Link to="/admin" className='mx-10 font-semibold text-white hover:text-cyan-900'>Admin</Link>
                <Link to="/admin/pacientes" className='mx-10 font-semibold text-white hover:text-cyan-900'>Pacientes</Link>
                <Link to="/admin/consultas" className='mx-10 font-semibold text-white hover:text-cyan-900'>Consultas</Link>
                <Link to="/admin/mensagens" className='mx-10 font-semibold text-white hover:text-cyan-900'>Mensagens</Link>
                <Link to="/admin/marcarconsulta" className='mx-10 font-semibold text-white hover:text-cyan-900'>Marcar Consulta</Link>
                <Link to="/admin/cadastrarpaciente" className='mx-10 font-semibold text-white hover:text-cyan-900'>Cadastrar Pacientes</Link>
              </nav>
              <div className='mr-10'>
                <p className='text-white text-xl font-sans font-medium'>Sorriso Raiz</p>
                <p className='text-white text-xs font-serif'>Dra. Juliana Medeiros</p>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-32 p-10'>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">📋 Lista de Mensagens</h2>
          {mensagens.length === 0 ? (
            <p className="text-gray-500">Nenhuma mensagem foi enviada.</p>
          ) : (
            <div className="overflow-x-auto shadow-md rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-cyan-400">
                  <tr>
                    <th className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">ID</th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">Nome</th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">E-mail</th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">Assunto</th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">Mensagem</th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">Ações</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Mapeamento dos dados */}
                  {mensagens.map((mensagem) => (
                    <tr key={mensagem.id} className="hover:bg-gray-50">
                      <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">{mensagem.id}</td>
                      <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-700">{mensagem.nome}</td>
                      <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-700">{mensagem.email}</td>
                      <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-700">{mensagem.assunto}</td>
                      <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-700">{mensagem.mensagem}</td>
                      <td className="py-4 px-6 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handleExcluir(mensagem.id, mensagem.nome)}
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

export default Mensagens;