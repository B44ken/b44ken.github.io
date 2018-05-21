function $(e) { return document.querySelector(e) }

function buildCard(data) {
		return `
<div class="card">
	<a class="cardcontent">
		<h2 class="cardtitle">
			${data.name}
		</h2>
		<p class="carddesc">
			${data.desc}
		</p>
		<div class="cardtext">
			${marked(data.info)}
		</div>
		<button onclick="read(this)" class="opencard">READ</button>
	</a>
</div>`
}

function read(item) {
	var parent = item.parentElement
	$('article').innerHTML = parent.querySelector('.cardtext').innerHTML
}

function formatSplash() { // Parse the default article markdown.
	var md = $('article')
		.textContent.split('	').join('')
	$('article').innerHTML = marked(md)
}

function submit() {
	var title = $('.newtitle').value.length
	var desc  = $('.newdesc').value.length
	var info  = $('.newinfo').value.length
	console.log(title, desc, info)
	var fail = ""
	if(title > 30) fail = "Title too big!"
	if(title < 5) fail = "Title too small!"
	if(desc > 70) fail = "Description too big!"
	if(desc < 40) fail = "Description too small!"
	if(title > 200) fail = "Text too small!"
	if(fail != "") alert(fail)
	else {
		obj = {
			name: $('.newtitle').value,
			desc: $('.newdesc').value,
			info: $('.newinfo').value,
		}
		packed = encodeURI(JSON.stringify(obj))
		fetch('http://someonekill.me:747/?io=send&data=' + packed)
	}
}

function init(cards) { // Because fetch is async we need a function to start it
	console.log(cards)
	window.cards = cards
	for(val in cards) {
		var built = buildCard(cards[val])
		$('nav').innerHTML += built
	}

	formatSplash()
}

// Finally, make it all happen.

fetch("http://someonekill.me:747/?io=home").then(r=>r.json()).then(e=>init(e))
