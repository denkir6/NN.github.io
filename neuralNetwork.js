class neuron
{
	constructor()
	{
		this.inputVal = 0;
		this.outputVal = 0;
		this.connections = [];
		this.connectionsNum = 0;
		this.bias = 0;
		this.delta = 0;
	}
	
	createNConnection(nRightNeuron)
	{
		var conn = new nConnection(this, nRightNeuron);
		this.connections.push(conn);
		this.connectionsNum++;
		return conn;
	}
	
	setBias(val)
	{
		this.bias = val;
	}
	
	setRandBiasZO()
	{
		this.bias = Math.random();
	}
	
	setRandBiasNPO()
	{
		this.bias = Math.random()*2 -1;
	}
}

class nLayer
{
	constructor()
	{
		this.neurons = [];
		this.neuronsNum = 0;
	}
	
	addNeuron(neur)
	{
		this.neurons.push(neur);
		this.neuronsNum++;
	}
}

class nConnection
{
	constructor(neuron, rightNeuron)
	{
		this.neuron = 
		this.rightNeuron = rightNeuron;
		this.weight;
	}
	
	setWeight(val)
	{
		this.weight = val;
	}
	
	setRandWeightZO()
	{
		this.weight = Math.random();
	}
	
	setRandWeightNPO()
	{
		this.weight = Math.random()*2 -1;
	}
}

class nNetwork
{
	constructor()
	{
		this.inputLayer = new nLayer();
		this.hiddenLayers = [];
		this.outputLayer = new nLayer();
		this.allLayers = [];
		this.allConnections = [];
	}
	
	refresh()
	{
		var emptyArray = [];
		var allLayers = emptyArray.concat(this.hiddenLayers);
		allLayers.unshift(this.inputLayer);
		allLayers.push(this.outputLayer);
		this.allLayers = allLayers;
	}
		
	//build Connections and add them to array
	buildConnections()
	{
		this.allConnections = [];
		for (var i = 0; i < this.inputLayer.neuronsNum; i++)
		{
			var neur = this.inputLayer.neurons[i];
			for (var j = 0; j < this.hiddenLayers[0].neuronsNum; j++)
			{
				var rightNeur = this.hiddenLayers[0].neurons[j];
				var conn = neur.createNConnection(rightNeur);
				this.allConnections.push(conn);
			}
		}
		
		for (var i = 0; i < this.hiddenLayers.length; i++)
		{
			var l = this.hiddenLayers[i];
			for (var j = 0; j < l.neuronsNum; j++)
			{
				var neur = l.neurons[j];
				var nextIt = j + 1;
				
				if (nextIt >= l.neuronsNum)
				{
					for (var k = 0; k < this.outputLayer.neuronsNum; k++)
					{
						var rightNeur = this.outputLayer.neurons[j];
						var conn = neur.createNConnection(rightNeur);
						this.allConnections.push(conn);
					}
				}
				
				if (nextIt < l.neuronsNum)
				{
					console.log("checkpoint 2");
					for (var k = 0; k < l.neurons[nextIt].neuronsNum; k++)
					{	
						var rightNeur = this.hiddenLayers[nextIt].neurons[k];
						var conn = neur.createNConnection(rightNeur);
						this.allConnections.push(conn);
					}
				}
				
			}
			
			
			
			
			
			
			
		}
	}
	
	setRandomWeights()
	{
		for (var i = 0; i < this.allConnections.length; i++)
		{
			var conn = this.allConnections[i];
			conn.setRandWeightZO();
		}
	}
	
	setRandomBiass()
	{
		var neurs = this.getAllNeurons();
		for (var i = 0; i < neurs.length; i++)
		{
			neurs[i].setRandBiasZO();
		}
	}
	
	getAllNeurons()
	{
		var neurs = [];
		for (var i = 0; i < this.allLayers.length; i++)
		{
			for (var j = 0; j < this.allLayers[i].neuronsNum; j++)
			{
				var neur = this.allLayers[i].neurons[j];
				neurs.push(neur);
			}
		}
		
		return neurs;
	}
	
	sendValues(values)
	{
		for (var i = 0; i < values.length; i++)
		{
			var neur = new neuron();
			neur.inputVal = Number(values[i]);
			this.inputLayer.addNeuron(neur);
		}
	}
	
	updateInputValues(values)
	{
		for (var i = 0; i < values.length; i++)
		{
			var neur = this.inputLayer.neurons[i];
			neur.inputVal = Number(values[i]);
		}
	}
	
	//Build Network with random vals
	buildRandomNetwork()
	{
		this.buildConnections();
		this.setRandomWeights();
		this.setRandomBiass();		
	}
	
	
	process()
	{
		for (var i = 0; i < this.allLayers.length; i++)
		{
			var l = this.allLayers[i];
			processLayer(l);
		}
	}
	
	getResult()
	{
		var result = [];
		for (var i = 0; i < this.outputLayer.neuronsNum; i++)
		{
			result.push(this.outputLayer.neurons[i].outputVal);
		}
		return result;
	}
}



//functions
function buildNNetwork(layersNum)
{
	var network = new nNetwork();
	
	for (var i = 0; i < layersNum; i++)
	{
		var l = new nLayer();
		network.hiddenLayers.push(l);
	}
	
	network.refresh();
	
	
	return network;
}

function createLayer(neuronsN)
{
	var nL = new nLayer();
	for (var i = 0; i < neuronsN; i++)
	{
		var neur = new neuron();
		nL.addNeuron(neur);
	}
	return nL;
}

function processNeuron(neur)
{
	var result = 0;
	var inputVal = neur.inputVal;
	var outputVal = sigmoidFunction(inputVal);
	neur.outputVal = outputVal;
	
	passOutputVal(neur);
	neur.inputVal = 0;
	//console.log(outputVal);
}

function processLayer(l)
{
	for (var i = 0; i < l.neuronsNum; i++)
	{
		var neur = l.neurons[i];
		processNeuron(neur);
	}
}

function passOutputVal(neur)
{
	if (neur.connectionsNum != 0)
	{
		for (var i = 0; i < neur.connectionsNum; i++)
		{
			var conn = neur.connections[i];
			var rightNeur = conn.rightNeuron;
			rightNeur.inputVal += neur.outputVal*conn.weight;
		}
		
	}
}