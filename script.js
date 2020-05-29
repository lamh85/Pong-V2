console.log('starting!')

const keyMap = {
  101: 'up',
  100: 'down',
  115: 'left',
  102: 'right'
}

document.querySelector('body').addEventListener('keypress', event => {
  const { keyCode } = event

  console.log(keyMap[keyCode])
})