// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", function(){
// 	console.log("CLICK!!!!");
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	div.classList.add("wrapper");
	ul.appendChild(div);
	div.append(li, delButton);
	li.classList.add("taskClass");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	delButton.classList.add("delClass");
	delButton.innerHTML='del';
}

function inputLength() {
	return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
// button.addEventListener("click", function() {
// 	console.log("click is working");
// 	if (inputLength() > 0) {
// 		createListElement();
// 	 	var li = document.createElement("li");
// 	     li.appendChild(document.createTextNode(input.value));
// 	     ul.appendChild(li);
// 	     input.value ="";
// 	 }
// 	}
// })
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 20) {
		createListElement();
	}
}

function doneTask(task) {
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}

function deleteListElement(element) {
	if (element.target.className === "delClass"){
		element.target.parentElement.remove();
	}
}

// input.addEventListener("keypress", function(event){
// 	if ( inputLength()>0 && event.Keycode ===13){
// 		createListElement();
// 		var li = document.createElement("li");
// 	 	li.appendChild(document.createTextNode(input.value))
// 	 	ul.appendChild(li);
// 	 	input.value= "";
// 	 }
// 	console.log(event);
// }
// })
function handleUlClick (element) {
	doneTask(element);
	deleteListElement(element);
}

ul.addEventListener("click", handleUlClick)
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);