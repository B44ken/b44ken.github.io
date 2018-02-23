var help = "hyperminamalist text editor. \ndark/light theme is ctrl q. \nsave is ctrl a. \nhave fun.";
var theme = false;
var pre = document.querySelector("pre");

if (document.cookie.split("justwrite").length == 2) {
	var prev = document.cookie.split("justwrite:")[1].split(";")[0];
	pre.innerHTML = prev;
}
document.addEventListener("keyup", e => {
	if (e.ctrlKey) {
		if (e.key == "q")
			if (theme) {
				document.body.style.background = "#efefef";
				document.body.style.color = "#212121";
			} else {
				document.body.style.background = "#212121";
				document.body.style.color = "#efefef";
			}
		if(e.key == 'a') document.cookie = "justwrite:" + pre.innerHTML + ";";
		theme = !theme;
	}
});
