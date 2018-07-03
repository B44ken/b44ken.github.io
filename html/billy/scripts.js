var words = [
	"kill",
	"billy",
	"please",
	"ponies",
	"gay",
	"and",
	"the",
	"other",
	"hug",
	"lonely",
	"depress",
	"sauce",
	"no",
	"ketchup",
	"thick",
	"like",
	"nick",
	"meme",
	"big",
	"small",
	"boy",
	"girl",
	"ooof",
	"do",
	"you",
	"know",
	"way"
];
var countyness = 0;
var punctuate = [".", ".", ".", ",", ",", "!", "?", "?"];
function theme() {
	alert("Too hecking bad hater!")
}
function Function() {
	document.getElementById("clickbait").textContent = "Kill yourself";
}
function random() {
	countyness++;
	if (countyness % 6 == 0) {
		var randomnessinged = Math.floor(Math.random() * punctuate.length);
		document.getElementById("randomnesses").textContent =
			document.getElementById("randomnesses").textContent +
			punctuate[randomnessinged];
	} else {
		var randomnessinged = Math.floor(Math.random() * words.length);
		document.getElementById("randomnesses").textContent =
			document.getElementById("randomnesses").textContent +
			" " +
			words[randomnessinged];
	}
}
function emptify() {
	document.getElementById("randomnesses").textContent = "";
}
