// You js goes here
let textArea = document.querySelector(".text_input");
let saveClip = document.querySelector(".save_clip_button");
let container = document.querySelector(".container_2");
let clearAll = document.querySelector(".clearAll");
let clips = JSON.parse(localStorage.getItem("clipArr")) || [];
let id = Date.now();

function createClips(event) {
	if (event.keyCode == 13 && event.target.value.trim() != "") {
		console.log(event.target.value);
		const clip = {
			name: event.target.value,
			id: ++id
		};
		clips.push(clip);
		localStorage.setItem("clipArr", JSON.stringify(clips));
		event.target.value = "";
		clips = JSON.parse(localStorage.getItem("clipArr"));
		viewClips(clips);
	}
}
function viewClips(clipsArr) {
	debugger;
	container.innerHTML = "";
	clipsArr.forEach(clip => {
		let div = document.createElement("div");
		div.setAttribute("data-id", clip.id);
		div.classList.add("show_clip");
		div.classList.add("show_clip_header");
		div.innerText = clip.name;
		container.append(p);
	});
}
function deleteClip() {
	let target = event.target;
	clips = clips.filter(clip => !(target.dataset.id == clip.id));
	localStorage.setItem("clipArr", JSON.stringify(clips));

	viewClips(clips);
}

// function randomColor() {
// 	let words = "ABCDEF0123456789".split("");
// 	let color = "#";
// 	for (i = 0; i < 6; i++) {
// 		color += words[Math.floor(Math.random() * 16)];
// 	}
// 	return color;
// }
viewClips(clips);
// document.querySelector("body").style.backgroundColor = randomColor();
// viewClips(clips);
// textArea.addEventListener("keydown", createClips);
textArea.addEventListener("keydown", createClips);
clearAll.addEventListener("click", deleteAllClips);
//
//  copy
// function selectValue(event) {
// 	var range = document.createRange();
// 	range.selectNode(event.target);
// 	window.getSelection().removeAllRanges(); // clear current selection
// 	window.getSelection().addRange(range); // to select text
// 	document.execCommand("copy");
// 	//window.getSelection().removeAllRanges(); // to deselect
// 	setTimeout(addCopied, 0);
// 	setTimeout(removeCopied, 2000);
// 	function addCopied() {
// 		event.target.innerText = "Copied";
// 		event.target.style.color = "#fff";
// 		event.target.style.fontWeight = "600";
// 		event.target.style.fontSize = "1.2rem";
// 	}

// 	function removeCopied() {
// 		event.target.innerText = colors;
// 		event.target.style.fontWeight = "400";
// 		event.target.style.fontSize = "1rem";
// 		event.target.style.color = "#000";
// 	}
// }
