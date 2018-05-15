const form = document.querySelector('form#userForm')

// function changeText(){
//     console.log('jjj')
//     let userInput = document.querySelector('.H')
//     userInput.textContent = document.getElementById("FA").value
     const handleSubmit = function(ev) {
        ev.preventDefault()
        const form = ev.target
        const favoriteanimal = form.favoriteanimal.value
        const heading = document.querySelector('h1')
        heading.textContent = favoriteanimal
    }
form.addEventListener('submit', handleSubmit)
