let $ = q => document.querySelector(q) // literally jquery
let form ='https://www.googleapis.com/customsearch/v1' +
			 '?key=AIzaSyCgCloJT09DYVpx6J-o0xVz_raHGOydyTA' +
			 '&cx=016210638077510637029:aymt79xsxde&q='
let obj = []
$('pre').textContent = 'HELP: search (term): search for something. goto (number): goto that item number'

document.addEventListener('keyup', (e)=> {
	if(e.key == 'Enter') {
		parse($('div').textContent)
		$('div').textContent = '';
	}
})

function parse(str) {
	if (str.substring(0, 7) == 'search ') {
		let arr = str.split('search ')
		arr[0] = ''
		search(arr.join(''))
	}
	if(str.substring(0, 5) == 'goto ') {
		get(str.substring(5))
	}
}

function search(q) {
	fetch(form + q).then((json) => {
		return json.json().then((data)=>{
			let i = 0
			$('pre').textContent = ""
			data.items.forEach((item)=>{
				item.number = i
				obj.push(item)
				$('pre').textContent += 'ITEM ' + item.number + ':\n' + item.title.toUpperCase() + '\n' + item.snippet + '\n' + item.displayLink + '\n \n'
				i++
			})
		})
	})
}

function get(n) {
	if(obj != []) {
		if(n < 10) {
			document.location = obj[n].link
		}
	}
}
