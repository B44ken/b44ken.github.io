const mattyEngine = {
	data: {
		elements: { // primary dom elements
			main: undefined,
			background: undefined,
			dialog: undefined,
		},
		queue: [], // text for the dialog engine
		char: [], // secondary characters
		matty: undefined, // matty
	},
	start: (el) => { // create elements and style them
		let div = document.createElement('div')
		let bg = document.createElement('img')
		let msg = document.createElement('pre')
		div.className = 'mattyEngine'
		div.style = 'height: 720px; width: 1280px; position: relative;' // 720p
		div.appendChild(bg)
		bg.style = 'position: aboslute; width: 100%; height: 100%;'
		div.appendChild(msg)
		msg.style = 'z-index: 3; width: 90%; left: 5%; position: absolute; bottom: 5%; display: none; background: #eee; padding: 16px 0; font-size: 20px;'
		mattyEngine.data.elements.main = div
		mattyEngine.data.elements.background = bg
		mattyEngine.data.elements.dialog = msg
		document.querySelector(el).appendChild(div)
	},
	newCharacter: (src, place, ht, ontouch) => { // create a generic clickable character
		let div = document.createElement('div')
		let img = document.createElement('img')
		div.appendChild(img)
		img.src = src
		img.addEventListener('click', () => ontouch())
		img.style = 'position: absolute; bottom: 0'
		img.style.height = ht + 'px'
		img.style.left = place + '%'
		mattyEngine.data.elements.main.appendChild(div)
		return { // redefine the character.
			delete: () => div.innerHTML = '',
			move: now => img.style.left = now + '%',
			click: now => ontouch = now,
			src: now => img.src = now,
		}
	},
	newDialog: (text) => { // add a new dialog element
		mattyEngine.data.queue.push(text)
		if(mattyEngine.data.queue.length == 1 && mattyEngine.data.elements.dialog.style.display == 'none')
				mattyEngine.dialogAdvance() // fix: the dialog doesnt display until you hit enter
	},
	setBackground: (src) => { // set the background
		mattyEngine.data.elements.background.src = src
	},
	dialogAdvance: (e) => { // display the next dialog from the queue
		if(e == null || e.key == 'Enter') {
			let msg = mattyEngine.data.queue.shift()
			if(msg == undefined) {
				mattyEngine.data.elements.dialog.textContent = ''
				mattyEngine.data.elements.dialog.style.display = 'none'
			} else {
				mattyEngine.data.elements.dialog.textContent = msg
				mattyEngine.data.elements.dialog.style.display = 'block'
			}
		}
	},
	clearQueue: () => {
		mattyEngine.data.queue = []
		mattyEngine.dialogAdvance()
	},
	queueEmpty: () => (mattyEngine.data.elements.dialog.style.display == 'none'),
	recent: undefined,
}

document.addEventListener('keydown', e => { mattyEngine.recent = e.key })
document.addEventListener('keyup', () => { mattyEngine.recent = undefined })

const dialogListener = document.addEventListener('keydown', mattyEngine.dialogAdvance)
