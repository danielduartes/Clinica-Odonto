<?php

    require_once "config.inc.php";

    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $cliente = $_POST["cliente"];
        $cidade = $_POST["cidade"];
        $estado = $_POST["estado"];
    }else{
        echo "<H2>Envio de dados não permitido</H2>";
    }

    $sql = "INSERT INTO clientes (cliente, cidade, estado)
        VALUES ('$cliente', '$cidade', '$estado')";

    $inserir = mysqli_query($conexao, $sql);

    if($inserir) {
        echo "<H2>Cadastrado com sucesso</H2>";
        echo "<a href='?pg=clientes-admin'>Voltar</a>";
    }else{
        echo "Cadastrado não realizado.";
    }
