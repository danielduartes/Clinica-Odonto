<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: POST, GET, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'DELETE' && $_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); 
    echo json_encode(["erro" => "Método não suportado. Use DELETE ou POST."]);
    exit();
}

$json_data = file_get_contents("php://input");
$data = json_decode($json_data, true); 

$id = $data['id'] ?? null;

if (empty($id) || !is_numeric($id)) {
    http_response_code(400); 
    echo json_encode(["erro" => "ID da consulta inválido ou ausente."]);
    exit();
}

$host = 'localhost';
$db = 'clinica'; 
$user = 'root';
$pass = '';
$charset = 'utf8mb4';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";


try {
    $pdo = new PDO($dsn, $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "DELETE FROM pacientes WHERE id = :id";
            
    $stmt = $pdo->prepare($sql);

    $stmt->execute(['id' => $id]);

    if ($stmt->rowCount() > 0) {
        http_response_code(200);
        echo json_encode(["sucesso" => "Consulta excluída com sucesso!"]);
    } else {
        http_response_code(404); 
        echo json_encode(["erro" => "Consulta com ID $id não encontrada."]);
    }

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(["erro" => "Erro interno do servidor ao excluir a consulta.", "detalhes" => $e->getMessage()]);
}

?>