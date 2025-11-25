<div>
    <h2>Cadastro de Secretaria</h2>
    <form action="?pg=secretaria-cadastro" method="post">
        
        <label>Bairro:</label>
        <select name="bairro" required>
            <option value="">Selecione...</option>
            <option value="Cabo Branco">Cabo Branco</option>
            <option value="Tambaú">Tambaú</option>
            <option value="Manaíra">Manaíra</option>
            <option value="Bessa">Bessa</option>
            <option value="Altiplano">Altiplano</option>
            <option value="Mangabeira">Mangabeira</option>
            <option value="Bairro dos Estados">Bairro dos Estados</option>
            <option value="Jaguaribe">Jaguaribe</option>
            <option value="Torre">Torre</option>
            <option value="Bancários">Bancários</option>
            <option value="Castelo Branco">Castelo Branco</option>
            <option value="Geisel">Geisel</option>
            <option value="Valentina de Figueiredo">Valentina de Figueiredo</option>
            <option value="José Américo">José Américo</option>
            <option value="Aeroclube">Aeroclube</option>
        </select><br>

        <label>Tamanho do Imóvel:</label>
        <select name="tamanho" required>
            <option value="">Selecione...</option>
            <option value="Até 50m²">Até 50m²</option>
            <option value="Até 100m²">Até 100m²</option>
            <option value="Até 200m²">Até 200m²</option>
            <option value="Até 300m²">Até 300m²</option>
            <option value="Mais de 300m²">Mais de 300m²</option>
        </select><br><br>

        <input type="submit" value="Cadastrar">
    </form>
</div>