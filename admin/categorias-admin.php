<?php

    require "config.inc.php";

    echo "<p><a href='?pg=categorias-cadastro-form'>Cadastrar Categoria</a></p>";
    echo "<h2>Lista de Categorias</h2>";

    $sql = "SELECT * FROM categorias";
    $resultado = mysqli_query($conexao, $sql);

    while($dados = mysqli_fetch_array($resultado)){
        echo "Id: " . $dados['id'] . " | ";
        echo "Bairro: " . $dados['bairro'] . " | ";
        echo "Tamanho: " . $dados['tamanho'] . " | ";
        echo " <a href='?pg=categorias-altera-form&id=$dados[id]'>Alterar</a>";
        echo " | <a href='?pg=categorias-excluir&id=$dados[id]'>Excluir</a>";
        echo "<hr>";
    }

?>