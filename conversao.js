function celcius_fare(temperatura) {
    return (temperatura * 1.8) + 32;
}

function celcius_kelvin(temperatura) {
    return temperatura + 273.15;
}

function fare_celcius(temperatura) {
    return (temperatura - 32) / 1.8;
}

function fare_kelvin(temperatura) {
    return ((temperatura - 32) / 1.8) + 273.15;
}

function kelvin_celcius(temperatura) {
    return temperatura - 273.15;
}

function kelvin_fare(temperatura) {
    return ((temperatura - 273.15) * 1.8) + 32;
}

function botaoclicado() {

    var c = document.getElementById("celsius").value;
    var f = document.getElementById("fahrenheit").value;
    var k = document.getElementById("kelvin").value;

    var locais_preenchidos = 0;

    if (c != "") {
        locais_preenchidos++;
    }

    if (f != "") {
        locais_preenchidos++;
    }

    if (k != "") {
        locais_preenchidos++;
    }

    if (locais_preenchidos == 0) {
        alert("Digite uma temperatura.");
        return;
    }

    if (locais_preenchidos > 1) {
        alert("É SÓ UM CAMPO TAPADO");
        return;
    }

    // Celsius
    if (c != "") {

        c = Number(c);

        document.getElementById("fahrenheit").value =
            celcius_fare(c).toFixed(2);

        document.getElementById("kelvin").value =
            celcius_kelvin(c).toFixed(2);
    }

    // Fahrenheit
    else if (f != "") {

        f = Number(f);

        document.getElementById("celsius").value =
            fare_celcius(f).toFixed(2);

        document.getElementById("kelvin").value =
            fare_kelvin(f).toFixed(2);
    }

    // Kelvin
    else {

        k = Number(k);

        document.getElementById("celsius").value =
            kelvin_celcius(k).toFixed(2);

        document.getElementById("fahrenheit").value =
            kelvin_fare(k).toFixed(2);
    }
}

function apagar() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("kelvin").value = "";
}