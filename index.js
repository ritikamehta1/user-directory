const form = document.querySelector('form#userForm')

// function changeText(){
//     console.log('jjj')
//     let userInput = document.querySelector('.H')
//     userInput.textContent = document.getElementById("FA").value
     const handleSubmit = function(ev) {
        ev.preventDefault()
        const form = ev.target
        const userName = form.userName.value
        const users = document.querySelector('#users')
        users.innterHTML +='<p>' + userName + ", " + form.age.value + '</p>'
        form.reset() 
        form.userName.focus() 
    }
form.addEventListener('submit', handleSubmit)
