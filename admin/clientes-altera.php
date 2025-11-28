<?php
require_once 'config.inc.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $id            = $_POST['id'];
    $nome_completo = $_POST['nome_completo'];
    $cpf           = $_POST['cpf'];
    $email         = $_POST['email'];
    $telefone      = $_POST['telefone'];
    $endereco      = $_POST['endereco'];
    $cidade        = $_POST['cidade'];
    $estado        = $_POST['estado'];
    $sexo          = $_POST['sexo'];

    $sql = "UPDATE clientes SET 
                nome_completo = '$nome_completo',
                cpf           = '$cpf',
                email         = '$email',
                telefone      = '$telefone',
                endereco      = '$endereco',
                cidade        = '$cidade',
                estado        = '$estado',
                sexo          = '$sexo'
            WHERE id = '$id'";

    $resultado = mysqli_query($conexao, $sql);

    if ($resultado) {
        echo "<br><h2>Cliente alterado com sucesso!</h2>";
        echo "<a href='?pg=clientes-admin'>Voltar</a>";
    } else {
        echo "<br><h3>Erro ao alterar cliente</h3>";
        echo mysqli_error($conexao);
        echo "<br><a href='?pg=clientes-admin'>Voltar</a>";
    }

} else {
    echo "<h2>Método não permitido!</h2>";
}
?>
