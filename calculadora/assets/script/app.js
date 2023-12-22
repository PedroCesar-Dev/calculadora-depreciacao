let valor = document.getElementById('valorEquipamento') 
let sucata = document.getElementById('valorSucata')
let vidaUtil = document.getElementById('vidaUtil')  

function depreciacaoItem(){
    const depreciacao = (valor.value - sucata.value)/vidaUtil.value;
    const depreciacaoValor = document.createElement("span");
    depreciacaoValor.innerHTML = depreciacao;
    document.getElementById('depreciacaoValor').appendChild(depreciacaoValor);
}

