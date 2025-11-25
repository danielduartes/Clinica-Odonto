<?php

    require_once 'config.inc.php';

    $id = $_GET['id'];
    $sql = "DELETE FROM clientes WHERE id = '$id'";

    if(mysqli_query($conexao, $sql)){
        echo "<br><h2>Cliente Excluído com sucesso.</h2>";
        echo "<a href='?pg=clientes-admin'>Voltar</a>";
    }else{
        echo "<br><h2>Erro ao excluir Cliente.</h2>";
        echo "<a href='?pg=clientes-admin'>Voltar</a>";
    }    