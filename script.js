const button = document.querySelectorAll('span')
const body = document.querySelector('body')
button.forEach(function (button) {
    button.addEventListener('click', function (event) {
        if(event.target.id === 'blue') {
            body.style.backgroundColor = 'blue'
        }
        if(event.target.id === 'yellow') {
            body.style.backgroundColor = 'yellow'
        }
        if(event.target.id === 'orange') {
            body.style.backgroundColor = 'orange'
        }
        if(event.target.id === 'red') {
            body.style.backgroundColor = 'red'
        }
    })
})