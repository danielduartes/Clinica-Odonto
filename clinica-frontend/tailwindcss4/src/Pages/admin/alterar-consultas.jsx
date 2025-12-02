  import React, { useState, useEffect } from 'react';
  import { useParams, useNavigate, Link } from 'react-router-dom';

  function AlterarConsulta() {
    // 1. Capturar o ID da URL
    const { id } = useParams(); 
    const navigate = useNavigate();

    // Estados
    const [formData, setFormData] = useState({
      id: id, // Garantir que o ID esteja no formData
      data: '',
      hora: '',
      paciente_id: '',
      dentista_id: '',
      procedimento: '',
      funcionario: 'Não', // Valor padrão, ajuste conforme necessário
    });
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);
    const [pacientes, setPacientes] = useState([]); // Para o Select de Pacientes
    const [dentistas, setDentistas] = useState([]); // Para o Select de Dentistas

    // URLs das APIs
    const API_BUSCA_ID = `http://localhost/Clinica-Odonto/admin/consultas-buscar-id.php?id=${id}`;
    const API_ATUALIZAR = 'http://localhost/Clinica-Odonto/admin/consultas-altera.php'; 
    const API_PACIENTES = 'http://localhost/Clinica-Odonto/admin/pacientes.php'; // API para buscar lista de pacientes (se houver)
    const API_DENTISTAS = 'http://localhost/Clinica-Odonto/admin/dentistas.php';


    // 2. useEffect para carregar dados iniciais (consulta, pacientes e dentistas)
    useEffect(() => {
      // Função para buscar uma lista de dados (Pacientes/Dentistas)
      const buscarLista = async (url, setter) => {
          try {
              const response = await fetch(url);
              if (!response.ok) throw new Error('Falha ao carregar lista.');
              const dados = await response.json();
              setter(dados);
          } catch (error) {
              console.error(error);
              // setErro(`Erro ao carregar lista de ${url.includes('pacientes') ? 'Pacientes' : 'Dentistas'}`);
          }
      };

      // Função para buscar os dados da consulta específica
      const buscarConsulta = async () => {
        try {
          setErro(null);
          // Buscar listas primeiro
          await buscarLista(API_PACIENTES, setPacientes);
          await buscarLista(API_DENTISTAS, setDentistas);

          // Buscar dados da consulta
          const response = await fetch(API_BUSCA_ID);
          if (!response.ok) throw new Error(`Erro de rede: ${response.status}`);
          
          const dados = await response.json();

          if (dados.erro) {
              setErro(dados.erro);
          } else {
              // Preenche o formulário com os dados retornados
              setFormData({
                  id: id,
                  data: dados.data,
                  hora: dados.hora,
                  paciente_id: dados.paciente_id,
                  dentista_id: dados.dentista_id,
                  procedimento: dados.procedimento,
                  funcionario: dados.funcionario || 'Não', 
              });
          }
        } catch (error) {
          console.error("Houve um erro ao buscar a consulta:", error);
          setErro("Não foi possível carregar os dados da consulta.");
        } finally {
          setCarregando(false);
        }
      };

      buscarConsulta();
    }, [id]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    // 4. Função de Submissão para Atualização
    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await fetch(API_ATUALIZAR, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const resultado = await response.json();
        
        if (response.ok) {
          alert(resultado.sucesso || 'Consulta alterada com sucesso!');
          navigate('/admin/consultas'); // Redireciona para a lista de consultas
        } else {
          alert(`Erro ao alterar: ${resultado.erro || 'Erro desconhecido'}`);
          console.error(resultado);
        }
      } catch (error) {
        console.error('Erro de rede:', error);
        alert('Não foi possível conectar ao servidor para atualização.');
      }
    };


    // Estados de Carregamento e Erro
    if (carregando) {
      return (
          <div className="pt-32 p-10 text-center">
              <p className="text-xl text-cyan-600">Carregando dados da consulta ID: {id}...</p>
          </div>
      );
    }

    if (erro) {
      return (
          <div className="pt-32 p-10 text-center text-red-600">
              <p className="text-2xl font-bold">❌ Erro ao Carregar Consulta</p>
              <p className="mt-2">{erro}</p>
              <Link to="/admin/consultas" className="mt-4 inline-block text-cyan-600 hover:text-cyan-800">
                  Voltar para a lista de Consultas
              </Link>
          </div>
      );
    }
    
    // 5. Renderização do Formulário de Edição
    return (
      <>
        <div className='min-h-screen bg-gray-100'>
          {/* Usar o Header fixo que você tem em outros componentes */}
          <div className='fixed top-0 left-0 w-full z-50 bg-sky-400'>
            {/* ... (Inserir o código do seu header aqui) ... */}
            <div className='bg-cyan-500 px-10 py-3 border-b-2 border-gray-400'> 
              <div className='flex justify-between m-3'>
                <nav className='flex items-center ml-20 text-lg'>
                  <Link to="/admin" className='mx-10 font-semibold text-white hover:text-cyan-900'>Admin</Link>
                  <Link to="/admin/pacientes" className='mx-10 font-semibold text-white hover:text-cyan-900'>Pacientes</Link>
                  <Link to="/admin/consultas" className='mx-10 font-semibold text-white hover:text-cyan-900'>Consultas</Link>
                  <Link to="/admin/mensagens" className='mx-10 font-semibold text-white hover:text-cyan-900'>Mensagens</Link>
                  <Link to="/admin/marcarconsulta" className='mx-10 font-semibold text-white hover:text-cyan-900'>Marcar Consulta</Link>
                  <Link to="/admin/cadastrarpaciente" className='mx-10 font-semibold text-white hover:text-cyan-900'>Cadastrar Paciente</Link>
                </nav>
                <div className='mr-10'>
                  <p className='text-white text-xl font-sans font-medium'>Sorriso Raiz</p>
                  <p className='text-white text-xs font-serif'>Dra. Juliana Medeiros</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className='pt-32 p-10 max-w-4xl mx-auto'>
            <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-2">✏️ Alterar Consulta (ID: {id})</h2>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl">
              
              {/* Campo Paciente (Usando Select com a lista) */}
              <div className="mb-4">
                <label htmlFor="paciente_id" className="block text-sm font-medium text-gray-700">Paciente</label>
                <select
                  id="paciente_id"
                  name="paciente_id"
                  value={formData.paciente_id}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-cyan-500 focus:ring-cyan-500"
                >
                  <option value="">Selecione o Paciente</option>
                  {pacientes.map(p => (
                      <option key={p.id} value={p.id}>{p.nome} (CPF: {p.cpf})</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* Campo Data */}
                  <div>
                      <label htmlFor="data" className="block text-sm font-medium text-gray-700">Data</label>
                      <input
                          type="date"
                          id="data"
                          name="data"
                          value={formData.data}
                          onChange={handleChange}
                          required
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-cyan-500 focus:ring-cyan-500"
                      />
                  </div>
                  {/* Campo Hora */}
                  <div>
                      <label htmlFor="hora" className="block text-sm font-medium text-gray-700">Hora</label>
                      <input
                          type="time"
                          id="hora"
                          name="hora"
                          value={formData.hora}
                          onChange={handleChange}
                          required
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-cyan-500 focus:ring-cyan-500"
                      />
                  </div>
              </div>

              {/* Campo Dentista (Usando Select com a lista) */}
              <div className="mb-4">
                <label htmlFor="dentista_id" className="block text-sm font-medium text-gray-700">Dentista</label>
                <select
                  id="dentista_id"
                  name="dentista_id"
                  value={formData.dentista_id}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-cyan-500 focus:ring-cyan-500"
                >
                  <option value="">Selecione o Dentista</option>
                  {dentistas.map(d => (
                      <option key={d.id} value={d.id}>{d.nome}</option>
                  ))}
                </select>
              </div>

              {/* Campo Procedimento */}
              <div className="mb-4">
                  <label htmlFor="procedimento" className="block text-sm font-medium text-gray-700">Procedimento</label>
                  <input
                      type="text"
                      id="procedimento"
                      name="procedimento"
                      value={formData.procedimento}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-cyan-500 focus:ring-cyan-500"
                      placeholder="Ex: Limpeza, restauração, etc."
                  />
              </div>
              
              {/* Campo Funcionário */}
              <div className="mb-6">
                  <label htmlFor="funcionario" className="block text-sm font-medium text-gray-700">Funcionário?</label>
                  <select
                      id="funcionario"
                      name="funcionario"
                      value={formData.funcionario}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-cyan-500 focus:ring-cyan-500"
                  >
                      <option value="Não">Não</option>
                      <option value="Sim">Sim</option>
                  </select>
              </div>


              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => navigate('/admin/consultas')}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-150"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 transition duration-150 shadow-md"
                >
                  Salvar Alterações
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }

  export default AlterarConsulta;