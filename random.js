var randFood = []
randFood[0] = "Sushi";
randFood[1] = "Chick-Fil-A";
randFood[2] = "Poke";
randFood[3] = "Chips Ahoy!"
randFood[4] = "Ruffles";
randFood[5] = "Dumplings";

function randomFood() {
  var randomFood = Math.floor(Math.random()*(randFood.length));
  document.getElementById('paragraph').innerHTML = randFood[randomFood];
}