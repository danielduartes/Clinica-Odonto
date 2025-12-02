<?php
// consultas-marcar.php (CORRIGIDO PARA ESTRUTURA ANTIGA/TEXTO)

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: POST, OPTIONS'); 
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405); 
  echo json_encode(["erro" => "Método não suportado. Use POST."]);
  exit();
}

$json_data = file_get_contents("php://input");
$data = json_decode($json_data, true); 

// Validação dos campos que o React ESTÁ ENVIANDO
if (empty($data['paciente']) || empty($data['cpf']) || empty($data['dentista']) || empty($data['procedimento']) || empty($data['data']) || empty($data['hora'])) {
  http_response_code(400); 
  echo json_encode(["erro" => "Preencha todos os campos obrigatórios."]);
  exit();
}

// Configurações do Banco de Dados
$host = 'localhost';
$db  = 'clinica'; 
$user = 'root';       
$pass = '';         
$charset = 'utf8mb4';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";


try {
  $pdo = new PDO($dsn, $user, $pass);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // CORREÇÃO: INSERT com as colunas de TEXTO/VARCHAR (paciente, cpf, dentista)
  $sql = "INSERT INTO consultas (paciente, cpf, dentista, data, hora, funcionario, procedimento) 
      VALUES (:paciente, :cpf, :dentista, :data, :hora, :funcionario, :procedimento)";
      
  $stmt = $pdo->prepare($sql);

    // Determina o valor de 'funcionario' (o React está enviando)
    $funcionario_val = $data['funcionario'] ?? 'Não';

  $stmt->execute([
    'paciente' => $data['paciente'],
    'cpf' => $data['cpf'],
    'dentista' => $data['dentista'], // Coluna agora aceita string
    'procedimento' => $data['procedimento'],
    'data' => $data['data'],
    'hora' => $data['hora'],
    'funcionario' => $funcionario_val, 
  ]);

  http_response_code(201); 
  echo json_encode(["sucesso" => "Consulta agendada com sucesso!", "id" => $pdo->lastInsertId()]);

} catch (\PDOException $e) {
  http_response_code(500);
  echo json_encode(["erro" => "Erro interno do servidor ao agendar a consulta.", "detalhes" => $e->getMessage()]);
}
?>