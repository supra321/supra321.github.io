var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("listTop");
var li=document.getElementsByClassName("list");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(document.createTextNode(" "));
	var de = document.createElement("button");
	de.appendChild(document.createTextNode("Delete"));
	de.className='b';
	li.appendChild(de);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function add(event){
	if (event.target.className!="b"){
	event.target.classList.toggle("done");
	}
	else if(event.target.className=="b"){
	removeParent(event);
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click",add);

for(var i=0;i<6;i++){
	var de = document.createElement("button");
	de.appendChild(document.createTextNode("Delete"));
	de.className='b';
	li[i].appendChild(document.createTextNode(" "));
	li[i].appendChild(de);
}

function removeParent(event) {
  event.target.removeEventListener("click", removeParent, false);
  event.target.parentElement.parentNode.removeChild(event.target.parentElement);
}