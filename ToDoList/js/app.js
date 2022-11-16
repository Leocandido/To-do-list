const LISTA = document.querySelector('.lista')
const INPUT = document.getElementById('Input')

function newTask(){
    let li = document.createElement("li")
    let inputValue = INPUT.value
    let tarefa = document.createTextNode(inputValue)
    let div = document.createElement('div')
    let button = document.createElement("button")
    let x = document.createTextNode("X")
    li.appendChild(tarefa)
    li.classList.add('lista__item')
    button.appendChild(x)
    button.classList.add("lista__item__button")
    button.addEventListener('click', function (){
        li.style.display = 'none'
    })
    div.appendChild(button)
    li.appendChild(div)
    if (inputValue.trim() == '') {
        return alert("You didn't write nothing")
    } else {
        LISTA.appendChild(li)
    }

    INPUT.value = ""
}

function enter(event){
    if (event.key == 'Enter'){
        newTask()
    }
}

LISTA.addEventListener('click', function (ev) {
    if (ev.target.tagName == 'LI') {
        ev.target.classList.toggle('lista__item--feita')
        ev.target.classList.toggle('lista__item')
    }
});