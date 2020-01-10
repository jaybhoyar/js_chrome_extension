// You js goes here
function randomColor() {
	let words = "ABCDEF0123456789".split("");
	let color = "#";
	for (i = 0; i < 6; i++) {
		color += words[Math.floor(Math.random() * 16)];
	}
	return color;
}
document.querySelector("body").style.backgroundColor = randomColor();
