const buttons = document.querySelectorAll('#counter button');
const decButton = buttons[0];
const incButton = buttons[1];
const counterValue = document.getElementById('value');
// console.log(buttons)
// console.log(decButton)
// console.log(incButton)
// console.log(counterValue)

function getCounter() {
  let count = 0;
  function decrement() {
    return (count -= 1)
  }
  function increment() {
    return (count += 1)
  }
  return { decrement, increment };
}

const counter = getCounter()
// console.log(counter)

decButton.addEventListener('click', () => {
  // console.log('click')
  let result = counter.decrement()
  // console.log(result)
  counterValue.textContent = result;
})

incButton.addEventListener('click', () => {
  // console.log('click')
  let result = counter.increment()
  // console.log(result)
  counterValue.textContent = result;
})

