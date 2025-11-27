<?php

    require_once "config.inc.php";

    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $bairro = $_POST["bairro"];
        $tamanho = $_POST["tamanho"];
    } else {
        echo "<h2>Envio de dados não permitido</h2>";
        exit;
    }

    $sql = "INSERT INTO secretaria (bairro, tamanho)
            VALUES ('$bairro', '$tamanho')";

    $inserir = mysqli_query($conexao, $sql);

    if($inserir) {
        echo "<h2>Secretaria cadastrada com sucesso!</h2>";
        echo "<a href='?pg=secretaria-admin'>Voltar</a>";
    } else {
        echo "<h3>Erro ao cadastrar secretaria.</h3>";
        echo "<a href='?pg=secretaria-admin'>Voltar</a>";
    }

?>