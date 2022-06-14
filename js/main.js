new fullpage('#fullpage', {
	parallax: true,
	scrollingSpeed: 700,
	anchors:['firstPage', 'secondPage'],
});

const one = document.getElementById('one')

let array = []
let arraySTR = []

str = str.split('')

console.log(str);






function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
