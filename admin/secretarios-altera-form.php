<?php

require "config.inc.php";

$id = $_REQUEST['id'];

$sql = "SELECT * FROM secretarios WHERE id = $id";
$resultado = mysqli_query($conexao, $sql);

if(mysqli_num_rows($resultado) > 0){
    while($dados = mysqli_fetch_array($resultado)){
        $nome = $dados["nome_completo"];
        $telefone = $dados["telefone"];
        $email = $dados["email"];
        $id = $dados["id"];
    }
?>

<h2>Alterar Dados do(a) Secretário(a)</h2>

<form action="?pg=secretarios-altera" method="post">
    <input type="hidden" name="id" value="<?=$id?>">

        <label>Nome Completo:</label>
        <input type="text" name="nome_completo" required><br>

        <label>CPF:</label>
        <input type="text" name="cpf" maxlength="14" required><br>

        <label>E-mail:</label>
        <input type="email" name="email" required><br>

        <!-- <label>Usuário:</label>
        <input type="text" name="usuario" required><br>

        <label>Senha:</label>
        <input type="password" name="senha" required><br> -->

        <label>Telefone:</label>
        <input type="text" name="telefone"><br><br>
        <input type="submit" value="Alterar">

</form>

<?php
} else {
    echo "<br><h2>Nenhum secretário encontrado</h2>";
}
?>
