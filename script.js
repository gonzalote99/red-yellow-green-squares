
let titleDiv = document.getElementById('title');
let message = 'square counter';

titleDiv.innerText = message;

titleDiv.innerHTML = `<p>${message}</p>`;

titleDiv.style.background = "blue";

const squares = document.querySelectorAll('.colorSquare');

const timesClicked = {'red': 0, 'yellow': 0, 'green': 0}
squares.forEach(square => {
square.onclick = () => {
  timesClicked[square.value] += 1;
  square.innerText = timesClicked[square.value]
}
})

function clearScores() {
  timesClicked.red = 0;
  timesClicked.yellow = 0;
  timesClicked.green = 0;
  squares.forEach(square => {
    square.innerText = ''
  })

}

const clearGameBtn = document.getElementById('clear-game');
clearGameBtn.onclick = () => clearScores();
