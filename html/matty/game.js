// init game
const $ = e => document.querySelector(e) // jquery lol
let gamePart = 1
mattyEngine.start('body')
mattyEngine.setBackground('img/splash.png')

// game running @ 20fps
setInterval(()=>{
	
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
		let matty = mattyEngine.newCharacter('img/matty.png', 5, 500, () => {
			mattyEngine.newDialog('MATTY: not me, dumbass')
		})
		let jimmy = mattyEngine.newCharacter('img/jimmy.png', 65, 360, () => {
			mattyEngine.newDialog('JIMMY: i feel violated')
			mattyEngine.newDialog('JIMMY: please don\'t do that again')
			mattyEngine.newDialog('MATTY: maybe')
			jimmy.click(() => {
				mattyEngine.newDialog('JIMMY: .')
				mattyEngine.newDialog('JIMMY: ..')
				mattyEngine.newDialog('JIMMY: ...')
				mattyEngine.newDialog('JIMMY: i\'m done with you')
				jimmy.move(20)
				gamePart++
			})
		})
		
		gamePart++
	}
	
	// part 4 = waiting for interaction
	
}, 50)
