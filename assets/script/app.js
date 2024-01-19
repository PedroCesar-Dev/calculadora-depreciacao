function val() {
    var valorEquipamento = parseFloat(document.getElementById('valorEquipamento').value);
    var valorSucata = parseFloat(document.getElementById('valorSucata').value);
    var vidaUtil = parseFloat(document.getElementById('vidaUtil').value);

    if (isNaN(valorEquipamento) || isNaN(valorSucata) || isNaN(vidaUtil)) {
        alert("Por favor digite um valor válido.");
        return;
    }

    var resultado = (valorEquipamento - valorSucata) / vidaUtil;

    document.getElementById('valorResultado').value = resultado.toFixed(2);
}
