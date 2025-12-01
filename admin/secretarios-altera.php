<?php
require_once 'config.inc.php';

$id = $_POST['id'];
$nome_completo = $_POST['nome_completo'];
$cpf = $_POST['cpf'];
$email = $_POST['email'];
//$usuario = $_POST['usuario'];
$telefone = $_POST['telefone'];

$sql = "UPDATE secretarios 
        SET nome_completo = '$nome_completo',
            cpf = '$cpf',
            email = '$email',
            /*usuario = '$usuario',*/
            telefone = '$telefone'
        WHERE id = '$id'";

if (mysqli_query($conexao, $sql)) {
    echo "<br><h2>Secretário(a) alterado(a) com sucesso!</h2>";
    echo "<a href='?pg=secretarios-admin'>Voltar</a>";
} else {
    echo "<br><h3>Erro ao alterar secretário(a).</h3>";
    echo "<a href='?pg=secretarios-admin'>Voltar</a>";
}
?>
