function Sum ( variable_a, variable_b ){
	variable_a = parseFloat(variable_a);
	variable_b = parseFloat(variable_b);
	if( check(variable_a) && check(variable_b) ){
		return variable_a + variable_b;
	}
	return false;
}

function Multiplication ( variable_a, variable_b ){
	variable_a = parseFloat(variable_a);
	variable_b = parseFloat(variable_b);
	if( check(variable_a) && check(variable_b) ){
		return variable_a * variable_b;
	}
	return false;
}

function Sub ( variable_a, variable_b ){
	variable_a = parseFloat(variable_a);
	variable_b = parseFloat(variable_b);
	if( check(variable_a) && check(variable_b) ){
		return variable_a - variable_b;
	}
	return false;
}

function Division ( variable_a, variable_b ){
	variable_a = parseFloat(variable_a);
	variable_b = parseFloat(variable_b);
	if( check(variable_a) && check(variable_b) ){
		return variable_a / variable_b;
	}
	return false;
}

function check( variable ){
	variable = parseFloat(variable);
	return !isNaN(parseFloat(variable)) && isFinite(variable);
}

export default {
	Sum: Sum,
	Multiplication: Multiplication,
	Sub: Sub,
	Division: Division
}