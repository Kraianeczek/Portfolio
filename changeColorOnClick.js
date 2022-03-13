const colorInput = document.querySelector('input[type=color]');     // wybieramy element z HTML
const colorButton = document.querySelector('button');              // wybieramy przycisk 
const colorVariable = '--yellow';                 // wybieramy kolor zmiennej z css

colorButton.addEventListener('click', () => {       // wybieramy element na którym ustawiamy onClick
    document.documentElement.style.setProperty(colorVariable, 'green');     // document.documentElement - wybieramy element Root, style.setProperty - wybieramy co mamy ustawić, po czym podajemy wartość z jakiej na jaką zmienić
})