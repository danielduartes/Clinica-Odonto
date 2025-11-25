<?php

    require_once "config.inc.php";

    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $bairro = $_POST["bairro"];
        $tamanho = $_POST["tamanho"];
    } else {
        echo "<h2>Envio de dados não permitido</h2>";
        exit;
    }

    $sql = "INSERT INTO categorias (bairro, tamanho)
            VALUES ('$bairro', '$tamanho')";

    $inserir = mysqli_query($conexao, $sql);

    if($inserir) {
        echo "<h2>Categoria cadastrada com sucesso!</h2>";
        echo "<a href='?pg=categorias-admin'>Voltar</a>";
    } else {
        echo "<h3>Erro ao cadastrar categoria.</h3>";
        echo "<a href='?pg=categorias-admin'>Voltar</a>";
    }

?>