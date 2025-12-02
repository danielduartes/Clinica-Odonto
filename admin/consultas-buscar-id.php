<?php
// 1. Configuração de Headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Trata requisições OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// 2. Conexão com o Banco de Dados
$host = 'localhost';
$db   = 'clinica'; 
$user = 'root';     
$pass = '';         
$charset = 'utf8mb4';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

try {
    $pdo = new PDO($dsn, $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(["erro" => "Falha na conexão com o banco de dados."]);
    exit();
}

// 3. Receber e Validar o ID
if (empty($_GET['id'])) {
    http_response_code(400); // Bad Request
    echo json_encode(["erro" => "ID da consulta não fornecido."]);
    exit();
}

$id = $_GET['id'];

// 4. Preparar e Executar a Query de Busca
try {
    // Busca todos os campos necessários para preencher o formulário
    $sql = "SELECT 
                id, data, hora, paciente_id, dentista_id, procedimento, funcionario 
            FROM consultas 
            WHERE id = :id";
            
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['id' => $id]);
    
    $consulta = $stmt->fetch(PDO::FETCH_ASSOC);

    // 5. Verificação e Retorno
    if ($consulta) {
        http_response_code(200);
        // O React espera um objeto com os campos da consulta
        echo json_encode($consulta);
    } else {
        http_response_code(404); // Not Found
        echo json_encode(["erro" => "Consulta com ID {$id} não encontrada."]);
    }

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(["erro" => "Erro interno ao buscar a consulta.", "detalhes" => $e->getMessage()]);
}
?>