// init game
const $ = e => document.querySelector(e) // jquery lol
let gamePart = 1
mattyEngine.start()
mattyEngine.setBackground('img/splash.png')

// global for the current key pressed
let recent = null 
document.addEventListener('keydown', e => { recent = e.key })
document.addEventListener('keyup', () => { recent = null })

// game running @ 20fps
setInterval(()=>{
//	console.log('DEBUG DUMP', {
//		'Game Part': gamePart
//	})
	
	if(gamePart == 1 && recent == 'Enter') {
		gamePart = 2
		console.log('title screen fired')
	}
	if(gamePart == 2) {
		mattyEngine.setBackground('img/cabin.png')
		mattyEngine.newDialog('Hello! You are currently playing the official Matty the God video game.')
		mattyEngine.newDialog('Your job as God is to vanquish evildoers from the great Muskoka Woods.')
		mattyEngine.newDialog('Of course, being that muskoka is a Christan leadership development camp...')
		mattyEngine.newDialog('You will be playing a high intensity game of Rock Paper Scissors to avoid violence.')
		mattyEngine.newDialog('Look, your first target of Roman Catholic justice!')

		gamePart = 3;
		recent = null;
	}
	if(gamePart == 3) {
		mattyEngine.newDialog('### TO BE CONTINUED ###')
	} 
}, 50)