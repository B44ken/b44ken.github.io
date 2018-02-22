// Random egg text
var color = [
    "#FF0000",
    "#FF8C00",
    "#FFD700",
    "#008000",
    "#0000CD",
    "#4B0082",
    "#EE82EE"
];
var count = 0;

function ruinIt() {
	count++;
	if (count == 7) count = 0;
	document.body.style.color = color[count];
}


var quotes = [
	"InnerHTML",
	"InnerHTML",
	'while(bakken.friends == 0) { console.log("no friends found."); } // Avoid running this code, while true loops may crash your broswer.',
	"Membrane keyboards are a crime against humanity, more so than processed cheese and space indentation.",
	"someonekill.me is best viewed with Netscape Navigator 4.0 or below on a Pentium 3±1 emulated in Javascript on an Apple IIGS at a screen resolution of 1024x1. Please enable your ad blockers, disable high-heat drying, and remove your device from Airplane Mode and set it to Boat Mode. For security reasons, please leave caps lock on while browsing.",
	"Dank.",
	"I'm not a mistake, just a happy little accident.",
];
var choose = Math.floor(Math.random() * quotes.length);
var egg = document.getElementsByClassName("egg")[0];

if (choose == 0) {
	egg.innerHTML = '<button class = "egg" onclick = "setInterval(\'ruinIt();\', 300)">This website could be way better</button>';
} else if (choose == 1) {
	egg.innerHTML = '<p class = "egg"><img src = "/assets/think.png" height = "8" width = "8" > Are functions data types? Really makes you think<img src = "/assets/think.png" height = "8" width = "8" ></p>'
} else {
	egg.textContent = quotes[choose];
}

// Cards
const cardContent = [
	{
		title: "Just Write",
		desc: "Virtually distraction free text editor. Just.. write.",
		link: "http://someonekill.me/justwrite",
		img: "/assets/thumbnails/justwrite.png",
	},
	{
		title: "Links page",
		desc: "Page for linking to all the other websites I'm semi-active on.",
		link: "http://someonekill.me/links/",
		img: "assets/thumbnails/links.png"
	},
	{
		title: "Meet Motu",
		desc: "The official website of Motu from the top notch anime Mout Patlu. ",
		link: "http://someonekill.me/meetmotu/",
		img: "https://i.imgur.com/gxQxyYr.jpg"
	},
	{
		title: "eLingo",
		desc: "The go-to website to learn all the latest internet lingo. Professionally certified.",
		link: "http://someonekill.me/elingo/",
		img: "assets/thumbnails/elingo.png"
	},
	{
		title: "Billy's Corner",
		desc: '"my bestest friend billy\'s site for all your realizing how gay he is needs" - Billy',
		link: "http://someonekill.me/billy",
		img: "assets/thumbnails/billy.jpg",
	},
	{
		title: "Jake Paul Sim",
		desc: "Play as fan favourite jake paul in the most monotonous clicker game of the year. Now with Nick Crompton!",
		link: "http://someonekill.me/paulsim",
		img: "http://someonekill.me/paulsim/jakepaul.png"
	},
];

for (val in cardContent) {
	document.getElementsByClassName("cardcontainer")[0].innerHTML += 
		'<a class="card" href="' + cardContent[val].link + '">' + 
			'<img src="' + cardContent[val].img + '" alt="Card image" class="cardimg">' +
			'<h3>' + cardContent[val].title + '</h3>' +
			cardContent[val].desc + 
		'</a>';
}
