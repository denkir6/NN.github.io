function calculateError(expectedVals)
{
	var expectedVals = expectedVals;
	var actualVals = getResult();
	var rowLength = actualVals.length;
	
	var errorVal = 0;
	
	for (var i = 0; i < rowLength; i++)
	{
		var actualVal = actualVals[i];
		var expectedVal = expectedVals[i];
		errorVal += Math.pow((actualVal - expectedVal), 2);
	}
	
	errorVal = 1/rowLength * errorVal;
	
	return errorVal;	
}

function calculateBiasForLastLayer(errorVal, expectedVals)
{
	var errorVal = errorVal;
	var l = getLastLayer();
	var expectedVals = expectedVals;
	
	var rowForBias = [];
	
	for (var i = 0; i < l.neuronsNum; i++)
	{
		var actualBias = l.neurons[i].bias;
		var bias = errorVal * actualBias * (1 - actualBias);
		rowForBias.push(bias);
	}
	return rowForBias;
}

function calculateWeights(neuron, step, bias)
{
	var weights = [];
	var neuron = neuron;
	var step = step;
	var newBias = bias;
	
	var connections = neuron.connections;
	
	for (var i =0; i<connections.length; i++)
	{
		var weight = connections[i].weight - step*newBias*neuron.outputVal;
		weights.push(weight);
	}
	
	return weights;
}

function calculateBiasForNeuron(neur, bias, conn)
{
	var nbias = 0;
	var bias = bias;
	var weight = conn.weight;
	
	nbias = bias*weight*(neur.outputVal*(1 - neur.outputVal));
	return nbias;
}

function teachNetwork(expectedVals, step)
{
	var expectedVals = expectedVals;
	var step = step;
	var err = calculateError(expectedVals);
	var lastLayer = getLastLayer();
	var biasForLastLayer = calculateBiasForLastLayer(err, expectedVals);
	
	for (var i = 0; i < lastLayer.neuronsNum; i++)
	{
		var neur = lastLayer.neurons[i];
		neur.bias = biasForLastLayer[i];
		
		var weights = calculateWeights(neur, 0.1, neur.bias);
		
		for (var j = 0; j < neur.connections; j++)
		{
			neur.connections[i].weight = weights[i];			
		}
	}
	
	for (var i = lastLayer.id - 1; i >= 0; i --)
	{
		var l = network.layers[i];
		var lN = network.layers[i+1];
		
		for (var j = 0; j < l.neuronsNum; j++)
		{
			var neur = l.neurons[j];
			var sumWeightsAndBias = 0;
			
			for (var k = 0; k < lN.neuronsNum; k++)
			{
				var w = lN.neurons[k].connections[j].weight;
				var b = lN.neurons[k].bias;
				sumWeightsAndBias += w*b;
			}
			console.log(i + ":" + j + " : " + sumWeightsAndBias);
			
			var out = neur.outputVal;
			var bias = sumWeightsAndBias * (out *(1 - out));
			neur.bias = bias;
			//console.log(neur.bias);
			
			if (i != 0)
			{
				for (var k = 0; k < neur.connections; k++)
				{
					neur.connections[k].weight = calculateWeights(neur, step, bias);
				}
			}
		}
	}
	
	
	
	
}