<div>
    <h2>Cadastro de Secretário(a)</h2>

    <form action="?pg=secretarios-cadastro" method="post">

        <label>Nome Completo:</label>
        <input type="text" name="nome_completo" required><br>

        <label>CPF:</label>
        <input type="text" name="cpf" maxlength="14" required><br>

        <label>E-mail:</label>
        <input type="email" name="email" required><br>

        <label>Usuário:</label>
        <input type="text" name="usuario" required><br>

        <label>Senha:</label>
        <input type="password" name="senha" required><br>

        <label>Telefone:</label>
        <input type="text" name="telefone"><br><br>

        <input type="submit" value="Cadastrar">
    </form>
</div>
