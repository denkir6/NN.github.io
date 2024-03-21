function sigmoidFunction(x)
{
	var a = 1;
	var b = 1 + Math.exp(-x);
	var c = a/b;
	return c;
}

function tangentFunction(x)
{
	return 2 * sigmoidFunction(2 * x) - 1;
}