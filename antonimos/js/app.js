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


sucess = 0
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
    id_container = e.target.id;
    end_id_container = id_container.substring(id_container.indexOf('_'));
    end_id_item = id.substring(id.indexOf('_'));
    if (end_id_container == end_id_item) {
        e.target.classList.add("guay");
        var snd = new Audio("img/success-sound-effect.mp3");
        snd.play();
        snd.currentTime = 0;
        sucess = sucess + 1;
        if (sucess == 6) show_aplausos()
    }

}



function show_aplausos() {
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

