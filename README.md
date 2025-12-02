# 🦷 Projeto FullStack — Clínica Odontológica Sorriso Raiz

## 📌 Sobre o Projeto

O **Sorriso Raiz** é um sistema FullStack desenvolvido para otimizar e automatizar a rotina de uma clínica odontológica.  
Seu objetivo é facilitar a gestão de pacientes, consultas e atendimentos, garantindo organização, acessibilidade e eficiência no dia a dia da clínica.

Este repositório reúne toda a aplicação — **FrontEnd, BackEnd e Banco de Dados**, seguindo boas práticas de desenvolvimento, modularização e segurança.

A plataforma conta com:

- Site institucional (Landing Page)
- Painel administrativo com autenticação de usuários
- Gerenciamento de pacientes e consultas
- Integração com banco de dados real

> O sistema foi planejado para proporcionar **mais praticidade, segurança e clareza** no registro e acompanhamento das informações, contribuindo para um atendimento profissional e ágil.

---

## 🚀 Funcionalidades
### ⭐ Landing Page (Área Pública)
Página de apresentação acessível a todos os usuários e visitantes, com foco institucional.

- **Home:** Apresentação geral do sistema e da clínica.
- **Sobre Nós:** Informações sobre a clínica, propósito, valores e equipe.
- **Contato:** Canal rápido para comunicação e informações de atendimento.

### 🔐 Área Administrativa (Somente Secretários Cadastrados)

Seção restrita, acessível apenas mediante autenticação de usuários autorizados.

#### 📌 Páginas e Recursos:
- **🏠 Admin — Página Inicial:**  
  Painel principal com acesso às funcionalidades internas.

- **👤 Tabela de Pacientes:**  
  Visualização e gerenciamento dos pacientes cadastrados.  
  É possível verificar informações completas dos pacientes, como:
  - Nome completo  |  CPF  
  - E-mail  | Telefone  
  - Endereço  |  Outras informações relevantes registradas no banco de dados 

- **📅 Tabela de Consultas:**  
  Controle detalhado de todas as consultas registradas.  
  Nesta página é possível visualizar:
  - Data da consulta  |  Hora da consulta  
  - Paciente vinculado  |  Dentista responsável  
  - Status da consulta (agendada, confirmada, cancelada, etc.)

- **📝 Marcar Consulta:**  
  Formulário para registrar novas consultas, selecionando paciente, data, horário e procedimento.

- **➕ Cadastrar Pacientes:**  
  Tela para inclusão de novos pacientes na base de dados, com validação e armazenamento seguro das informações.

---

## 🧰 Como Iniciar o Projeto

### 🗄️ Banco de Dados
1. Instale e execute o **XAMPP**.
2. Acesse o **phpMyAdmin**.
3. Importe o arquivo **`clinica.sql`**, localizado no repositório:  
   `Clinica-Odonto/clinica.sql`
4. O banco de dados será criado com todas as tabelas necessárias para o sistema.
5. A pasta do repositório deve estar dentro da pasta "htdocs"

### 🎨 FrontEnd (Landing Page + Área Administrativa)
O front-end foi desenvolvido em **React**.

#### 📌 Requisitos
- Node.js instalado (Download oficial: https://www.nodejs.org)

#### 📌 Passo a passo (terminal)
1. Acesse o diretório do front-end:
   ```bash
   cd "clinica-frontend/tailwindcss4"
2. Instale as dependências e o tailwindcss/vite:
   ```bash
   npm install
   npm install tailwindcss @tailwindcss/vite
3. Inicie o Projeto:
   ```bash
   npm run dev
   
 #### Caso tenha dúvidas assista esse material de apoio: https://www.youtube.com/watch?v=sHnG8tIYMB4

---


## 🛠️ Tecnologias Utilizadas

| 🔹 Frontend | 🔹 Backend | 🔹 Banco de Dados |
|-----------|-----------|-----------------|
| **React** | **PHP** | **MySQL** |
| Tailwind CSS | PHPMyAdmin | |
| React Router | Apache (XAMPP / WAMP / Laragon) | |

## 👥 Equipe de Desenvolvimento

| Desenvolvedor | Funções |
|-------------|--------|
| **Daniel Duarte** | FrontEnd, BackEnd e Banco de Dados |
| **Agamedes Rodrigues** | FrontEnd, BackEnd, Banco de Dados e Documentação |
| **Caio Vinicius** | FrontEnd, Backend(pagina cadastro) e Banco de Dados |
| **Ricksson Medeiros** | BackEnd e Banco de Dados |
| **Daniel Flor** | BackEnd e Banco de Dados |

## 🎓 Contexto Acadêmico

Este projeto foi desenvolvido como parte da avaliação da cadeira de **Programação Web**, ministrada pelo professor **Daniel Brandão**.  
Seu objetivo acadêmico é aplicar conceitos de desenvolvimento FullStack em um cenário real, envolvendo front-end, back-end e integração com banco de dados.

---

## 📄 Licença

Este projeto é de uso livre para fins acadêmicos e profissionais.  
Qualquer uso comercial completo deve ser previamente acordado.

