<?php

    require "config.inc.php";

    $id = $_REQUEST['id'];

    $sql = "SELECT * FROM secretaria WHERE id=$id";
    $resultado = mysqli_query($conexao, $sql);

    if(mysqli_num_rows($resultado) > 0){
        while($dados = mysqli_fetch_array($resultado)){
            $bairro = $dados["bairro"];
            $tamanho = $dados["tamanho"];
            $id = $dados["id"];
        }

?>

<h2>Alteração de dados da secretaria</h2>
<form action="?pg=secretaria-altera" method="post">
    <input type="hidden" name="id" value="<?=$id?>">
    <label>Bairro:</label>
    <input type="text" name="bairro" value="<?=$bairro?>" required><br>
    <label>Tamanho:</label>
    <input type="text" name="tamanho" value="<?=$tamanho?>" required><br><br>
    <input type="submit" value="Salvar">
</form>

<?php
    } else {
        echo "<br><h2>Nenhuma secretaria encontrada</h2>";
    }
?>