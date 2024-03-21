const textBox = document.createElement("INPUT");
const buttn = document.createElement("BUTTON");
const textNode = document.createTextNode("Calculate");
const lbl = document.createElement("LABEL");
const sep = document.createElement("br");
const textBox2 = document.createElement("INPUT");
const buttn2 = document.createElement("BUTTON");
const textNode2 = document.createTextNode("Recalculate");
const lbl2 = document.createElement("LABEL");

textBox.setAttribute("type", "text");
buttn.appendChild(textNode);
buttn.addEventListener("click", fillLabel);
buttn2.appendChild(textNode2);
buttn2.addEventListener("click", fillLabel2);


this.document.body.appendChild(textBox);
this.document.body.appendChild(buttn);
this.document.body.appendChild(lbl);
this.document.body.appendChild(sep);
this.document.body.appendChild(textBox2);
this.document.body.appendChild(buttn2);
this.document.body.appendChild(lbl2);

//createNeuralNetwork();
var network;
var firstStep = true;

function fillLabel(){
	const image = document.createElement('img');
	image.setAttribute('src', "20150517_122008000_iOS.jpg");
	const canvas = document.createElement('canvas');
	//image.width = image.width/2;
	//image.height = image.height/2;
	canvas.width = image.width;
	canvas.height = image.height;
	canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height);
	const ctx = canvas.getContext('2d');
	document.body.appendChild(canvas);

	let result = [];
	for (let y = 0; y < canvas.height; y++) {
		for (let x = 0; x < canvas.width; x++) {
			let data = ctx.getImageData(x, y, 1, 1).data;
			result.push(data[0]);
			result.push(data[1]);
			result.push(data[2]);
		}
	}
	var data = ctx.getImageData(1,1,1,1);
	console.log(data);/*

	for (var i = 0; i < result.length; i++){
		result[i] = 253;	
	}*/
	ctx.putImageData(data, 100, 100);
	ctx.drawImage(imga, 0, 0, image.width, image.height);
}

function fillLabel2()
{
	var valArray = [];
	var val = Number(textBox2.value)/100;
	valArray.push(val);
	
	for (var i = 0; i < 100; i++)
	{
		backPropagation(valArray, network, 0.1)
		network.process();
	}
	
	var txt = network.getResult()[0];
	lbl2.innerText = txt;
	
	
	//console.log(network);
	//C:\Users\denki\Downloads\AL-Preview-0004.jpg
}
