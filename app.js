function lanzarCentenas() {
    console.log("Lanzar Centenas")
    texto = document.getElementById("texto").value
    centenas = document.getElementById("centenas").value
    decenas = document.getElementById("decenas").value
    unidades = document.getElementById("unidades").value
    openInNewTab("./centenas/index.html?texto=" + texto + "&centenas=" + centenas + "&decenas=" + decenas + "&unidades=" + unidades);
}

function lanzarSinonimos() {
    openInNewTab("./sinonimos/index.html")
}

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}