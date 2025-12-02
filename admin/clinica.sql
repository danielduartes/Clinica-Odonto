-- Cria o banco de dados se não existir
CREATE DATABASE IF NOT EXISTS clinica;
USE clinica;

CREATE TABLE pacientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    idade INT NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    telefone VARCHAR(20),
    endereco VARCHAR(255),
    sexo ENUM ('Masculino', 'Feminino', 'Outro') NOT NULL,
    funcionario ENUM ('Sim', 'Não') NOT NULL, 
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE dentistas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(15),
    email VARCHAR(100) UNIQUE,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE consultas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT NOT NULL,
    dentista_id INT NOT NULL, 
    
    data DATE NOT NULL,
    hora TIME NOT NULL,
    funcionario ENUM ('Sim', 'Não') NOT NULL,
    procedimento ENUM ('Avaliação Inicial', 'Limpeza', 'Fluorterapia', 'Selantes', 'Restaurações', 'Radiografias Odontológicas') NOT NULL, 
    
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (paciente_id) REFERENCES pacientes(id),
    FOREIGN KEY (dentista_id) REFERENCES dentistas(id)
);


CREATE TABLE mensagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    assunto VARCHAR(150) NOT NUL
    mensagem TEXT NOT NULL, 
    enviado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO dentistas (nome, telefone, email) VALUES
('Agamedes', '(83) 98765-4321', 'agamedes.d@clinica.com'),
('Caio', '(83) 97654-3210', 'caio.d@clinica.com'),
('Daniel', '(83) 96543-2109', 'daniel.d@clinica.com'),
('Murilo', '(83) 95432-1098', 'murilo.d@clinica.com'),
('Ricksson', '(83) 94321-0987', 'ricksson.d@clinica.com');