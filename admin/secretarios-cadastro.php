<?php

require_once "config.inc.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nome = $_POST["nome_completo"];
    $cpf = $_POST["cpf"];
    $email = $_POST["email"];
    $usuario = $_POST["usuario"];
    $senha = $_POST["senha"];
    $telefone = $_POST["telefone"];

} else {
    echo "<h2>Envio de dados não permitido</h2>";
    exit;
}

// Criptografar a senha antes de salvar
$senhaCriptografada = password_hash($senha, PASSWORD_DEFAULT);

$sql = "INSERT INTO secretarios (nome_completo, cpf, email, usuario, senha, telefone)
        VALUES ('$nome', '$cpf', '$email', '$usuario', '$senhaCriptografada', '$telefone')";

$inserir = mysqli_query($conexao, $sql);

if ($inserir) {
    echo "<h2>Secretário(a) cadastrado(a) com sucesso!</h2>";
    echo "<a href='?pg=secretarios-admin'>Voltar</a>";
} else {
    echo "<h3>Erro ao cadastrar secretário(a).</h3>";
    echo "<p>Detalhe do erro: " . mysqli_error($conexao) . "</p>";
    echo "<a href='?pg=secretarios-admin'>Voltar</a>";
}

?>
