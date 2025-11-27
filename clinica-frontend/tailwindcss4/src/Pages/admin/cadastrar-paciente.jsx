import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

function CadastrarPaciente() {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    email: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/Clinica-Odonto/admin/pacientes-cadastrar.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let resultado;
      try {
          resultado = await response.json();
      } catch (e) {
          resultado = { erro: 'Erro no servidor: Resposta não é um JSON válido.' };
      }

      if (response.ok) {
        alert('Paciente cadastrado com sucesso!');
        navigate('/pacientes');
      } else {
        alert(`Erro ao agendar: ${resultado.erro || 'Erro desconhecido'}`);
        console.error(resultado);
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      alert('Não foi possível conectar ao servidor.');
    }
  };

  return (
    <>
      <div className='min-h-screen'>
        <div className='fixed top-0 left-0 w-full z-50 bg-sky-400'>
          <div className='bg-cyan-500 px-10 py-3 border-b-2 border-gray-400'>
            <div className='flex justify-between m-3'>
              <nav className='flex items-center ml-20 text-lg'>
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
        <div className='bg-sky-700 w-130 h-140 ml-130 mt-30 rounded-xl shadow-2xl'>
          <form onSubmit={handleSubmit}>
            <div className='text-start pt-7 pl-7 font-semibold'>
              <p className='text-white'>Preencha o formulário para cadastrar o paciente</p>
            </div>
            <div className='text-start'>
              <input required type="text" name="nome" id="nome" placeholder='Nome' value={formData.nome} onChange={handleChange} className='bg-white mt-10 ml-15 w-70 h-9 rounded-lg px-3'/>
            </div>
            <div className='text-start'>
              <input required type="text" name="cpf" id="cpf" placeholder='CPF' value={formData.cpf} onChange={handleChange} className='bg-white mt-5 ml-15 w-70 h-9 rounded-lg px-3'/>
            </div>
            <div className='text-start'>
              <input required type="tel" name="telefone" id="telefone" placeholder='(xx) xxxxx-xxxx' value={formData.telefone} onChange={handleChange} className='bg-white mt-5 ml-15 w-40 h-9 rounded-lg px-3'/>
            </div>
            <div className='text-start'>
              <input required type="email" name="email" id="email" placeholder='you@example.com' value={formData.email} onChange={handleChange} className='bg-white mt-5 ml-15 w-70 h-9 rounded-lg px-3'/>
            </div>
            <div className='text-start mt-7'>
              <p className='ml-15 text-white font-semibold'>Selecione se o paciente é um funcionário ou não</p>
              <select required name="funcionario" id="funcionario" value={formData.funcionario} onChange={handleChange} className='bg-white mt-5 ml-15 w-19 h-9 rounded-lg px-3'>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
            </div>
            <div className='text-start ml-15 mt-5'>
              <button type='submit' className='mt-7 mr-65 text-white bg-cyan-400 hover:bg-sky-600 p-2 px-3 rounded-lg font-semibold'>Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CadastrarPaciente;