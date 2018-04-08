const BOARD_HEIGHT = 15;
const BOARD_WIDTH = 15;
let BOARD_SIZE = 15;
let board = createArray(BOARD_SIZE);

const WHITE = 1;
const BLACK = 2; 
let currentPlayer = WHITE;

$(document).ready(() => {
	const class_1 = "cell";
	const class_2 = "cell-b";

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

	createBoardBackground(BOARD_HEIGHT, BOARD_WIDTH, $board, class_2, board);
	createBoard(BOARD_HEIGHT, BOARD_WIDTH, $boardCells, class_1, board);

	$board.appendTo($container);
	$boardCells.appendTo($container);
	addEvents();


	$(".cell").css({ "height" : "40px", "width" : "40px", "background" : "rgba(255, 0, 0, 0.0)", "float" : "left" });
	$(".cell-b").css({ "height" : "40px", "width" : "40px", "background" : "#f2f2f2", "float" : "left" });

});

function createArray(size){
  let arr = new Array();
  for( let i=0; i < size; i++){
    arr[i] = new Array();
    for( let j=0; j < size; j++){
      arr[i][j] = new Object();
    }
  }
  return arr;
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

function createBoardBackground(height, width, board, class_){
	for( let i = 0; i < height; i++){
		for( let j = 0; j < width; j++){
			$("<div></div>").addClass(class_).appendTo(board);
		}
	}
}

function checkCell(value){
	if(value === 0){
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

function getI(string){
	let result = string.split("_");
	return result[0];
}

function getJ(string){
	let result = string.split("_");
	return result[1];
}

function addEvents(){
	$('input').click( function () {
		let nameClass = "";
		let listClasses = $( this ).attr("class");
		let listClasses_splitted = listClasses.split(" ");
		let rowIndex = getI(listClasses_splitted[1]);
		let columnIndex = getJ(listClasses_splitted[1]);

		if(checkCell(board[rowIndex][columnIndex].value)){
			if(currentPlayer === WHITE){
				board[rowIndex][columnIndex].value = WHITE;
				currentPlayer = BLACK;

				nameClass = "." + rowIndex + "_" + columnIndex;
				$(nameClass).addClass("circle-white");

				checkPlayer(board, BOARD_HEIGHT, BOARD_WIDTH);
				return;
			}else{
				board[rowIndex][columnIndex].value = BLACK;
				currentPlayer = WHITE;

				nameClass = "." + rowIndex + "_" + columnIndex;
				$(nameClass).addClass("circle-black");
				checkPlayer(board, BOARD_HEIGHT, BOARD_WIDTH);
				return;
			}
		}else{
			return;
		}

	});
}

function newGame(board, size){
	let nameClass = "";
	for( let i = 0; i < size; i++ ){
		for ( let j = 0; j < size; j++ ){
			nameClass = "." + i + "_" + j;
			$(nameClass).removeClass("circle-white");
			$(nameClass).removeClass("circle-black");
			$(nameClass).removeClass("circle-win");
		}
	}
}

function checkPlayer(board, height, width){
	let result = checkWin(board, height, width);
	switch (result) {
		case 1:
			console.log("White player won!");
			clearCells(board, BOARD_SIZE);
			currentPlayer = WHITE;
			break;
		case 2:
			console.log("Black player won!");
			clearCells(board, BOARD_SIZE);
			currentPlayer = WHITE;
			break;
		default:
			break;
	}
}

function checkWin(board, height, width) {
	let HEIGHT = height;
	let WIDTH = width;
	let EMPTY_CELL = 0;
	let nameClass = "";

	for (let i = 0; i < HEIGHT; i++) {
		for (let j = 0; j < WIDTH; j++) {
			let result = board[i][j].value;
			
			if (result === EMPTY_CELL){
				continue;
			}

			if (j + 3 < WIDTH &&
				result === board[i][j+1].value &&
				result === board[i][j+2].value &&
				result === board[i][j+3].value){

				for(let k = 0; k < 4; k++){
					nameClass = "." + i + "_" + (j + k);
					if(currentPlayer === 1){
						$(nameClass).removeClass("circle-white");
					}else{
						$(nameClass).removeClass("circle-black");
					}
					$(nameClass).addClass("circle-win");
				}

				return result;
			}

			if (i + 3 < HEIGHT) {

				if (result === board[i+1][j].value &&
					result === board[i+2][j].value &&
					result === board[i+3][j].value){

					for(let k = 0; k < 4; k++){
						nameClass = "." + (i + k) + "_" + j;
						if(currentPlayer === 1){
							$(nameClass).removeClass("circle-white");
						}else{
							$(nameClass).removeClass("circle-black");
						}
						$(nameClass).addClass("circle-win");
					}

					return result;
				}

				if (j + 3 < WIDTH &&
					result === board[i+1][j+1].value &&
					result === board[i+2][j+2].value &&
					result === board[i+3][j+3].value){

					for(let k = 0; k < 4; k++){
						nameClass = "." + (i + k) + "_" + (j + k);
						if(currentPlayer === 1){
							$(nameClass).removeClass("circle-white");
						}else{
							$(nameClass).removeClass("circle-black");
						}
						$(nameClass).addClass("circle-win");
					}

					return result;
				}
				
				if (j - 3 >= 0 &&
					result === board[i+1][j-1].value &&
					result === board[i+2][j-2].value &&
					result === board[i+3][j-3].value){

					for(let k = 0; k < 4; k++){
						nameClass = "." + (i + k) + "_" + (j - k);
						if(currentPlayer === 1){
							$(nameClass).removeClass("circle-white");
						}else{
							$(nameClass).removeClass("circle-black");
						}
						$(nameClass).addClass("circle-win");
					}

					return result;
				}
			}
		}
	}
	return EMPTY_CELL;
}