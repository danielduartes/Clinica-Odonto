<?php

require "config.inc.php";

echo "<p><a href='?pg=secretarios-cadastro-form'>Cadastrar Secretário</a></p>";
echo "<h2>Lista de Secretários</h2>";

$sql = "SELECT * FROM secretarios";
$resultado = mysqli_query($conexao, $sql);

while ($dados = mysqli_fetch_array($resultado)) {

    echo "Id: " . $dados['id'] . " | ";
    echo "Nome Completo: " . $dados['nome_completo'] . " | ";
    echo "CPF: " . $dados['cpf'] . " | ";
    echo "Email: " . $dados['email'] . " | ";
   // echo "Usuário: " . $dados['usuario'] . " | ";
    echo "Telefone: " . $dados['telefone'] . " | ";
    echo "Criado em: " . $dados['criado_em'];

    echo " | <a href='?pg=secretarios-altera-form&id={$dados['id']}'>Alterar</a>";
    echo " | <a href='?pg=secretarios-excluir&id={$dados['id']}'>Excluir</a>";
    echo "<hr>";
}

?>
