<?php
session_start();
if(!isset($_SESSION['usuario'])){
    header("Location: login.php");
    exit;
}
?>
<h2>Bem-vindo ao painel, <?php echo $_SESSION['usuario']; ?>!</h2>
<a href="sair.php">Sair</a>