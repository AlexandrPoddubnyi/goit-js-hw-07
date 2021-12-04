const inputEl = document.getElementById('name-input');
const spanEl = document.getElementById('name-output');

// console.log(inputEl.value)
// console.log(spanEl.textContent)

inputEl.addEventListener('input', nameChange)

function nameChange() {
  spanEl.textContent = inputEl.value;
  if (inputEl.value === '') {
    spanEl.textContent = 'незнакомец'
  }
}