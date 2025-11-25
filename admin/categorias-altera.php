<?php
    require_once 'config.inc.php';

    $id = $_POST['id'];
    $bairro = $_POST['bairro'];
    $tamanho = $_POST['tamanho'];

    $sql = "UPDATE categorias 
            SET bairro = '$bairro',
                tamanho = '$tamanho'
            WHERE id = '$id'";

    if($resultado = mysqli_query($conexao, $sql)){
        echo "<br><h2>Categoria alterada com sucesso!</h2>";
        echo "<a href='?pg=categorias-admin'>Voltar</a>";
    } else {
        echo "<br><h3>Erro ao alterar categoria</h3>";
        echo "<a href='?pg=categorias-admin'>Voltar</a>";
    }
?>