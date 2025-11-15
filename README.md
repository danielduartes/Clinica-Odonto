🦷 Clínica Odonto — Sistema de Login & Cadastro (PHP)

Este repositório contém o início do sistema da Clínica Odonto.
Até o momento, foram desenvolvidas duas páginas principais:

Página de Cadastro (cadastro.php)

Página de Login (login.php)

Arquivo de conexão com o banco (conexao.php)

CSS simples com tema azul claro

 Funcionalidades Implementadas:
 Cadastro de Usuários

Campos incluídos:

Nome completo

CPF (com validação)

Email (com validação)

Nome de usuário

Senha (armazenada com hash)

O usuário é registrado no banco de dados clinica, tabela usuarios.

✔ Login

O usuário acessa o sistema informando:

Nome de usuário

Senha

A senha é verificada usando password_verify().

✔ Banco de Dados

Até agora o banco possui apenas uma tabela:

usuarios
(id, nome_completo, cpf, email, usuario, senha, criado_em)


Você pode importar o arquivo clinica.sql incluído no projeto.

Como Executar o Projeto

Coloque a pasta do projeto no diretório do seu servidor local
(ex: htdocs no XAMPP ou www no WAMP).

Inicie o servidor Apache e o MySQL.

Importe o arquivo clinica.sql no phpMyAdmin.

Ajuste seu conexao.php se necessário:

$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "clinica";


Abra no navegador:

http://localhost/Clinica-Odonto/cadastro.php

http://localhost/Clinica-Odonto/login.php


 Próximos Passos (ainda não implementados)

Painel interno após login

Controle de pacientes

Agendamentos

Área administrativa
