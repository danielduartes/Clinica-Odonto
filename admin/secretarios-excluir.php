<?php
require_once 'config.inc.php';

$id = $_GET['id'];

// Se confirmar, exclui
if (isset($_POST['confirmar']) && $_POST['confirmar'] == "sim") {

    $sql = "DELETE FROM secretarios WHERE id = '$id'";

    if (mysqli_query($conexao, $sql)) {
        echo "<br><h2>Secretário(a) excluído(a) com sucesso.</h2>";
        echo "<a href='?pg=secretarios-admin'>Voltar</a>";
    } else {
        echo "<br><h2>Erro ao excluir Secretário(a).</h2>";
        echo "<a href='?pg=secretarios-admin'>Voltar</a>";
    }
    exit;
}
?>

<!-- Fundo escuro -->
<div id="overlay" style="
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
">

    <!-- Modal -->
    <div style="
        background: white;
        padding: 25px;
        border-radius: 10px;
        width: 350px;
        box-shadow: 0 0 15px rgba(0,0,0,0.3);
        text-align: center;
    ">
        <h2>Confirmar Exclusão</h2>
        <p>Tem certeza que deseja excluir este secretário(a)?</p>

        <form method="POST">
            <input type="hidden" name="confirmar" value="sim">

            <button type="submit"
                style="padding:10px 20px; background:red; color:white; border:none; border-radius:5px; margin-right:10px;">
                Excluir
            </button>

            <a href="?pg=secretarios-admin"
                style="padding:10px 20px; background:#ccc; color:black; border-radius:5px; text-decoration:none;">
                Cancelar
            </a>
        </form>
    </div>
</div>
