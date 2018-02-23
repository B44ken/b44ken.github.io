var memes = ["do you know da wei?", "for de qwen!!!", "My bruddas", "we will fight for uganda!", "I found de wey my bruddas"];
var safe = true;
setInterval(attaq, 3000);
var spaghet = 0;
function spagetth() {
	if (safe == false) {
		spaghet--;
	} else {
	spaghet++;
	}
document.getElementById("score").textContent=spaghet + " spagets stoles";
document.getElementById("knukles").innerHTML= memes[Math.floor(Math.random() * memes.length)];
}
function attaq() {
	safe = false;
document.getElementById("bear").style="opacity: 1;";
	setTimeout(safeness, 1000);
}
function safeness() {
	safe = true; document.getElementById("bear").style="opacity: 0;";
}
