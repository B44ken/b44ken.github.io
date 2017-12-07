var hate = 50,cash = 500, subs = 5000, merch = 0, rng, rng2;


const merchProfit = setInterval(function() {
	redefine();
	cash += merch;
	update();
}, 1000);

// Fired at the start and end of buttons to update stats

function redefine() {
	hate = parseInt(document.getElementById("hate").textContent);
	cash = parseInt(document.getElementById("cash").textContent);
	subs = parseInt(document.getElementById("subs").textContent);
}
function update() {
	document.getElementById("hate").textContent = hate;
	document.getElementById("cash").textContent = cash;
	document.getElementById("subs").textContent = subs;
	if(subs >= 100000) {
		document.getElementsByClassName("playbutton")[0].style.display = "block";
	}
}

// Shorthand to update message.

function msg(msg) {
	document.getElementById("paul").textContent = msg;
}

msg("You have taken over the body of Jake Paul, updates appear here.");

// Button functions

function makeVideo() {
	redefine();
	rng = Math.max(Math.floor(subs / 700 * Math.random() - Math.floor(hate / 40)), 0);
	cash += rng;
	msg("You made a video. You got $" + rng + ".");
	update();
}
function makeSong() {
	redefine();
	if (cash >= 10) {
		cash -= 10;
		rng = Math.floor(hate / 40 * Math.random());
		hate += rng;
		rng2 = Math.floor(subs / 2000 * Math.random());
		subs += rng2;
		msg(
			"You made a song. You have " + rng + " new haters and " + rng2 + " new subs."
		);
		msg;
		update();
	} else {
		msg("You need at least $10 to make a song.");
	}
}
function makeHate() {
	redefine();
	rng = Math.floor(subs / 2000 * Math.random());
	if (Math.random() > 0.3) {
		msg("It worked, you lost " + rng + " haters.");
		hate -= rng;
		hate = Math.max(hate, 0);
	} else {
		msg("It backfired, you gained " + rng + " haters.");
		hate += rng;
	}
	update();
}

function dropMerch() {
	if(cash >= 1000) {
		redefine();
		merch++;
		cash = cash - 1000;
		update();
		msg("You dropped some merch.");
	} else {
		msg("You need at least $1000 to drop merch.")
	}
}

// Save/load with cookies

function save() {
	document.cookie = ":" + hate + ":" + cash + ":" + subs + ":" + merch + ":";
}
function load() {
	if (document.cookie != "") {
		hate = parseInt(document.cookie.split(":")[1]);
		cash = parseInt(document.cookie.split(":")[2]);
		subs = parseInt(document.cookie.split(":")[3]);
		update();
	}
}

// Nick Crompton mode bois
function crompton() {
	document.getElementsByTagName("body")[0].className = "nick";
}
