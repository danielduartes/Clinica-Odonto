<?php
// 1. Configuração de Headers e Permissões (CORS)
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: GET, OPTIONS'); 
header('Access-Control-Allow-Headers: Content-Type');

// Trata requisições OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// 2. Configurações do Banco de Dados
$host = 'localhost';
$db   = 'clinica'; 
$user = 'root';     
$pass = '';         
$charset = 'utf8mb4';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

// 3. Conexão com o Banco de Dados
try {
    $pdo = new PDO($dsn, $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(["erro" => "Falha na conexão com o banco de dados.", "detalhes" => $e->getMessage()]);
    exit();
}

// 4. Buscar a Lista de Dentistas (QUERY CORRIGIDA)
try {
    // Buscando apenas 'id' e 'nome', já que 'cro' foi removido
    $sql = "SELECT id, nome FROM dentistas ORDER BY nome ASC";
            
    $stmt = $pdo->query($sql);
    
    // Retorna todos os resultados como um array associativo
    $dentistas = $stmt->fetchAll(PDO::FETCH_ASSOC);

    http_response_code(200);
    // 5. Retorna a lista de dentistas no formato JSON
    echo json_encode($dentistas);

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(["erro" => "Falha ao buscar a lista de dentistas. Verifique o nome da tabela e colunas no banco.", "detalhes" => $e->getMessage()]);
}
?>