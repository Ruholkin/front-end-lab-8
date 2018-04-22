function output ( result, div ){
	if( result != false ){
		let $result = $("<p></p>");
		$result.text( result );
		$result.addClass( "myClass yourClass" );
		div.append($result);
	} 
}

export default{
	output: output
}