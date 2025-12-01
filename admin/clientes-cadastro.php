<?php

require_once "config.inc.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nome_completo = $_POST["nome_completo"];
    $cpf           = $_POST["cpf"];
    $email         = $_POST["email"];
    $telefone      = $_POST["telefone"];
    $endereco      = $_POST["endereco"];
    $cidade        = $_POST["cidade"];
    $estado        = $_POST["estado"];
    $sexo          = $_POST["sexo"];

} else {
    echo "<h2>Envio de dados não permitido</h2>";
    exit;
}

$sql = "INSERT INTO clientes (
            nome_completo, cpf, email, telefone, endereco, cidade, estado, sexo
        ) VALUES (
            '$nome_completo', '$cpf', '$email', '$telefone', 
            '$endereco', '$cidade', '$estado', '$sexo'
        )";

$inserir = mysqli_query($conexao, $sql);

if ($inserir) {
    echo "<h2>Cadastrado com sucesso</h2>";
    echo "<a href='?pg=clientes-admin'>Voltar</a>";
} else {
    echo "<h2>Cadastro não realizado</h2>";
    echo mysqli_error($conexao);
}
