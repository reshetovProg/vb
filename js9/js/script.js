let body = document.getElementsByTagName('body')[0];
let btnLeft = document.createElement('button');
let btnRight = document.createElement('button');
let fieldRow = document.createElement('div');


btnLeft.setAttribute('onClick', 'left()');
btnRight.setAttribute('onClick', 'right()');

fieldRow.style.width = "300px";
fieldRow.style.padding = "20px";
fieldRow.style.display = "flex";

btnLeft.textContent = "<";
btnRight.textContent = ">";

let circle = document.createElement('div');
circle.classList.add('circle');

fieldRow.appendChild(circle);

body.style.display = "flex";
body.style.alignItems = "center";




circle.style.border = "none";
circle.style.width = "20px";
circle.style.height = "20px";
circle.style.borderRadius = "20px";
circle.style.backgroundColor = "grey";
circle.style.position = "relative";
circle.style.transition = "2s";



body.appendChild(btnLeft);
body.appendChild(fieldRow);
body.appendChild(btnRight);

let button = document.getElementsByTagName('button');

for (const iterator of button) {
	iterator.style.width = "50px";
	iterator.style.height = "50px";
	iterator.style.borderRadius = "50px";
	iterator.style.border = "none";
	iterator.style.fontSize = "24px";
}


function left() {

	circle.style.marginLeft = "0px";
	console.log("left");
}

function right() {

	circle.style.transition = "0.5s";
	circle.style.marginLeft = `${fieldRow.style.width.split('px')[0] - circle.style.width.split('px')[0]}px`;
	console.log("right");
}