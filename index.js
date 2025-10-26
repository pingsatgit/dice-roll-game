// Roll two dice, update images and heading text
function rollDice() {
	var randomNumber1 = Math.floor(Math.random() * 6) + 1;
	var randomNumber2 = Math.floor(Math.random() * 6) + 1;

	var img1 = document.querySelector('.img1');
	var img2 = document.querySelector('.img2');
	if (img1) img1.setAttribute('src', 'images/dice' + randomNumber1 + '.png');
	if (img2) img2.setAttribute('src', 'images/dice' + randomNumber2 + '.png');

	var heading = document.querySelector('h1');
	if (heading) {
		if (randomNumber1 > randomNumber2) {
			heading.textContent = 'Player 1 Wins!';
		} else if (randomNumber2 > randomNumber1) {
			heading.textContent = 'Player 2 Wins!';
		} else {
			heading.textContent = "Draw!";
		}
	}
}

// Run on page load
document.addEventListener('DOMContentLoaded', rollDice);

// Also allow re-roll by clicking the heading
var heading = document.querySelector('h1');
if (heading) heading.addEventListener('click', rollDice);

