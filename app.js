const display = document.getElementById("user-input"); // Get the display element
let expression = ""; // Store the numbers and operators the user enters
let isResultDisplayed = false;

const updateInput = ()=>{
  display.textContent = expression || 0; // Update the expression with the user's input
}

const calculate = ()=> {
  let num = expression.split(/[\+\-\*/]/); // Split the expression into numbers
  let operators = expression.replace(/[0-9]|\./g, "").split(""); // Get the operators
  let result = parseFloat(num[0]);

  for(let i = 0; i < operators.length; i++){
    let nextNum = parseFloat(num[i + 1]);
    let operator = operators[i];
    if(operator === "+") result += nextNum;
    else if(operator === "-") result -= nextNum;
    else if(operator === "*") result *= nextNum;
    else if(operator === "/") result /= nextNum;
    else if(operators === "%") result = result * (nextNum / 100);
  }
  expression = result;
  isResultDisplayed = true;
}


btns = document.querySelectorAll(".btn");
btns.forEach(btn => {
  btn.addEventListener("click", () => {
    let value = btn.textContent;

    if(isResultDisplayed && !isNaN(value)) {
      expression = "";
      isResultDisplayed = false;
    }
    // If an operator is clicked after '=', continue calculation
    if (isResultDisplayed && ["+", "-", "*", "/"].includes(value)) {
      isResultDisplayed = false; // Reset flag to allow further input
    }

    switch (value) {
      case"AC": 
         expression = "";
        break;

        case "DEL": 
         expression =  expression.slice(0, -1);
        break;

        case "=": 
         calculate();
        break;
    
      default:
        expression += value;
      break;
    }
    updateInput();
  });
});
updateInput();