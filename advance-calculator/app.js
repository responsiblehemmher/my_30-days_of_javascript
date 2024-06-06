/* const display = document.querySelector('.display');
const controls = document.querySelector('.controls');
const controlButtons = controls.querySelectorAll('button');
const allOperators = ['+', '-', 'x', '÷', '%', '=', 'c'];
const mainOperators = ['+', '-', 'x', '÷', '%'];

let firstValue = '';
let secondValue = '';
let operator = '';
let result = '';

const formatNumber = (num) => new Intl.NumberFormat().format(Number(num));

const calculate = (value) => {
  firstValue = parseFloat(firstValue);
  secondValue = parseFloat(secondValue);

  switch (operator) {
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
    case 'x':
      result = firstValue * secondValue;
      break;
    case '÷':
      result = firstValue / secondValue;
      break;
    case '%':
      result = firstValue % secondValue;
  }

  display.innerText = formatNumber(result);
  value === '=' ? firstValue = '' : firstValue = result;
  secondValue = '';
}

const removeActive = () => controlButtons.forEach(button => button.classList.remove('active'));

controls.addEventListener('click', (e) => {
  const { innerText: btnValue } = e.target;
  if (!btnValue) return null;

  if (mainOperators.includes(btnValue)) {
    removeActive();
    e.target.classList.toggle('active');
  }

  if (btnValue === 'c') {
    removeActive();
    firstValue = secondValue = operator = '';
    return display.innerText = '';
  }

  const btnValueIsOperator = allOperators.includes(btnValue);
  if (!btnValueIsOperator && !operator) {
    firstValue += btnValue;
    display.innerText = firstValue;
  } else if (!btnValueIsOperator && operator) {
    secondValue += btnValue;
    display.innerText = secondValue;
  }

  if (btnValueIsOperator && btnValue !== '=' && btnValue !== 'c') {
    operator = btnValue;
  }

  if (btnValue === '=' && firstValue && operator && secondValue) {
    calculate(btnValue);
    operator = '';
  }
});
 */

// Destructuring Example 1
/* document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('userForm');
  const messageDiv = document.getElementById('message');

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const formData = new FormData(form);
      const user = {
          name: formData.get('name'),
          age: formData.get('age')
      };
      
      // Destructuring the user object
      const { name, age } = user;
      
      // Display the greeting message
      messageDiv.textContent = `Hello, ${name}! You are ${age} years old.`;
  });
});
 */