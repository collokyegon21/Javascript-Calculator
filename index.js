const history = [];

// Adding two numbers
function add(a, b) {
  const result = a + b;
  addToHistory(a, b, "+", result);
  return result;
}

// Subtracting two numbers
function subtract(a, b) {
  const result = a - b;
  addToHistory(a, b, "-", result);
  return result;
}

// Multiplying two numbers
function multiply(a, b) {
  const result = a * b;
  addToHistory(a, b, "*", result);
  return result;
}

// Dividing two numbers
function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero.";
  }

  const result = a / b;
  addToHistory(a, b, "/", result);
  return result;
}

// Store a calculation in the history array
function addToHistory(a, b, operator, result) {
  const calculation = {
    operands: [a, b],
    operator: operator,
    result: result,
  };

  history.push(calculation);
}

// Display calculation history
function displayHistory() {
  if (history.length === 0) {
    console.log("No calculations stored.");
    return;
  }

  console.log("Calculation History:");

  history.forEach((calculation, index) => {
    const [a, b] = calculation.operands;

    console.log(
      `${index + 1}. ${a} ${calculation.operator} ${b} = ${calculation.result}`,
    );
  });
}

// Example calculations
console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));

// Display all calculations
displayHistory();
