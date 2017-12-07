function show(item) {
	document.getElementById("place").style.display = "none";
	document.getElementById("cred").style.display = "none";
	document.getElementById("who").style.display = "none";
	document.getElementById("vids").style.display = "none";
	document.getElementById("pics").style.display = "none";
	document.getElementById(item).style.display = "block";
}
show("place");