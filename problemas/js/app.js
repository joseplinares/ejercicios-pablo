const querystring = window.location.search
console.log(querystring)
const params = new URLSearchParams(querystring)
p_n1 = params.get("n1")
p_n2 = params.get("n2")


document.getElementById("n_1").innerHTML = p_n1
document.getElementById("n_2").innerHTML = p_n2

function comprobar_resultado_falta() {
    resultado = parseInt(p_n1) - parseInt(p_n2)
    res_operacion = document.getElementById("resultado").value;
    if (resultado == res_operacion) {
        document.getElementById("correct").classList.remove("hide")
        setTimeout(() => {
            document.getElementById("correct").classList.add("hide");
        }, 3000);
    }
}