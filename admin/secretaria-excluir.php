<?php

    require_once 'config.inc.php';

    $id = $_GET['id'];

    $sql = "DELETE FROM secretaria WHERE id = '$id'";

    if(mysqli_query($conexao, $sql)){
        echo "<br><h2>Secretaria excluída com sucesso.</h2>";
        echo "<a href='?pg=secretaria-admin'>Voltar</a>";
    } else {
        echo "<br><h2>Erro ao excluir secretaria.</h2>";
        echo "<a href='?pg=secretaria-admin'>Voltar</a>";
    }

?>