<?php
// 1. Configuração de Headers e Permissões (CORS)
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Permite requisições de qualquer origem (seu React)
header('Access-Control-Allow-Methods: POST, OPTIONS'); // Permite apenas POST e OPTIONS
header('Access-Control-Allow-Headers: Content-Type');

// Trata requisições OPTIONS (pré-voo do CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Verifica se o método é POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Método Não Permitido
    echo json_encode(["erro" => "Método não suportado. Use POST."]);
    exit();
}

// 2. Receber e Decodificar o JSON do React
// O React envia os dados no corpo da requisição como JSON
$json_data = file_get_contents("php://input");
$data = json_decode($json_data, true); // Converte JSON para um array associativo PHP

// 3. Validação de Dados Recebidos
// Verifica se os campos obrigatórios estão presentes
if (empty($data['nome']) || empty($data['cpf']) || empty($data['telefone']) || empty($data['email'])) {
    http_response_code(400); // Requisição Inválida (Bad Request)
    echo json_encode(["erro" => "Preencha todos os campos obrigatórios."]);
    exit();
}

// 4. Configurações do Banco de Dados (PDO)
$host = 'localhost';
$db   = 'clinica'; // <--- **MUDE ESTE NOME!**
$user = 'root';              
$pass = '';                  
$charset = 'utf8mb4';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";


// 5. Conexão e Inserção no Banco de Dados
try {
     $pdo = new PDO($dsn, $user, $pass);
     $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

     // Prepara a query de inserção (Segurança contra SQL Injection)
     $sql = "INSERT INTO pacientes (nome, cpf, telefone, email, funcionario) 
             VALUES (:nome, :cpf, :telefone, :email, :funcionario)";
             
     $stmt = $pdo->prepare($sql);

     // Executa a inserção, usando os dados decodificados do JSON
     $stmt->execute([
         'nome' => $data['nome'],
         'cpf' => $data['cpf'],
         'telefone' => $data['telefone'],
         'email' => $data['email'],
         // O campo 'funcionario' é um SELECT no React, seu valor padrão é 'Não'
         'funcionario' => $data['funcionario'], 
     ]);

    // 6. Retorno de Sucesso (Resposta para o React)
    http_response_code(201); // Código 201: Created
    echo json_encode(["sucesso" => "Consulta agendada com sucesso!", "id" => $pdo->lastInsertId()]);

} catch (\PDOException $e) {
    // 7. Retorno de Erro Interno do Servidor
    http_response_code(500);
    echo json_encode(["erro" => "Erro interno do servidor ao agendar a consulta.", "detalhes" => $e->getMessage()]);
}

?>