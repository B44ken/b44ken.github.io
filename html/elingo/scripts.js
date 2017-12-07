// Set variables
var definition = "";
var count = 0;
var termfound = false;

// Search function
function searchitem() {
	// Get search term
	var searchterm = document.getElementById("search").value;
	console.log("Search: " + searchterm);

	// Check if a term is found, get the definition of it if true then reset for next time
	terms.forEach(function(terms) {
		if (terms.toLowerCase() == searchterm.toLowerCase()) {
			console.log("Term found: " + terms);
			definition = definitions[count];
			termfound = true;
			return;
		}
		count++;
	});
	console.log(definition);
	count = 0;
	
	

	// Output results
	if (termfound === true) {
		document.getElementById("result").textContent = definition;
		termfound = false;
	} else if (searchterm.length === 0) {
		document.getElementById("result").textContent = "Text box is empty.";
	} else {
		document.getElementById("result").textContent = "No term found.";
	}
}

function show() { 
	document.getElementById("result").textContent = terms.join(", ")
}
