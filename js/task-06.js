// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputEl = document.getElementById('validation-input')
const inputAtribute = inputEl.getAttribute('data-length')
// console.log(inputAtribute)
  
inputEl.addEventListener('blur', inputBlur);
// inputEl.setAttribute('style', 'border: 3px solid #bdbdbd' )

function inputBlur() {
  // console.log('input poteryal focus');
  if (inputEl.value.length === Number(inputAtribute)) {
    // inputEl.setAttribute('style', 'border-color: #4caf50');
    inputEl.classList.replace('invalid', 'valid') ||
      inputEl.classList.add('valid');
      
  }
    else {
      // inputEl.setAttribute('style', 'border-color: #f44336');
    inputEl.classList.replace('valid', 'invalid') ||
      inputEl.classList.add('invalid');
        
    }
}