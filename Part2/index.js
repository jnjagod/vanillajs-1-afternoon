// console.log('the house always wins')

const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

// console.log(idInput);
// console.log(idColor);

function setCard(){
    let card = document.getElementById(idInput.value)
    card.style.color = colorInput.value
    console.log(card)
}