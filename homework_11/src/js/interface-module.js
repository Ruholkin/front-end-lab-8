import operations from "./calculating-module.js";
import output from "./output-module.js";

$(document).ready(function(){
  let $buttons = $(".buttons");
	let currentOperation;

	let $sign = $("<p></p>");
	$sign.text("");

	let $button = $("#Sum");

  $button.click( () => {
  	$sign.text(event.target.value);
  	currentOperation = operations.Sum;
  });

  $button = $("#Multi");

  $button.click( () => {
  	$sign.text(event.target.value);
  	currentOperation = operations.Multiplication;
  });

  $button = $("#Sub");
  $button.click( () => {
  	$sign.text(event.target.value);
  	currentOperation = operations.Sub;
  });

  $button = $("#Division");

  $button.click( () => {
  	$sign.text(event.target.value);
  	currentOperation = operations.Division;
  });

	let $result = $(".result");
	let $div = $(".input");
	$result.click( () => {
		let variable_a = $(".first-number").val();
		let variable_b = $(".second-number").val();
		let result = currentOperation(variable_a, variable_b);
		output.output( result, $div );
	});
});