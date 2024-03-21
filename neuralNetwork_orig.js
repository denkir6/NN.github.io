var network;

class Neuron{
	constructor(){
		this.inputVal = 0;
		this.outputVal = 0;
		this.bias = 0;
		this.connections = [];
		this.activated = false;
	}
}

class Layer{
	constructor(id, neuronsNum){
		this.id = id;
		this.neurons = [];
		this.neuronsNum = neuronsNum;
	}
}

class Network{
	constructor(layersNum){
		this.layers = [];
		this.layersNum = layersNum;
	}
}

class Connection{
	constructor(leftNeuron){
		this.leftNeuron = leftNeuron;
		this.weight;
	}
}

function createNeuralNetwork()
{
	var NumOfLayers = 4;
	network = new Network(NumOfLayers);
	for (i=0; i<network.layersNum; i++)
	{
		var l = new Layer();
		l.id = i;
		if (i == 0)
			l.neuronsNum = 1;
		
		if (i > 0)
			l.neuronsNum = 4;
		
		fillLayer(l);
		
		network.layers.push(l);
	}
}

function fillLayer(l)
{
	for (var i = 0; i < l.neuronsNum; i++)
	{
		var n = new Neuron();
		n.bias = Math.random()*2-1;
		l.neurons.push(n);
	}
	
	if (l.id>0)
	{
		for (var i =0; i <l.neuronsNum; i++)
		{
			var prevLayer = network.layers[l.id -1];
			for (var j = 0; j < prevLayer.neuronsNum; j++)
			{
				var conn = new Connection(prevLayer.neurons[j]);
				conn.weight = Math.random()*2-1;
				l.neurons[i].connections.push(conn);
			}
		}
	}
}

function getLastLayer()
{
	var lastLayer = network.layers[network.layersNum - 1];
	return lastLayer;
}

