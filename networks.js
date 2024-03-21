function nTestNetwork()
{
	network.inputLayer = createLayer(1009920)
	//var network = buildNNetwork(1);
		
	/*for (var i = 0; i < network.hiddenLayers.length; i++)
	{
		network.hiddenLayers[i] = createLayer(1);
		
	}*/
	network.outputLayer = createLayer(1009920);
	network.refresh();
	
	return network;
}
