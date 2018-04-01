// MATH functions
function divide(a, b){
	if (b === 0){
		return "Stop that!"
	} else {
	return a / b
}
}
function multiply(a, b){
	return a * b;
}
function add(a, b){
	return a + b;
}
function subtract(a, b){
	return a - b;
}

//OPERATE function which calls one of the above functions
function operate(operator, a, b){
	if (operator === "add"){
		return add(a, b)
	}
	if (operator === "subtract"){
		return subtract(a, b)
	}
	if (operator === "multiply"){
		return multiply(a, b)
	}
	if (operator === "divide"){
		return divide(a, b)
	} else {
		return "Error!"
	}
}

// VARIABLES 
const maxLength = 15;

var a = "";
var b = "";
var op = "";

let opPrevious = false;
let firstInput = true;
let equalsPrevious = false;



// the text portion of the display window 
const result = document.getElementById("result");
	result.innerText = "";

//NUMBERS for all of the number btns this function records the value of the button when it is clicked. It displays the numbers in the results bar(in the display)
const numBtns = document.querySelectorAll(".button");
numBtns.forEach(btn => {
	btn.addEventListener('click', function(e) {
		if (opPrevious){
			result.innerText = btn.value;
			opPrevious = false
		} else if (equalsPrevious){
			result.innerText = btn.value;
			equalsPrevious = false;
		} else if (result.innerText.length < maxLength){
			result.innerText += btn.value;
		};
	});
});



// OPERATOR buttons
const opBtns = document.querySelectorAll(".operator");
opBtns.forEach(btn => {
	btn.addEventListener('click', function(e) {
		if((!opPrevious)) {
			if (firstInput || equalsPrevious){
				a = result.innerText;
				op = btn.value;
				opPrevious = true;
				firstInput = false;
				equalsPrevious = false;			
			}
			else {
				b = result.innerText;
				result.innerText = operate(op, Number(a), Number(b));
				a = result.innerText;
				op = btn.value;
				opPrevious = true;
			};
		};
	});
});

// EQUALS button
const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener('click', function(e){
	if (!firstInput) {
		b = result.innerText;
		tempResult = operate(op, Number(a), Number(b));
		result.innerText = tempResult
		firstInput = true;
		equalsPrevious = true;
	}
});


// DECIMAL point "." button and its functionality
const decimalBtn = document.querySelector(".decimal");
decimalBtn.addEventListener('click', function(e){
	if(!(result.innerText.indexOf(".") > -1))
		result.innerText += decimalBtn.value
});

// CLEAR this refreshes the page when the clear button is hit. 
const reset = document.querySelector('#clear');
reset.addEventListener('click', () => {
	location.reload()
});

// DELETE/backspace function
const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', function(e){
	if(result.innerText)
		result.innerText = result.innerText.slice(0, -1);
});

