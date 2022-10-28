function lanzarCentenas() {
    console.log("Lanzar Centenas")
    texto = document.getElementById("texto").value
    centenas = document.getElementById("centenas").value
    decenas = document.getElementById("decenas").value
    unidades = document.getElementById("unidades").value
    openInNewTab("./centenas/index.html?texto=" + texto + "&centenas=" + centenas + "&decenas=" + decenas + "&unidades=" + unidades);
}

function lanzarOdenarMayorMenor() {
    console.log("Lanzar ordenar mayor a menor")
    n1 = document.getElementById("n1").value
    n2 = document.getElementById("n2").value
    n3 = document.getElementById("n3").value
    n4 = document.getElementById("n4").value
    n5 = document.getElementById("n5").value

    openInNewTab("./ordenar-mayor-menor/index.html?n1=" + n1 + "&n2=" + n2 + "&n3=" + n3 + "&n4=" + n4 + "&n5=" + n5);

}

function lanzarOdenarMenorMayor() {
    console.log("Lanzar ordenar menor a mayor")
    n1 = document.getElementById("nn1").value
    n2 = document.getElementById("nn2").value
    n3 = document.getElementById("nn3").value
    n4 = document.getElementById("nn4").value
    n5 = document.getElementById("nn5").value

    openInNewTab("./ordenar_menor_mayor/index.html?n1=" + n1 + "&n2=" + n2 + "&n3=" + n3 + "&n4=" + n4 + "&n5=" + n5);

}

function lanzarSinonimos() {
    openInNewTab("./sinonimos/index.html")
}

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}