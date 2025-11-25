<?php

    require "config.inc.php";

    echo "<p><a href='?pg=secretaria-cadastro-form'>Cadastrar secretaria</a></p>";
    echo "<h2>Lista de secretaria</h2>";

    $sql = "SELECT * FROM secretaria";
    $resultado = mysqli_query($conexao, $sql);

    while($dados = mysqli_fetch_array($resultado)){
        echo "Id: " . $dados['id'] . " | ";
        echo "Bairro: " . $dados['bairro'] . " | ";
        echo "Tamanho: " . $dados['tamanho'] . " | ";
        echo " <a href='?pg=secretaria-altera-form&id=$dados[id]'>Alterar</a>";
        echo " | <a href='?pg=secretaria-excluir&id=$dados[id]'>Excluir</a>";
        echo "<hr>";
    }

?>