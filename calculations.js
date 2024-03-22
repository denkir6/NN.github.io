var result = 0;

function connectNeurons(conn, rightNeuron)
{
	var neur = conn.leftNeuron;
	var inputVal = neur.outputVal * conn.weight;
	rightNeuron.inputVal += inputVal;
	
}

function connectLayers(l)
{
	var leftLayer = network.layers[l.id - 1];
	for (var i=0; i<l.neuronsNum; i++)
	{
		var neur = l.neurons[i];
		neur.outputVal = 0;
		neur.inputVal = 0;
		for (var j = 0; j<leftLayer.neuronsNum; j++)
		{
			var conn = neur.connections[j];
			connectNeurons(conn, neur);
		}
		if (neur.inputVal >= neur.bias)
			neur.outputVal = neur.inputVal;
		//console.log(neur.inputVal + " + " + neur.bias + " : " + neur.outputVal);
		if (neur.inputVal < neur.bias)
			neur.outputVal = 0;
	}
}

function processNetwork()
{
	// network.layers[0].neurons[0].inputVal = num;
	// network.layers[0].neurons[0].outputVal = num;
	for (var i = 1; i < network.layersNum; i++)
		connectLayers(network.layers[i]);
}

function getResult()
{
	var result = [];
	var lastLayer = getLastLayer();
	for (var i = 0; i < lastLayer.neuronsNum; i++)
	{
		result.push(lastLayer.neurons[i].outputVal);
	}
	
	return result;
}
