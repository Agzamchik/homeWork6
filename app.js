const counterInput = document.getElementById('counterInput')
const incrementBtn = document.getElementById('incrementBtn')
const decrementBtn = document.getElementById('decrementBtn')
const resetBtn = document.getElementById('resetBtn')

function updateColor() {
    const value = parseInt(counterInput.value)
    if (value > 0) {
        counterInput.style.color = 'green'
    } else if (value < 0) {
        counterInput.style.color = 'red'
    } else {
        counterInput.style.color = 'gray'
    }
}
incrementBtn.addEventListener('click', () => {
    counterInput.value = parseInt(counterInput.value) + 1
    updateColor()
})
decrementBtn.addEventListener('click', () => {
    counterInput.value = parseInt(counterInput.value) - 1
    updateColor()
})
resetBtn.addEventListener('click', () => {
    counterInput.value = 0
    updateColor()
})
const redLight = document.getElementById('redLight')
const yellowLight = document.getElementById('yellowLight')
const greenLight = document.getElementById('greenLight')
redLight.addEventListener('click', () => {
    alert('Стоп')
})
yellowLight.addEventListener('click', () => {
    alert('Готовься')
})
greenLight.addEventListener('click', () => {
    alert('Иди')
})
const counterApp = document.getElementById('counterApp')
counterApp.style.marginBottom = '20px'
const trafficLight = document.getElementById('trafficLight')
trafficLight.style.display = 'flex'
trafficLight.style.justifyContent = 'center'
trafficLight.style.marginTop = '20px'
const light = document.querySelectorAll('.light')
light.forEach(l => {
    l.style.width = '100px'
    l.style.height = '100px'
    l.style.borderRadius = '50%'
    l.style.margin = '0 10px'
})
redLight.style.backgroundColor = 'red'
yellowLight.style.backgroundColor = 'yellow'
greenLight.style.backgroundColor = 'green'
