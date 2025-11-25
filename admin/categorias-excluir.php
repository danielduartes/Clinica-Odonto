<?php

    require_once 'config.inc.php';

    $id = $_GET['id'];

    $sql = "DELETE FROM categorias WHERE id = '$id'";

    if(mysqli_query($conexao, $sql)){
        echo "<br><h2>Categoria excluída com sucesso.</h2>";
        echo "<a href='?pg=categorias-admin'>Voltar</a>";
    } else {
        echo "<br><h2>Erro ao excluir categoria.</h2>";
        echo "<a href='?pg=categorias-admin'>Voltar</a>";
    }

?>