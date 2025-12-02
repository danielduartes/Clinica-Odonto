<?php
// consultas-altera.php (CORRIGIDO PARA USAR COLUNAS DE TEXTO)

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

// 2. Configurações do Banco de Dados
$host = 'localhost';
$db  = 'clinica'; 
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

// 4. Receber Dados da Requisição (Método POST)
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(["erro" => "Método não suportado. Use POST."]);
  exit();
}

$json_data = file_get_contents("php://input");
$data = json_decode($json_data, true); 

// 5. Validação e Atribuição dos Dados
// CORREÇÃO: Campos esperados agora são id, paciente, cpf, dentista, data, hora, procedimento
$required_fields = ['id', 'data', 'hora', 'paciente', 'cpf', 'dentista', 'procedimento']; 
$missing_fields = [];

foreach ($required_fields as $field) {
  if (!isset($data[$field]) || empty($data[$field])) {
    $missing_fields[] = $field;
  }
}

if (!empty($missing_fields)) {
  http_response_code(400); 
  echo json_encode(["erro" => "Dados incompletos para a atualização. Campos faltando: " . implode(', ', $missing_fields)]);
  exit();
}

// Atribuindo variáveis
$id = $data['id'];
$nova_data = $data['data'];
$novo_horario = $data['hora'];
// CORREÇÃO: Usando paciente, cpf e dentista
$novo_paciente = $data['paciente'];
$novo_cpf = $data['cpf'];
$novo_dentista = $data['dentista'];
$novo_procedimento = $data['procedimento'];
$novo_funcionario = $data['funcionario'] ?? 'Não'; 

// 6. Preparar e Executar a Query de Atualização
try {
  $sql = "UPDATE consultas SET 
        data = :nova_data, 
        hora = :novo_horario, 
        paciente = :paciente,    -- CORRIGIDO
        cpf = :cpf,         -- CORRIGIDO
        dentista = :dentista,   -- CORRIGIDO
        procedimento = :procedimento, 
        funcionario = :funcionario   
      WHERE id = :id";
      
  $stmt = $pdo->prepare($sql);
  
  $stmt->execute([
    'nova_data' => $nova_data,
    'novo_horario' => $novo_horario,
    'paciente' => $novo_paciente,  
    'cpf' => $novo_cpf,
    'dentista' => $novo_dentista,
    'procedimento' => $novo_procedimento,
    'funcionario' => $novo_funcionario,
    'id' => $id
  ]);
  
  // 7. Verificação e Retorno
  if ($stmt->rowCount() > 0) {
    http_response_code(200);
    echo json_encode(["sucesso" => "Consulta ID {$id} alterada com sucesso!"]);
  } else {
    http_response_code(200); 
    echo json_encode(["aviso" => "Consulta encontrada, mas nenhum dado novo foi fornecido ou alterado."]);
  }

} catch (\PDOException $e) {
  http_response_code(500);
  echo json_encode(["erro" => "Erro interno do servidor ao atualizar a consulta.", "detalhes" => $e->getMessage()]);
}
?>