let previousNumber = '';
let currentNumber = '';
let currentOperator = ''; 
const numbers = document.querySelectorAll('.btn_number');
const operators = document.querySelectorAll('.btn_operator');
const point = document.getElementById('decimal');
const equal = document.getElementById('equal');
const opposite = document.getElementById('opposite');
const clearAll = document.getElementById('ac');
const inputViewed = document.querySelector('.input_number');
const operatorViewed = document.querySelector('.show_operator');
 
function toFixed (currentNumber) {
    let power = Math.pow(10, 14);
    return String(Math.round(currentNumber * power) / power);
}


function updateDisplay(e) {
    if(currentNumber.includes('.')) {
        console.log(currentNumber);
        inputViewed.value = toFixed(currentNumber);
        operatorViewed.textContent = currentOperator;
    } else {
   inputViewed.value = currentNumber; 
   operatorViewed.textContent = currentOperator}; 
   };

function addNumber(e) {
    console.log(currentOperator);
    if(currentOperator === '=') {
        currentOperator = '';
        operatorViewed.textContent = '';
        previousNumber = '';
        currentNumber = e.target.textContent;
        inputViewed.placeholder = '';
    } else {
        currentNumber = `${currentNumber}${e.target.textContent}`;
        inputViewed.placeholder = '';

    };
    updateDisplay();
};

function addOperator(e) {
    if(e.target.textContent === '√' && currentOperator === '') {
        previousNumber = currentNumber;
        currentOperator = e.target.textContent;
        inputViewed.placeholder = previousNumber;
        currentNumber = '';
        
    } else if (currentOperator !== '=' && currentOperator !== '') {
        previousNumber = `${mathOperations()}`;
        currentOperator = e.target.textContent;
        inputViewed.placeholder = previousNumber;
        currentNumber = '';

    } else
    {
 currentOperator = e.target.textContent;
 previousNumber = currentNumber;
 currentNumber = ''
 inputViewed.placeholder ='0';
};
 updateDisplay();
};

function calculate(e) {
    console.log(mathOperations());
    currentNumber = `${mathOperations()}`;
    currentOperator = '=';
updateDisplay();
};

function clear(e) {
        previousNumber = '';
        currentNumber = '';
        currentOperator = '';
        inputViewed.placeholder = '0';
    updateDisplay();
}; 

function mathOperations(e) {

 switch(currentOperator) {
    case '+' :
        return  +previousNumber + +currentNumber;
    case '×' :
        case '' :
        return  +previousNumber * +currentNumber;
    case '-' :
        return previousNumber - currentNumber;
    case '*' :
        return previousNumber * (+currentNumber || 1);
    case '÷' :
        return previousNumber / (+currentNumber || 1);
    case '**' :
        return previousNumber ** (+currentNumber || 1);
    case '√' :
        if(+previousNumber > 0) {
        result = '';
        return Math.sqrt(+previousNumber);
        
        }
        else {
            return calculate = "lochar";
        }                 
 };
 updateDisplay();
};

function makeDecimale(e) {
 if (!currentNumber.includes('.')){
    currentNumber = currentNumber === '' || currentNumber === '0' ? '0.' : `${currentNumber}${'.'}`;
};
 updateDisplay();
};

function makeOpposite(e) {
  if(currentNumber !== '0') {
    currentNumber = `${currentNumber * (-1)}`
  }
 updateDisplay(); 
};

for (let i = 0; i < numbers.length ; i++ ) {
 numbers[i].addEventListener('click', addNumber);
};

for (let i = 0; i< operators.length; i++) {
    operators[i].addEventListener('click', addOperator);
};

point.addEventListener('click', makeDecimale);
equal.addEventListener('click',calculate);
opposite.addEventListener('click', makeOpposite);
clearAll.addEventListener('click', clear);

