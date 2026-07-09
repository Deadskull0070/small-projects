const display = document.querySelector(".display");

const buttons = document.querySelectorAll("button");

for(const button of buttons){
    button.addEventListener("click", function(){
        if(button.innerText === "C"){
            display.innerText = "";
        }else if(button.innerText === "="){
            const expression = display.innerText;

            let firstNumber = "";
            let secondNumber = "";
            let operator = "";

            let foundOperator = false;
            for(let i = 0; i < expression.length; i++){
                let ch = expression[i];
                if(ch === "+" || ch === "-" || ch === "*" || ch ==="/"){
                    operator = ch;
                    foundOperator = true;
                }else {
                    if(!foundOperator){
                        firstNumber += ch;
                    }else{
                        secondNumber += ch; 
                    }
                }
            }
            firstNumber = Number(firstNumber);
            secondNumber = Number(secondNumber);

            let answer = 0;
            if(operator === "+"){
                answer = firstNumber + secondNumber;
            }else if(operator === "-"){
                answer = firstNumber - secondNumber;
            }else if(operator === "*"){
                answer = firstNumber * secondNumber;
            }else if(operator === "/"){
                answer = firstNumber / secondNumber;
            }
            display.innerText = answer;
        }
        
        else{
        display.innerText += button.innerText;
    }
   
    })
}

