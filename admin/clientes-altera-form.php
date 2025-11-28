<?php

require "config.inc.php";

$id = $_REQUEST['id'];

$sql = "SELECT * FROM clientes WHERE id = $id";
$resultado = mysqli_query($conexao, $sql);

if (mysqli_num_rows($resultado) > 0) {

    $dados = mysqli_fetch_array($resultado);

    $nome_completo = $dados["nome_completo"];
    $cpf           = $dados["cpf"];
    $email         = $dados["email"];
    $telefone      = $dados["telefone"];
    $endereco      = $dados["endereco"];
    $cidade        = $dados["cidade"];
    $estado        = $dados["estado"];
    $sexo          = $dados["sexo"];
    $id            = $dados["id"];
?>

<h2>Alteração de dados do cliente</h2>

<form action="?pg=clientes-altera" method="post">

    <input type="hidden" name="id" value="<?=$id?>">

    <label>Nome Completo:</label><br>
    <input type="text" name="nome_completo" value="<?=$nome_completo?>" required><br><br>

    <label>CPF:</label><br>
    <input type="text" name="cpf" value="<?=$cpf?>" required><br><br>

    <label>Email:</label><br>
    <input type="email" name="email" value="<?=$email?>" required><br><br>

    <label>Telefone:</label><br>
    <input type="text" name="telefone" value="<?=$telefone?>"><br><br>

    <label>Endereço:</label><br>
    <input type="text" name="endereco" value="<?=$endereco?>"><br><br>

    <label>Cidade:</label><br>
    <input type="text" name="cidade" value="<?=$cidade?>" required><br><br>

    <label>Estado (UF):</label><br>
    <select name="estado" required>
        <option value="">Selecione...</option>

        <option value="AC" <?=($estado == "AC" ? "selected" : "")?>>AC - Acre</option>
        <option value="AL" <?=($estado == "AL" ? "selected" : "")?>>AL - Alagoas</option>
        <option value="AP" <?=($estado == "AP" ? "selected" : "")?>>AP - Amapá</option>
        <option value="AM" <?=($estado == "AM" ? "selected" : "")?>>AM - Amazonas</option>
        <option value="BA" <?=($estado == "BA" ? "selected" : "")?>>BA - Bahia</option>
        <option value="CE" <?=($estado == "CE" ? "selected" : "")?>>CE - Ceará</option>
        <option value="DF" <?=($estado == "DF" ? "selected" : "")?>>DF - Distrito Federal</option>
        <option value="ES" <?=($estado == "ES" ? "selected" : "")?>>ES - Espírito Santo</option>
        <option value="GO" <?=($estado == "GO" ? "selected" : "")?>>GO - Goiás</option>
        <option value="MA" <?=($estado == "MA" ? "selected" : "")?>>MA - Maranhão</option>
        <option value="MT" <?=($estado == "MT" ? "selected" : "")?>>MT - Mato Grosso</option>
        <option value="MS" <?=($estado == "MS" ? "selected" : "")?>>MS - Mato Grosso do Sul</option>
        <option value="MG" <?=($estado == "MG" ? "selected" : "")?>>MG - Minas Gerais</option>
        <option value="PA" <?=($estado == "PA" ? "selected" : "")?>>PA - Pará</option>
        <option value="PB" <?=($estado == "PB" ? "selected" : "")?>>PB - Paraíba</option>
        <option value="PR" <?=($estado == "PR" ? "selected" : "")?>>PR - Paraná</option>
        <option value="PE" <?=($estado == "PE" ? "selected" : "")?>>PE - Pernambuco</option>
        <option value="PI" <?=($estado == "PI" ? "selected" : "")?>>PI - Piauí</option>
        <option value="RJ" <?=($estado == "RJ" ? "selected" : "")?>>RJ - Rio de Janeiro</option>
        <option value="RN" <?=($estado == "RN" ? "selected" : "")?>>RN - Rio Grande do Norte</option>
        <option value="RS" <?=($estado == "RS" ? "selected" : "")?>>RS - Rio Grande do Sul</option>
        <option value="RO" <?=($estado == "RO" ? "selected" : "")?>>RO - Rondônia</option>
        <option value="RR" <?=($estado == "RR" ? "selected" : "")?>>RR - Roraima</option>
        <option value="SC" <?=($estado == "SC" ? "selected" : "")?>>SC - Santa Catarina</option>
        <option value="SP" <?=($estado == "SP" ? "selected" : "")?>>SP - São Paulo</option>
        <option value="SE" <?=($estado == "SE" ? "selected" : "")?>>SE - Sergipe</option>
        <option value="TO" <?=($estado == "TO" ? "selected" : "")?>>TO - Tocantins</option>
    </select>
    <br><br>
    
    <label>Sexo:</label><br>
    <select name="sexo" required>
        <option value="M"     <?=($sexo == "M" ? "selected" : "")?>>Masculino</option>
        <option value="F"     <?=($sexo == "F" ? "selected" : "")?>>Feminino</option>
        <option value="Outro" <?=($sexo == "Outro" ? "selected" : "")?>>Outro</option>
    </select>
    <br><br>

    <input type="submit" value="Alterar">

</form>

<?php
} else {
    echo "<br><h2>Nenhum cliente encontrado</h2>";
}
?>
