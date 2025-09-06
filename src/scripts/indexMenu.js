const fade_element1 = document.querySelector("#landing p:first-of-type");
const fade_element2 = document.getElementById("info-para");
const title = document.querySelector("h1");
const title_text = "Hello!";
var decor = document.createElement("i");
decor.textContent = "~ ";
var decor2 = document.createElement("i");
decor2.textContent = " ~";

function textTyping(item, text, i=0) {
	if (i == 0) {
		item.textContent = "";
		var text_span = document.createElement("span");
		text_span.id = "span";
		item.prepend(decor, text_span);
	}
	else if (i == text.length + 1) {
		item.appendChild(decor2);
		return;
	}
	else {
		document.getElementById("span").innerText += text[i-1];
	}
	
	setTimeout(()=> textTyping(item, text, i+1), 75);
}

window.onload = function()
{
	textTyping(title, title_text);
	const wait_time = 75*(title_text.length + 2);
	setTimeout(()=>{fade_element1.style.opacity = '1'}, wait_time);
	setTimeout(()=>{fade_element2.style.opacity = '1'}, wait_time + 500);
};



document.querySelector('.hamburger')?.addEventListener('click', () => {
	document.querySelector('.navigation')?.classList.toggle('visible');
	setLandingDistance();
});