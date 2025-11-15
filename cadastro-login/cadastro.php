<?php
include('conexao.php');
include('validacoes.php');
$msg = "";

if(isset($_POST['cadastrar'])){
    $nome = $_POST['nome'];
    $cpf = $_POST['cpf'];
    $email = $_POST['email'];
    $usuario = $_POST['usuario'];
    $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $msg = "<div class='error'>E-mail inválido!</div>";
    } elseif(!validarCPF($cpf)){
        $msg = "<div class='error'>CPF inválido!</div>";
    } else {
        $sql = "INSERT INTO usuarios (nome_completo, cpf, email, usuario, senha)
                VALUES ('$nome', '$cpf', '$email', '$usuario', '$senha')";

        if($con->query($sql)){
            $msg = "<div class='success'>Cadastro realizado! <a href='login.php'>Entrar</a></div>";
        } else {
            $msg = "<div class='error'>Erro: " . $con->error . "</div>";
        }
    }
}
?>
<link rel='stylesheet' href='assets/style.css'>
<div class='left'>
    <h1>Conectando pacientes e clínica</h1>
    <p>Gerencie seus atendimentos de forma simples e rápida.</p>
</div>
<div class='right'>
    <div class='container'>
        <h2>Cadastrar</h2>
        <?php echo $msg; ?>
        <form method='POST'>
            <input type='text' name='nome' placeholder='Nome completo' required>
            <input type='text' name='cpf' placeholder='CPF' required>
            <input type='email' name='email' placeholder='E-mail' required>
            <input type='text' name='usuario' placeholder='Nome de usuário' required>
            <input type='password' name='senha' placeholder='Senha' required>
            <button type='submit' name='cadastrar'>Cadastrar</button>
        </form>
        <br>
        <a href='login.php'>Já tem conta? Login</a>
    </div>
</div>