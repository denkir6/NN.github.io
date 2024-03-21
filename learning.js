function calculateError(expectedVals, network)
{
	var network = network;
	var expectedVals = expectedVals;
	var actualVals = network.getResult();
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

function calculateDelta(neur, errorVal)
{
	var delta = 0;
	if (neur.connectionsNum == 0)
	{
		delta = errorVal * neur.outputVal *(1 - neur.outputVal);
	}
	
	if (neur.connectionsNum > 0)
	{
		var deltaWeightSum = 0;
		for (var i = 0; i < neur.connectionsNum; i++)
		{
			var conn = neur.connections[i];
			var deltaOfNextNeuron = conn.rightNeuron.delta;
			deltaWeightSum += deltaOfNextNeuron * conn.weight;
		}
		delta = deltaWeightSum * neur.outputVal *(1 - neur.outputVal);
	}
		
	return delta;
}

function calculateWeight(step, conn)
{
	var conn = conn;
	var neur = conn.neuron;
	var delta = conn.rightNeuron.delta;
	var weight = conn.weight;
	var correctedWeight = 0;
	var step = step;
	
	correctedWeight = weight - step * delta * neur.outputVal;
	
	return correctedWeight;
}

function backPropagation(expectedVals, netw, step)
{
	//calculate Error
	var error = calculateError(expectedVals, netw);
	
	var layersNum = network.allLayers.length;
	for (var i = layersNum - 1; i >= 0; i--)
	{
		var l = network.allLayers[i];
		var neuronsNum = l.neuronsNum;
		//calculate weight for each connection
		// skip last layer because it doesn't have connections
		for (var j = 0; j < neuronsNum; j++)
		{
			var neur = l.neurons[j];
			if (neur.connectionsNum == 0)
			{
				continue;
			}
			if (neur.connectionsNum >= 0)
			{
				for (var k = 0; k < neur.connectionsNum; k++)
				{
					var conn = neur.connections[k];
					var correctedWeight = calculateWeight(step, conn);
					conn.weight = correctedWeight;
				}
			}
		}
		
		//calculate delta for each neuron in layer
		for (var j = 0; j < neuronsNum; j++)
		{
			var neur = l.neurons[j];
			neur.delta = calculateDelta(neur, error);
		}
	}
}