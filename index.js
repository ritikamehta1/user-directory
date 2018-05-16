
const form = document.querySelector('form#userForm')

     const handleSubmit = function(ev) {
        ev.preventDefault()
        const form = ev.target
        const user = {
            name: form.userName.value,
            age: form.age.value,
            favoriteColor: form.favoriteColor.value,
        }
        const list = document.createElement('ul')

        Object.keys(user).map(function(label) {
            const items = renderListItem(label, user[label])        
            list.appendChild(item)
        }) 

        const colorDiv = document.createElement('div')

        const renderColor = function(favoriteColor) {
            colorDiv.style.backgroundColor= favoriteColor
            colorDiv.style.width = '6rem'
            colorDiv.style.height = '3rem'
            return colorDiv;
            }
        
        function renderListItem (label, value) {
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
        
        list.appendChild(items[0])
        list.appendChild(items[1])
        list.appendChild(items[2]);


        users.appendChild(list)

        form.reset() 
        form.userName.focus() 
    }
form.addEventListener('submit', handleSubmit)
