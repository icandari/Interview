document.addEventListener("DOMContentLoaded", function(){
    let numberInput =  document.getElementById('number-input')
    let calculateButton = document.getElementById('calculate-button')
    let result = document.getElementById('result')


    calculateButton.addEventListener('click', showNumbers);


    function showNumbers() {
        let parsedNumber = Number(numberInput.value)
        console.log(parsedNumber)
        result.innerHTML = ""

        for(let i = 0; i < parsedNumber; i++ ){
            
            let newLiElement = document.createElement('li')
            newLiElement.innerText = i + 1;
            console.log(newLiElement)
            result.appendChild(newLiElement)
        }
    }
})