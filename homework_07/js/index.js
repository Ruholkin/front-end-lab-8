$(document).ready(() => {
	let BOARD_HEIGHT = 15;
	let BOARD_WIDTH = 15;
	let class_1 = "cell";
	let class_2 = "cell-b";
	let board = [];

	$("<div></div>").addClass("container").appendTo("body");

	let $container = $(".container");
	let $cell = $(".cell");

	$container.css({ "height" : "100%", "width" : "628px", "position" : "relative", "margin" : "0 auto" });
	let $board = $("<div></div>").addClass("board-back");
	let $boardCells = $("<div></div>").addClass("board");
	$boardCells.css({ "position" : "absolute", "height" : "628px", "width" : "628px", "margin" : "20px auto", "display" : "grid", "background" : "rgba(255, 0, 0, 0.0)",
							 "grid-column-gap" : "2px", "grid-row-gap" : "2px", "justify-items" : "center", 
							 "grid-template-columns" : "repeat(15, 1fr)", "grid-template-rows" : "auto" });
	$board.css({ "position" : "absolute", "top" : "20px", "left" : "20px", "height" : "628px", "width" : "628px", 
							 "background" : "#404040", "margin" : "20px auto", "display" : "grid",
							 "border" : "2px solid #404040", "grid-column-gap" : "2px", "grid-row-gap" : "2px", 
							 "justify-items" : "center", "grid-template-columns" : "repeat(15, 1fr)", "grid-template-rows" : "auto" });
	
	createArray(board, BOARD_HEIGHT);

	createBoard(BOARD_HEIGHT, BOARD_WIDTH, $board, class_2, board);
	createBoard(BOARD_HEIGHT, BOARD_WIDTH, $boardCells, class_1, board);

	$board.appendTo($container);
	$boardCells.appendTo($container);

	$('input').on('onClick', () => {
		alert(1);
	});

	$(".cell").css({ "height" : "40px", "width" : "40px", "background" : "rgba(255, 0, 0, 0.0)", "float" : "left" });
	$(".cell-b").css({ "height" : "40px", "width" : "40px", "background" : "#f2f2f2", "float" : "left" });

	console.log(board[2][3]);
	console.log(board[2][3].value);

});

function createArray(arr, size){
	let arr_1 = [];
	for( let i = 0; i < size; i++ ){
		for( let j = 0; j < size; j++ ){
			arr_1[j] = {};
		}
		arr[i] = arr_1;
	}
}

function createBoard(height, width, board, class_, arr){
	let nameClass = "";
	for( let i = 0; i < height; i++){
		for( let j = 0; j < width; j++){
			nameClass = "" + i + "_" + j;
			arr[i][j] = { div: $("<div></div>").addClass(class_).appendTo(board), value: 0 };
			$("<input type='button' value='' />").addClass("circle-transparent").addClass(nameClass).appendTo(arr[i][j].div);
		}
	}
}

function checkCell(board, row, column){
	if(board[row][column].value === 0){
		return true;
	}
	return false;
}

function clearCells(board, size){
	for(let i = 0; i < size; i++){
		for( let j = 0; j < size; j++){
			board[i][j].value = 0;
		}
	}
}

function getI(){
}

function getJ(){

}

function newGame(board, size){
	for( let i = 0; i < size; i++ ){
		for ( let j = 0; j < size; j++ ){
			// поміняти на transparent
			//board[i][j].circle;
		}
	}
}

function checkWin(board, height, width) {
	let HEIGHT = height;
	let WIDTH = width;
	let EMPTY_CELL = 0;

	for (let i = 0; i < HEIGHT; i++) {
		for (let j = 0; j < WIDTH; j++) {
			let result = board[i][j].value;
			
			if (result == EMPTY_CELL){
				continue;
			}

			if (j + 3 < WIDTH &&
				result == board[i][j+1].value &&
				result == board[i][j+2].value &&
				result == board[i][j+3].value){
				return result;
			}

			if (i + 3 < HEIGHT) {

				if (result == board[i+1][j].value &&
					result == board[i+2][j].value &&
					result == board[i+3][j].value){
					return result;
				}

				if (j + 3 < WIDTH &&
					result == board[i+1][j+1].value &&
					result == board[i+2][j+2].value &&
					result == board[i+3][j+3].value){
					return result;
				}
				
				if (j - 3 >= 0 &&
					result == board[i+1][j-1].value &&
					result == board[i+2][j-2].value &&
					result == board[i+3][j-3].value){
					return result;
				}
			}
		}
	}
	return EMPTY_CELL;
}