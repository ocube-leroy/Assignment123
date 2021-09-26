function taskThree(a, b, c) {

	if (a < b && b < c) {

	return (b - a + c);

	}	
	
	else if (a < c && c < b) {

	return (c - a + b);

	}	

	else if (b < a && a < c) {

	return (a - b + c);

	}	

	else if (b < c && c < a) {
	
	return (c - b + a);

	}	

	else if (c < a && a < b) {

	return (a - c + b);

	}	

	else if (c < b && b < a);

	return (b - c + a);

	}
	
	const numero3 = taskThree(12, 9, 28);

console.log(numero3);