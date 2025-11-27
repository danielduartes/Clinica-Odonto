<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

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
     echo json_encode(["erro" => "Falha na conexão com o banco de dados.", "detalhes" => $e->getMessage()]);
     exit(); 
}


try {
    $sql = "SELECT id, nome, cpf, telefone, email, funcionario, criado_em FROM pacientes ORDER BY id DESC"; 
    
    $stmt = $pdo->query($sql);
    
    $pacientes = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($pacientes);

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(["erro" => "Falha ao executar a consulta.", "detalhes" => $e->getMessage()]);
}

?>