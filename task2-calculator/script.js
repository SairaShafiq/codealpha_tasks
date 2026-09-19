let expression = "";
let lastExpression = "";

const expressionEl = document.getElementById("expression");
const resultEl = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    const value = button.dataset.value;

    if (action === "clear") {
      expression = "";
      lastExpression = "";
    } 
    else if (action === "backspace") {
      expression = expression.slice(0, -1);
    } 
    else if (action === "percent") {
      expression += "/100";
    } 
    else if (action === "operator") {
      expression += value;
    } 
    else if (action === "equals") {
      lastExpression = expression;
      expression = calculate(expression);
    } 
    else {
      expression += value;
    }

    updateDisplay();
  });
});

function calculate(expr) {
  let calcExpr = expr
    .replaceAll("×", "*")
    .replaceAll("÷", "/")
    .replaceAll("−", "-");

  try {
    let result = eval(calcExpr);
    return result.toString();
  } catch {
    return "Error";
  }
}

function updateDisplay() {
  expressionEl.textContent = lastExpression;
  resultEl.textContent = expression === "" ? "0" : expression;
}