const querystring = window.location.search
console.log(querystring)
const params = new URLSearchParams(querystring)
p_texto = params.get("texto")
p_centena = params.get("centenas")
p_decena = params.get("decenas")
p_unidad = params.get("unidades")
console.log(p_texto)

const centena = parseInt(p_centena)
const decena = parseInt(p_decena)
const unidad = parseInt(p_unidad)
const valor = p_centena + p_decena + p_unidad

console.log(centena)
console.log(decena)
console.log(unidad)
console.log(valor)

document.getElementById("title").innerHTML = p_texto
document.getElementById("resultado_1").innerHTML = valor + "="
document.getElementById("resultado_2").innerHTML = valor + "="
// select the item element
const items = document.querySelectorAll('.item');

// attach the dragstart event handler
items.forEach(item => item.addEventListener('dragstart', dragStart))


// handle the dragstart

function dragStart(e) {
    console.log('drag starts...');
    console.log(e.target.id)
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

const itemsContainer = document.querySelector('.item-container')
itemsContainer.addEventListener('dragenter', dragEnter)
itemsContainer.addEventListener('dragover', dragOver);
itemsContainer.addEventListener('dragleave', dragLeave);
itemsContainer.addEventListener('drop', drop);

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}



function drop(e) {
    e.target.classList.remove('drag-over');
    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    console.log(draggable.querySelector("h1").innerHTML)
    // add it to the drop target
    e.target.appendChild(draggable);
    // display the draggable element
    draggable.classList.remove('hide');
    check_result()

}

function check_result() {
    var valor_centena = null
    var valor_decena = null
    var valor_unidad = null
    if (document.getElementById("centena").querySelector("h1"))
        valor_centena = document.getElementById("centena").querySelector("h1").innerHTML;
    if (document.getElementById("decena").querySelector("h1"))
        valor_decena = document.getElementById("decena").querySelector("h1").innerHTML;
    if (document.getElementById("unidad").querySelector("h1"))
        valor_unidad = document.getElementById("unidad").querySelector("h1").innerHTML;

    console.log(valor_centena);
    console.log(valor_decena);
    console.log(valor_unidad);

    if (valor_centena && valor_decena && valor_unidad && valor_centena == centena && valor_decena == decena && valor_unidad == unidad) {
        show_aplausos()
        var segunda_parte = document.getElementById("segunda_parte")
        setTimeout(() => {
            segunda_parte.classList.remove("hide")
        }, 3000);

    }

}

function show_aplausos() {

    var snd = new Audio("img/aplausos.m4a");
    snd.play();
    snd.currentTime = 0;

    document.getElementById("correct").classList.remove("hide")
    setTimeout(() => {
        document.getElementById("correct").classList.add("hide");
    }, 3000);

}

function show_error() {
    document.getElementById("error").classList.remove("hide")
    setTimeout(() => {
        document.getElementById("error").classList.add("hide");
    }, 3000);

}

function comprobar_resultados() {
    console.log("Comprobar resultados")

    suma_centena = parseInt(document.getElementById("suma_centena").value)
    suma_decena = parseInt(document.getElementById("suma_decena").value);
    suma_unidad = parseInt(document.getElementById("suma_unidad").value);
    console.log(suma_centena);
    console.log(suma_decena);
    console.log(suma_unidad);
    console.log(suma_centena + suma_decena + suma_unidad)

    desc_centena = parseInt(document.getElementById("desc_centena").value) * 100
    desc_decena = parseInt(document.getElementById("desc_decena").value) * 10;
    desc_unidad = parseInt(document.getElementById("desc_unidad").value);


    if ((suma_centena + suma_decena + suma_unidad) == valor && (desc_centena + desc_decena + desc_unidad) == valor) {
        show_aplausos()
    } else {
        show_error()
    }
}

