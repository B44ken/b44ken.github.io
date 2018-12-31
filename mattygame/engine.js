const mattyEngine = {
	data: {
		elements: {
			main: null,
			background: null,
			dialog: null,
		},
		queue: [],
		players: [],
	},
	start: () => { // create elements and style them
		let div = document.createElement('div')
		let bg = document.createElement('img')
		let msg = document.createElement('pre')
		div.className = 'mattyEngine'
		div.style = 'height: 720px; width: 1280px; position: relative;'
		div.appendChild(bg)
		bg.style = 'position: aboslute; width: 100%; height: 100%;'
		div.appendChild(msg)
		msg.style = 'width: 90%; left: 5%; position: absolute; bottom: 5%; display: none; background: #eee; padding: 16px 0; font-size: 20px;'
		mattyEngine.data.elements.main = div
		mattyEngine.data.elements.background = bg
		mattyEngine.data.elements.dialog = msg
		document.body.appendChild(div)
	},
	newMatty: () => {
		
	},
	newPlayer: (place, important, ontouch) => {
		this.delete = () => {this.innerHTML = ''}
		this.place = 0
		this.important = 0
	},
	newDialog: (text) => { // create a dialog box
		mattyEngine.data.queue.push(text)
	},
	setBackground: (src) => { // set the background
		mattyEngine.data.elements.background.src = src
	}
}

const dialogAdvance = (e) => {
		if(e == null || e.key == 'Enter') {
		let msg = mattyEngine.data.queue.shift()
		if(msg == undefined) {
			mattyEngine.data.elements.dialog.textContent = ''
			mattyEngine.data.elements.dialog.style.display = 'none'	
		} else {
			mattyEngine.data.elements.dialog.style.display = 'block'
			mattyEngine.data.elements.dialog.textContent = msg
		}
	}
}
var dialogListener = document.addEventListener('keydown', dialogAdvance)
