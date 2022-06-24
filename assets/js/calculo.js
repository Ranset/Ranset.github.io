var mxn;
var dolar;
var tasa;
var usdToCup;


function suma() {
	mxn = document.getElementById('inputMXN').value;
    var precioCUP = Number(mxn) / Number(dolar) * Number(tasa) * Number(usdToCup);
    var precioUSD = Number(mxn) / Number(dolar) * Number(tasa);
    var costoUSD = Number(mxn) / Number(dolar);
    document.getElementById('cup').innerHTML = "$ " + precioCUP.toFixed(0);
    document.getElementById('usd').innerHTML = "$ " + precioUSD.toFixed(2);
    document.getElementById('mxnToUsd').innerHTML = costoUSD.toFixed(2);
}

function guardar(){
    actualizar();
}

document.getElementById('btnCalcular').addEventListener('click', suma);
document.getElementById('btnGuardar').addEventListener('click', guardar);

function actualizar(){
    dolar = document.getElementById('inUsdMxn').value;
    tasa = document.getElementById('inTasa').value;
    usdToCup = document.getElementById('inUsdCup').value;
    document.getElementById('infoCambio').innerHTML = "$" + dolar;
    document.getElementById('infoTasa').innerHTML = tasa;
}

function limpiar() {
    document.getElementById('inputMXN').value = "";
}

document.getElementById('inputMXN').addEventListener('click', limpiar);