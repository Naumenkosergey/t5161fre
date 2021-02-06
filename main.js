let width = window.innerWidth - 140;
let height = window.innerHeight - 140;

function run(){
	let top = Math.random()*height;
	let left = Math.random()*width;

	document.getElementById('runButton').style.top=top+'px';
	document.getElementById('runButton').style.left=left+'px';
}
function AnswerOK(){
	alert("Я так и знал!");
}

function AnswerNO(){
	alert("Почему ты так думаешь?!");
}