<?php
session_start();
include('conexao.php');
include('validacoes.php');
$msg = "";

if(isset($_POST['entrar'])){
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    $sql = "SELECT * FROM usuarios WHERE usuario = '$usuario'";
    $result = $con->query($sql);

    if($result->num_rows > 0){
        $dados = $result->fetch_assoc();
        if(password_verify($senha, $dados['senha'])){
            $_SESSION['usuario'] = $dados['usuario'];
            header("Location: painel.php");
            exit;
        } else {
            $msg = "<div class='error'>Senha incorreta!</div>";
        }
    } else {
        $msg = "<div class='error'>Usuário não encontrado!</div>";
    }
}
?>
<link rel='stylesheet' href='assets/style.css'>
<div class='left'>
    <h1>Conectando pacientes e clínica</h1>
    <p>Entre com sua conta para acessar o sistema.</p>
</div>
<div class='right'>
    <div class='container'>
        <h2>Bem-vindo</h2>
        <?php echo $msg; ?>
        <form method='POST'>
            <input type='text' name='usuario' placeholder='Usuário' required>
            <input type='password' name='senha' placeholder='Senha' required>
            <button type='submit' name='entrar'>Entrar</button>
        </form>
        <br>
        <a href='cadastro.php'>Criar conta</a>
    </div>
</div>