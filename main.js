const anni = prompt('Quanti anni hai?')
const km = prompt('Quanti km devi percorrere?');
const costo = parseInt(km) * 0.21;

    if (anni < 18) {
        document.getElementById("prezzo").innerHTML = (costo - (costo * 20) / 100 ).toFixed(2);
    } else if (anni >= 65) {
        document.getElementById("prezzo").innerHTML = (costo - (costo * 20) / 100 ).toFixed(2);
    } else {
        document.getElementById("prezzo").innerHTML = costo.toFixed(2);
    }

