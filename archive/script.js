document.addEventListener('DOMContentLoaded', function() {

    let firstNumber = document.getElementById('first-number')
    let secondNumber = document.getElementById('second-number')
    let calculateButton = document.getElementById('calculate-button')
    let operatorSign = document.getElementById('operator-sign')
    let calculatedResult; //needs to be outside/ global so it can be used outside the else if statements
    

    let textInput = document.getElementById('text-here')
    let textToConsoleButton = document.getElementById('text-to-console');

    textToConsoleButton.addEventListener('click',function() {
        (console.log(textInput.value))
    })

    // More efficient way to write the code up top
    // document.getElementById('text-to-console').addEventListener('click',function() {
    //     (console.log(textInput.value))
    // })


    nameArray = ["Green", "Red", "Blue", "Orange", "Yellow"]

    nameArray.forEach(element => {
        console.log(element)
    });

    // nameArray.forEach((element, index) => {
    //     console.log(nameArray[index]) // Use the index parameter
    // });
    // element is redundant, since its not being used


    const colorBoxesContainer = document.querySelector('.color-boxes');
    
    nameArray.forEach(color => {
        const newParagraphElement = document.createElement('p')

        // Set its text content to the color name
        newParagraphElement.textContent = color;

        colorBoxesContainer.appendChild(newParagraphElement)




    })


//  const newParagraphElement = document.createElement('p');
//     newParagraphElement.textContent = color;
//     newParagraphElement.style.backgroundColor = color.toLowerCase();
//     newParagraphElement.style.color = "white";
//     newParagraphElement.style.padding = "10px";
//     newParagraphElement.style.margin = "5px";
//     colorBoxesContainer.appendChild(newParagraphElement);
      


    function addTwoNumbers() {
        let numberOne = Number(secondNumber.value);
        let numberTwo = Number(firstNumber.value);

        if (operatorSign.value == 'add') {
            calculatedResult = numberOne + numberTwo
        } else if (operatorSign.value == 'subtract'){
            calculatedResult = numberOne - numberTwo
        } else if (operatorSign.value == 'multiply'){
            calculatedResult = numberOne * numberTwo
        } else if (operatorSign.value == 'divide'){
            calculatedResult = numberOne / numberTwo
        }

        console.log('You ran the calculation ' + numberOne + " " + operatorSign.value + " " + numberTwo + ' which equals ' + calculatedResult )
        document.getElementById('display-result').innerHTML = calculatedResult
    }

    
    console.log(textInput.value)

    calculateButton.addEventListener('click', addTwoNumbers);

   


});