function nTestNetwork()
{
	var network = buildNNetwork(1);
		
	for (var i = 0; i < network.hiddenLayers.length; i++)
	{
		network.hiddenLayers[i] = createLayer(1);
		
	}
	network.outputLayer = createLayer(1);
	network.refresh();
	
	return network;
}

function nTranslatorNetworkRUEN()
{
	var network = buildNNetwork(10);
	
	network.inputLayer = createLayer(33);
	
	for (var i = 0; i < network.hiddenLayers.length; i++)
	{
		network.hiddenLayers[i] = createLayer(10);
	}
	network.outputLayer = createLayer(26);
	network.refresh();
	return network;
}

function ruAlphabetValues(netw, values)
{
	for (var i = 0; i < values.length; i++)
	{
		var ref = checkRuValNum(values[i]);
		netw.inputLayer.neurons[ref.index].inputVal = ref.val;
	}
	netw.refresh();
	
	console.log(netw.inputLayer);
	console.log(netw);
}

function checkRuValNum(val)
{
	var ref = 
	{
		index: 0,
		val: 0
	};
	switch(val)
	{
		case 'А':
		ref.index = 0;
		ref.val = 1.34;
		break;
		case 'а':
		ref.index = 0;
		ref.val = 0.34;
		break;
		case 'Б':
		ref.index = 1;
		ref.val = 1.01;
		break;
		case 'б':
		ref.index = 1;
		ref.val = 0.01;
		break;
		case 'В':
		ref.index = 2;
		ref.val = 1.02;
		break;
		case 'в':
		ref.index = 2;
		ref.val = 0.02;
		break;
		case 'Г':
		ref.index = 3;
		ref.val = 1.03;
		break;
		case 'г':
		ref.index = 3;
		ref.val = 0.03;
		break;
		case 'Д':
		ref.index = 4;
		ref.val = 1.04;
		break;
		case 'д':
		ref.index = 4;
		ref.val = 0.04;
		break;
		case 'Е':
		ref.index = 5;
		ref.val = 1.05;
		break;
		case 'е':
		ref.index = 5;
		ref.val = 0.05;
		break;
		case 'Ё':
		ref.index = 6;
		ref.val = 1.06;
		break;
		case 'ё':
		ref.index = 7;
		ref.val = 0.07;
		break;
		case 'Ж':
		ref.index = 8;
		ref.val = 1.08;
		break;
		case 'ж':
		ref.index = 8;
		ref.val = 0.08;
		break;
		case 'З':
		ref.index = 9;
		ref.val = 1.09;
		break;
		case 'з':
		ref.index = 9;
		ref.val = 0.09;
		break;
		case 'И':
		ref.index = 10;
		ref.val = 1.10;
		break;
		case 'и':
		ref.index = 10;
		ref.val = 0.10;
		break;
		case 'Й':
		ref.index = 11;
		ref.val = 1.11;
		break;
		case 'й':
		ref.index = 11;
		ref.val = 0.11;
		break;
		case 'К':
		ref.index = 12;
		ref.val = 1.12;
		break;
		case 'к':
		ref.index = 12;
		ref.val = 0.12;
		break;
		case 'Л':
		ref.index = 13;
		ref.val = 1.13;
		break;
		case 'л':
		ref.index = 13;
		ref.val = 0.13;
		break;
		case 'М':
		ref.index = 14;
		ref.val = 1.14;
		break;
		case 'м':
		ref.index = 14;
		ref.val = 0.14;
		break;
		case 'Н':
		ref.index = 15;
		ref.val = 1.15;
		break;
		case 'н':
		ref.index = 15;
		ref.val = 0.15;
		break;
		case 'О':
		ref.index = 16;
		ref.val = 1.16;
		break;
		case 'о':
		ref.index = 16;
		ref.val = 0.16;
		break;
		case 'П':
		ref.index = 17;
		ref.val = 1.17;
		break;
		case 'п':
		ref.index = 17;
		ref.val = 0.17;
		break;
		case 'Р':
		ref.index = 18;
		ref.val = 1.18;
		break;
		case 'р':
		ref.index = 18;
		ref.val = 0.18;
		break;
		case 'С':
		ref.index = 19;
		ref.val = 1.19;
		break;
		case 'с':
		ref.index = 19;
		ref.val = 0.19;
		break;
		case 'Т':
		ref.index = 20;
		ref.val = 1.20;
		break;
		case 'т':
		ref.index = 20;
		ref.val = 0.20;
		break;
		case 'У':
		ref.index = 21;
		ref.val = 1.21;
		break;
		case 'у':
		ref.index = 21;
		ref.val = 0.21;
		break;
		case 'Ф':
		ref.index = 22;
		ref.val = 1.22;
		break;
		case 'ф':
		ref.index = 22;
		ref.val = 0.22;
		break;
		case 'Х':
		ref.index = 23;
		ref.val = 1.23;
		break;
		case 'х':
		ref.index = 23;
		ref.val = 0.23;
		break;
		case 'Ц':
		ref.index = 24;
		ref.val = 1.24;
		break;
		case 'ц':
		ref.index = 24;
		ref.val = 0.24;
		break;
		case 'Ч':
		ref.index = 25;
		ref.val = 1.25;
		break;
		case 'ч':
		ref.index = 25;
		ref.val = 0.25;
		break;
		case 'Ш':
		ref.index = 26;
		ref.val = 1.26;
		break;
		case 'ш':
		ref.index = 26;
		ref.val = 0.26;
		break;
		case 'Щ':
		ref.index = 27;
		ref.val = 1.27;
		break;
		case 'щ':
		ref.index = 27;
		ref.val = 0.27;
		break;
		case 'Ъ':
		ref.index = 28;
		ref.val = 1.28;
		break;
		case 'ъ':
		ref.index = 28;
		ref.val = 0.28;
		break;
		case 'Ы':
		ref.index = 29;
		ref.val = 1.29;
		break;
		case 'ы':
		ref.index = 29;
		ref.val = 0.29;
		break;
		case 'Ь':
		ref.index = 30;
		ref.val = 1.30;
		break;
		case 'ь':
		ref.index = 30;
		ref.val = 0.30;
		break;
		case 'Э':
		ref.index = 31;
		ref.val = 1.31;
		break;
		case 'э':
		ref.index = 31;
		ref.val = 0.31;
		break;
		case 'Ю':
		ref.index = 32;
		ref.val = 1.32;
		break;
		case 'ю':
		ref.index = 32;
		ref.val = 0.32;
		break;
		case 'Я':
		ref.index = 33;
		ref.val = 1.33;
		break;
		case 'я':
		ref.index = 33;
		ref.val = 0.33;
		break;
	}
	return ref;
}

