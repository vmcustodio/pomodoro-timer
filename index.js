const initialTimeInSeconds = 25 * 60; // 1500
let timeInSeconds = initialTimeInSeconds;
let timer = null;

const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

playButton.addEventListener('click', startCounter);
pauseButton.addEventListener('click', pauseCounter);
resetButton.addEventListener('click', resetCounter);

updateDom();
feather.replace();
function startCounter() {
  timer = setInterval(() => {
    timeInSeconds--;
    updateDom();
  }, 1000);
}

function pauseCounter() {
  clearInterval(timer);
}

function resetCounter() {
  clearInterval(timer);
  timeInSeconds = initialTimeInSeconds;
  updateDom();
}

function updateDom() {
  const minutes = Math.floor(timeInSeconds / 60);
  document.getElementById('min').innerHTML = String(minutes).padStart(
    2,
    0
  );

  const seconds = timeInSeconds % 60;
  document.getElementById('sec').innerHTML = String(seconds).padStart(
    2,
    0
  ); // padStart diz o tamanho minimo que a string precisa ter e se não tiver, coloca o 0 na frente
}
