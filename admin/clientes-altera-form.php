<?php

    require "config.inc.php";

    $id = $_REQUEST['id'];

    $sql = "SELECT * FROM clientes WHERE id=$id";

    $resultado = mysqli_query($conexao, $sql);
    if(mysqli_num_rows($resultado) > 0){
        while($dados = mysqli_fetch_array($resultado)){
            $nome = $dados["cliente"];
            $cidade = $dados["cidade"];
            $estado = $dados["estado"];
            $id = $dados["id"];
        }

?>

<h2>Alteração de dados do cliente</h2>
<form action="?pg=clientes-altera" method="post">
    <input type="hidden" name="id" value="<?=$id?>">
    <label>Nome:</label>
    <input type="text" name="cliente" value="<?=$nome?>" required><br>
    <label>Cidade:</label>
    <input type="text" name="cidade" value="<?=$cidade?>" required><br>
    <label>Estado:</label>
    <input type="text" name="estado" value="<?=$estado?>"><br><br>
    <input type="submit" value="Cadastrar">
</form>
<?php
}else{
        echo "<br><h2>Nenhum cliente encontrado</h2>";
    }
?>