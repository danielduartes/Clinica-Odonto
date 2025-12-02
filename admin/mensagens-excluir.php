<?php
// 1. Configuração de Headers e Permissões (CORS)
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: POST, OPTIONS'); 
header('Access-Control-Allow-Headers: Content-Type');

// Trata requisições OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// 2. Receber e Decodificar o JSON (ID da mensagem)
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["erro" => "Método não suportado. Use POST."]);
    exit();
}

$json_data = file_get_contents("php://input");
$data = json_decode($json_data, true); 

if (empty($data['id'])) {
    http_response_code(400); 
    echo json_encode(["erro" => "ID da mensagem não fornecido para exclusão."]);
    exit();
}

$mensagem_id = $data['id'];

// 3. Configurações do Banco de Dados (PDO)
$host = 'localhost';
$db  = 'clinica'; 
$user = 'root';       
$pass = '';         
$charset = 'utf8mb4';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";


// 4. Conexão e Exclusão no Banco de Dados
try {
    $pdo = new PDO($dsn, $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prepara a query de exclusão (Segurança contra SQL Injection)
    $sql = "DELETE FROM mensagens WHERE id = :id";
    $stmt = $pdo->prepare($sql);

    // Executa a exclusão
    $stmt->execute(['id' => $mensagem_id]);
    
    // Verifica se alguma linha foi afetada
    if ($stmt->rowCount() === 0) {
        http_response_code(404);
        echo json_encode(["erro" => "Mensagem não encontrada ou já excluída."]);
        exit();
    }

    // 5. Retorno de Sucesso
    http_response_code(200);
    echo json_encode(["sucesso" => "Mensagem excluída com sucesso!"]);

} catch (\PDOException $e) {
    // 6. Retorno de Erro Interno do Servidor
    http_response_code(500);
    echo json_encode(["erro" => "Erro interno do servidor ao excluir a mensagem.", "detalhes" => $e->getMessage()]);
}
?>