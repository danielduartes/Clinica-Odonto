<div>
    <h2>Cadastro de Cliente</h2>

    <form action="?pg=clientes-cadastro" method="post">

        <label>Nome Completo:</label>
        <input type="text" name="nome_completo" required><br><br>

        <label>CPF:</label>
        <input type="text" name="cpf" required><br><br>

        <label>Email:</label>
        <input type="email" name="email" required><br><br>

        <label>Telefone:</label>
        <input type="text" name="telefone"><br><br>

        <label>Endereço:</label>
        <input type="text" name="endereco"><br><br>

        <label>Cidade:</label>
        <input type="text" name="cidade"><br><br>

        <label>Estado (UF):</label>
        <select name="estado">
            <option value="">Selecione...</option>
            <option value="AC">AC - Acre</option>
            <option value="AL">AL - Alagoas</option>
            <option value="AP">AP - Amapá</option>
            <option value="AM">AM - Amazonas</option>
            <option value="BA">BA - Bahia</option>
            <option value="CE">CE - Ceará</option>
            <option value="DF">DF - Distrito Federal</option>
            <option value="ES">ES - Espírito Santo</option>
            <option value="GO">GO - Goiás</option>
            <option value="MA">MA - Maranhão</option>
            <option value="MT">MT - Mato Grosso</option>
            <option value="MS">MS - Mato Grosso do Sul</option>
            <option value="MG">MG - Minas Gerais</option>
            <option value="PA">PA - Pará</option>
            <option value="PB">PB - Paraíba</option>
            <option value="PR">PR - Paraná</option>
            <option value="PE">PE - Pernambuco</option>
            <option value="PI">PI - Piauí</option>
            <option value="RJ">RJ - Rio de Janeiro</option>
            <option value="RN">RN - Rio Grande do Norte</option>
            <option value="RS">RS - Rio Grande do Sul</option>
            <option value="RO">RO - Rondônia</option>
            <option value="RR">RR - Roraima</option>
            <option value="SC">SC - Santa Catarina</option>
            <option value="SP">SP - São Paulo</option>
            <option value="SE">SE - Sergipe</option>
            <option value="TO">TO - Tocantins</option>
        </select>
        <br><br>


        <label>Sexo:</label>
        <select name="sexo" required>
            <option value="M">Selecione</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
            <option value="Outro">Prefiro Não Informar</option>
        </select>
        <br><br>

        <input type="submit" value="Cadastrar">
    </form>
</div>
