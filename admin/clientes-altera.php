<?php
    require_once 'config.inc.php';

    $id = $_POST['id'];
    $nome = $_POST['cliente'];
    $cidade = $_POST['cidade'];
    $estado = $_POST['estado'];

    $sql = "UPDATE clientes SET cliente = '$nome',cidade = '$cidade',
            estado = '$estado'
            WHERE id = '$id'";


    if($resultado = mysqli_query($conexao, $sql)){
        echo "<br><h2>Cliente alterado com sucesso!";
        echo "<a href='?pg=clientes-admin'>Voltar</a>";
    }else{
        echo "<br><h3>Erro ao alterar cliente</h3>";
        echo "<a href='?pg=clientes-admin'>Voltar</a>";
    }