// init game
const $ = e => document.querySelector(e) // jquery lol
let gamePart = 1
mattyEngine.start('body')
mattyEngine.setBackground('img/splash.png')

// game running @ 20fps
setInterval(()=>{
	if(gamePart == -1) { // game over state
		mattyEngine.clearQueue()
		mattyEngine.setBackground('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs') // 1x1 black pixel
		mattyEngine.newDialog('### GAME OVER ### \nTry again?')
	}
	
	if(gamePart == 1 && mattyEngine.recent == 'Enter') gamePart++
	if(gamePart == 2) { // parts 1-3: intro scene
		mattyEngine.setBackground('img/cabin.png')
		mattyEngine.newDialog('Hello! You are currently playing the official Matty the God video game.')
		mattyEngine.newDialog('Your job as God is to vanquish evildoers from the great Muskoka Woods.')
		mattyEngine.newDialog('Of course, being that Muskoka is a Christan leadership development camp...')
		mattyEngine.newDialog('You will be playing a high intensity game of Rock Paper Scissors to avoid violence.')
		mattyEngine.newDialog('Look, your first target of Roman Catholic justice! Click on him to start!')
		gamePart++
	}
	
	if(gamePart == 3) {
		if(mattyEngine.queueEmpty()) gamePart++
	}
	
	if(gamePart == 4) { // introduction to jimmy
		window.matty = mattyEngine.newCharacter('img/matty.png', 5, 500, () => {
			mattyEngine.newDialog('MATTY: not me, dumbass')
		})
		window.jimmy = mattyEngine.newCharacter('img/jimmy.png', 65, 360, () => {
			mattyEngine.newDialog('JIMMY: I feel violated')
			mattyEngine.newDialog('JIMMY: Please don\'t do that again')
			mattyEngine.newDialog('JIMMY: If you do I might have to fight you')
			jimmy.click(() => {
				jimmy.click(()=>void(0))
				gamePart++
			})
		})
		gamePart++
	}
	
	if(gamePart == 6) {
		window.boss = {
			tick: 0,
			position: 40,
			energy: 100,
		}
		gamePart++
	}
	
	if(gamePart == 7) {
		boss.tick++
		if(boss.tick % 4 == 0) boss.energy-- // decrease energy
		boss.position -= 0.15 // move jimmy
		jimmy.move(boss.position)
		if(mattyEngine.recent == ' ') boss.position += 0.3 // move on space press
		mattyEngine.clearQueue() // update energy
		mattyEngine.newDialog('ENERGY: ' + boss.energy + " | Press SPACE to push jimmy until he runs out of energy!")
		mattyEngine.recent = '' // so you cant hold down
		if(boss.position <= 19) { // game over
			jimmy.delete()
			matty.delete()
			gamePart = -1
		}
		if(boss.energy == 0) { // victory
			mattyEngine.clearQueue()
			mattyEngine.newDialog('MATTY: Another heathen vanquished from glorious Muskoka!')
			mattyEngine.newDialog('MATTY: But the day isn\'t over, there are still more kids to educate!')
			jimmy.delete()
			gamePart++
		}
		
		if(gamePart == 8) {
			// ???
		}
	}
}, 50)
