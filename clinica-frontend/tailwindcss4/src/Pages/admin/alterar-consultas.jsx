import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function AlterarConsulta() {
    // 1. Estados e Hooks
    const { id } = useParams(); 
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        id: id,
        data: '',
        hora: '',
        paciente: '', // Nome do Paciente (String)
        cpf: '',      // CPF do Paciente (String)
        dentista: '', // Nome do Dentista (String)
        procedimento: '',
        funcionario: 'Não', 
    });
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);
    // REMOVIDO: [pacientes, setPacientes] não é mais necessário
    const [dentistas, setDentistas] = useState([]); // Lista de Dentistas (Ainda é alterável)

    // URLs das APIs
    const API_BUSCA_ID = `http://localhost/Clinica-Odonto/admin/consultas-buscar-id.php?id=${id}`;
    const API_ATUALIZAR = 'http://localhost/Clinica-Odonto/admin/consultas-altera.php'; 
    // REMOVIDO: API_PACIENTES não é mais necessária
    const API_DENTISTAS = 'http://localhost/Clinica-Odonto/admin/dentistas.php';

    // 2. Carregamento de Dados Iniciais
    useEffect(() => {
        const buscarLista = async (url, setter) => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Falha ao carregar lista de dentistas.');
                const dados = await response.json();
                setter(dados);
            } catch (error) {
                console.error(`Erro ao carregar lista: ${url}`, error);
            }
        };

        const buscarConsulta = async () => {
            try {
                setErro(null);

                // Carrega apenas a lista de Dentistas (que ainda é alterável)
                await buscarLista(API_DENTISTAS, setDentistas);

                // Buscar dados da consulta
                const response = await fetch(API_BUSCA_ID);
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Erro de rede ou servidor: ${response.status} - ${errorText.substring(0, 100)}`);
                }
                
                const dados = await response.json();

                if (dados.erro) {
                    setErro(dados.erro);
                } else {
                    // Preenche o formulário com os campos de TEXTO
                    setFormData({
                        id: id,
                        data: dados.data || '',
                        hora: dados.hora || '',
                        paciente: dados.paciente || '', // Ficará readOnly
                        cpf: dados.cpf || '',           // Ficará readOnly
                        dentista: dados.dentista || '', 
                        procedimento: dados.procedimento || '',
                        funcionario: dados.funcionario || 'Não', 
                    });
                }
            } catch (error) {
                console.error("Houve um erro ao buscar a consulta:", error);
                setErro(`Não foi possível carregar os dados da consulta. Detalhes: ${error.message}`);
            } finally {
                setCarregando(false);
            }
        };

        buscarConsulta();
    }, [id]);

    // 3. Funções de Manipulação (handlePacienteChange foi removida)
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
        
        // A validação do Paciente é removida, mas a do Dentista é mantida
        if (formData.dentista === "") {
            alert("Por favor, selecione um Dentista válido.");
            return;
        }

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
                navigate('/admin/consultas');
            } else {
                alert(`Erro ao alterar: ${resultado.erro || 'Erro desconhecido'}`);
                console.error(resultado);
            }
        } catch (error) {
            console.error('Erro de rede:', error);
            alert('Não foi possível conectar ao servidor para atualização.');
        }
    };


    // 5. Renderização Condicional (Carregamento / Erro)
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
    
    // 6. Renderização do Formulário
    return (
        <>
            <div className='min-h-screen bg-gray-100'>
                {/* Header (Mantido conforme seu código) */}
                <div className='fixed top-0 left-0 w-full z-50 bg-sky-400'>
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
                        
                        {/* NOVO CAMPO PACIENTE: Apenas Leitura (Input) */}
                        <div className="mb-4">
                            <label htmlFor="paciente" className="block text-sm font-medium text-gray-700">Paciente</label>
                            <input
                                type="text"
                                id="paciente"
                                name="paciente"
                                value={formData.paciente}
                                readOnly // Impede a alteração
                                className="mt-1 block w-full border border-gray-300 bg-gray-100 rounded-md shadow-sm p-2"
                            />
                        </div>

                        {/* Campo CPF: Apenas Leitura (Input) */}
                        <div className="mb-4">
                            <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">CPF</label>
                            <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                value={formData.cpf}
                                readOnly 
                                className="mt-1 block w-full border border-gray-300 bg-gray-100 rounded-md shadow-sm p-2"
                            />
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

                        {/* Campo Dentista (Permanece Select para alteração) */}
                        <div className="mb-4">
                            <label htmlFor="dentista" className="block text-sm font-medium text-gray-700">Dentista</label>
                            <select
                                id="dentista"
                                name="dentista"
                                value={formData.dentista}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-cyan-500 focus:ring-cyan-500"
                            >
                                <option value="">Selecione o Dentista</option>
                                {dentistas.map(d => (
                                    <option key={d.id} value={d.nome}>{d.nome}</option>
                                ))}
                            </select>
                        </div>

                        {/* Campo Procedimento */}
                        <div className="mb-4">
                            <label htmlFor="procedimento" className="block text-sm font-medium text-gray-700">Procedimento</label>
                            <select
                                id="procedimento"
                                name="procedimento"
                                value={formData.procedimento}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-cyan-500 focus:ring-cyan-500"
                            >
                                <option value="">Selecione o Procedimento</option>
                                <option value="Avaliação Inicial">Avaliação Inicial</option>
                                <option value="Limpeza">Limpeza</option>
                                <option value="Fluorterapia">Fluorterapia</option>
                                <option value="Selantes">Selantes</option>
                                <option value="Restaurações">Restaurações</option>
                                <option value="Radiografias Odontológicas">Radiografias Odontológicas</option>
                            </select>
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