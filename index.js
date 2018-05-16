const form = document.querySelector('form#userForm')

// function changeText(){
//     console.log('jjj')
//     let userInput = document.querySelector('.H')
//     userInput.textContent = document.getElementById("FA").value
     const handleSubmit = function(ev) {
        ev.preventDefault()
        const form = ev.target
        const userName = form.userName.value
        const age = form.age.value
        const favoriteColor = form.favoriteColor.value

        const list = document.createElement('ul')

        const colorDiv = document.createElement('div')
        // colorDiv.style.backgroundColor= favoriteColor
        // colorDiv.style.width = '6rem'
        // colorDiv.style.height = '3rem'
        // colorItem.appendChild(colorDiv)

        const renderColor = function(favoriteColor) {
        colorDiv.style.backgroundColor= favoriteColor
        colorDiv.style.width = '6rem'
        colorDiv.style.height = '3rem'
        return colorDiv;
        }
        
         function renderListItem () {
            const nameItem = document.createElement('li')
            nameItem.textContent = `Name: ${arguments[0]}`
    
            const ageItem = document.createElement('li')
            ageItem.textContent = `Age: ${arguments[1]}`
    
            const colorItem = document.createElement('li')
            colorItem.textContent = 'Favorite Color: '
            
            colorItem.appendChild(renderColor(arguments[2]))
            return [nameItem, ageItem, colorItem]
        }
        const users = document.querySelector('#users')
        
        const items = renderListItem(userName, age, favoriteColor)

        list.appendChild(items[0])
        list.appendChild(items[1])
        list.appendChild(items[2]);


        users.appendChild(list)

        form.reset() 
        form.userName.focus() 
    }
form.addEventListener('submit', handleSubmit)
