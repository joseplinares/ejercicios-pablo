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
    var valor_1 = null
    var valor_2 = null
    var valor_3 = null
    var valor_4 = null
    var valor_5 = null
    if (document.getElementById("valor_1").querySelector("h1"))
        valor_1 = document.getElementById("valor_1").querySelector("h1").innerHTML;
    if (document.getElementById("valor_2").querySelector("h1"))
        valor_2 = document.getElementById("valor_2").querySelector("h1").innerHTML;
    if (document.getElementById("valor_3").querySelector("h1"))
        valor_3 = document.getElementById("valor_3").querySelector("h1").innerHTML;
    if (document.getElementById("valor_4").querySelector("h1"))
        valor_4 = document.getElementById("valor_4").querySelector("h1").innerHTML;
    if (document.getElementById("valor_5").querySelector("h1"))
        valor_5 = document.getElementById("valor_5").querySelector("h1").innerHTML;


    if (valor_1 && valor_2 && valor_3 && valor_4 && valor_5) {
        if ((parseInt(valor_1) > parseInt(valor_2)) && (parseInt(valor_2) > parseInt(valor_3)) && (parseInt(valor_3) && parseInt(valor_4)) && (parseInt(valor_4) > parseInt(valor_5)))
            show_aplausos()
    }

}

function show_aplausos() {
    document.getElementById("correct").classList.remove("hide")
    setTimeout(() => {
        document.getElementById("correct").classList.add("hide");
    }, 3000);

}

