var valor_inicial = 1;
var valor_final = 9;
var num_unidades = valor_final - valor_inicial;

document.getElementById("minuendo").innerHTML = valor_final;
document.getElementById("sustraendo").innerHTML = valor_inicial;
document.getElementById("resultado").innerHTML = num_unidades + "!!";

function empezar_contar() {
    for (i = 0; i <= num_unidades; i++) {
        identificador = "v" + i;
        setTimeout(actualiza_unidad, 1000 * i, identificador, valor_inicial, i);
        valor_inicial++;

    }
}

function actualiza_unidad(identificador, valor, unidad) {
    console.log("Valor:" + valor_inicial);
    console.log("id:" + identificador);
    document.getElementById(identificador).innerHTML = valor;

    document.getElementById("dedo_" + unidad).classList.remove("hide");
    if (unidad > 1) {
        document.getElementById("dedo_" + (unidad - 1)).classList.add("hide");
    }
    if (unidad > 5) {
        document.getElementById("dedo_5").classList.remove("hide");
    }

    if (unidad == num_unidades) {
        // document.getElementById("resultado").classList.remove("hide");
        document.getElementsByClassName("resultado-pablo")[0].classList.remove("hide");
    }
}

function comprobar() {
    if (document.getElementById("resultado_pablo").value == num_unidades) {
        document.getElementsByClassName("resultado-pablo")[0].classList.add("hide");
        document.getElementById("resultado").classList.remove("hide");
    }
}


