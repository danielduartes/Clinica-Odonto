<?php
// 1. Configuração de Headers e Permissões (CORS)
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: POST, OPTIONS'); 
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
$json_data = file_get_contents("php://input");
$data = json_decode($json_data, true); 

// 3. Validação de Dados Recebidos
if (empty($data['nome']) || empty($data['cpf']) || empty($data['idade']) || empty($data['sexo']) || empty($data['endereco']) || empty($data['telefone']) || empty($data['email']) || empty($data['funcionario'])) {
  http_response_code(400); // Requisição Inválida (Bad Request)
  echo json_encode(["erro" => "Preencha todos os campos obrigatórios."]);
  exit();
}

// 4. Configurações do Banco de Dados (PDO)
$host = 'localhost';
$db  = 'clinica'; 
$user = 'root';       
$pass = '';         
$charset = 'utf8mb4';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";


// 5. Conexão e Inserção no Banco de Dados
try {
  $pdo = new PDO($dsn, $user, $pass);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // CORREÇÃO: Ajustando a ordem das colunas para bater com o array 'execute' abaixo (email, telefone, endereco)
  $sql = "INSERT INTO pacientes (nome, cpf, idade, email, telefone, endereco, sexo, funcionario) 
      VALUES (:nome, :cpf, :idade, :email, :telefone, :endereco, :sexo, :funcionario)";
      
  $stmt = $pdo->prepare($sql);

  // O array 'execute' está correto, mas a query precisava ser ajustada para a ordem correta das colunas.
  $stmt->execute([
    'nome' => $data['nome'],
    'cpf' => $data['cpf'],
    'idade' => $data['idade'],
    'email' => $data['email'],
    'telefone' => $data['telefone'],
    'endereco' => $data['endereco'],
    'sexo' => $data['sexo'],
    'funcionario' => $data['funcionario'], 
  ]);

  // 6. Retorno de Sucesso (Resposta para o React)
  http_response_code(201); // Código 201: Created
    // CORREÇÃO: Mensagem de sucesso atualizada
  echo json_encode(["sucesso" => "Paciente cadastrado com sucesso!", "id" => $pdo->lastInsertId()]);

} catch (\PDOException $e) {
  // 7. Retorno de Erro Interno do Servidor
  http_response_code(500);
    // CORREÇÃO: Mensagem de erro atualizada
  echo json_encode(["erro" => "Erro interno do servidor ao cadastrar o paciente.", "detalhes" => $e->getMessage()]);
}

?>