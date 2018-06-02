let $ = e => document.querySelector(e)


let stat = { // stats for gameplay.
	food: 100,
	/*is this*/loss: 1,
	alt: 0,
	row: 1,
	state: "playing",
}
let backup = { // stats for gameplay.
	food: 100,
	/*is this*/loss: 1,
	alt: 0,
	row: 1,
	state: "playing",
}
let game = {
	rows: 7,
	food: ["watermelon", "strawberry", "apple"]
}
stat.state = "not"
backup.state = "playing"

let getFood = () => { // Spawn food
	let el = document.createElement('img')
	let num = Math.floor(game.food.length * Math.random())
	let item = game.food[num]
	let pos = Math.min(game.rows, Math.max(1,Math.round(Math.random() * game.rows)))
	el.classList = "food"
	el.src = "assets/" + item + ".png"
	el.alt = item
	el.style = "left: " + (pos) + "00px;"
	$('.game').appendChild(el)
	setTimeout(()=> {
		if(pos == stat.row) stat.food += 50
		if(stat.food > 100) stat.food = 100
		$('.game').removeChild(el);
	}, 1400)
}

let move = d => {
	let parse = Math.min(game.rows, Math.max(0, d + stat.row))
	stat.row = parse
	$('.giraffe').style.left = parse + "00px"
}

let start = () => {
	stat = {
		food: 100,
		/*is this*/loss: 1,
		alt: 0,
		row: 1,
		state: "playing",
	}

}

document.addEventListener('keydown', e => {
	if (stat.state == "playing") {
		if(e.key == "ArrowLeft") move(-1)
		if(e.key == "ArrowRight")move( 1)
	}
})

setInterval(()=> {
	if(stat.state == "playing") if(Math.random() < 0.5) getFood()
	stat.alt++
}, 800)


setInterval(()=> {
	if(stat.state == "playing") {
		stat.food--
		$('.stat-food').textContent = stat.food
		$('.stat-height').textContent = stat.alt;
		if(stat.food <= 0) stat.state = "not"
	}
}, 60)
