const button = document.querySelector('button')

function changeText(){
    console.log('jjj')
    let userInput = document.querySelector('.H')
    userInput.textContent = document.getElementById("FA").value
    
}
button.addEventListener('click', changeText)
