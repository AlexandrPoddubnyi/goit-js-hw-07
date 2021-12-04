const controller = document.getElementById('font-size-control')
const text = document.getElementById('text')
controller.addEventListener('change',textSizeChange)

function textSizeChange(event) {
    text.style.fontSize = `${controller.value}px`
  console.log(event)
}