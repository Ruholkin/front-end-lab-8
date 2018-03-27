// it should be included to script.js
function progress( fighter_1, fighter_2 ){
	if( fighter_1.getLogs().length === 0 && fighter_2.getLogs().length === 0 ){
		return;
	}
	if( fighter_1.getLogs().length === 0 ){
		cases(fighter_2, fighter_1);
		fighter_2.clearLogs();
	}else{
		cases(fighter_1, fighter_2);
		fighter_1.clearLogs();
	}
}
function cases(fighter_1, fighter_2){
	let arr_1 = fighter_1.getLogs();
	switch(arr_1.length){
		case 1: 
			switch(arr_1[0]){
				case "heal":
					console.log(fighter_1.getName() + " healed");
					break;
				case "defence":
					console.log(fighter_1.getName() + " got defence");
					break;
				case "enrage":
					console.log(fighter_1.getName() + " multiply his attack on " + fighter_1.getMultiplier() + " for next two turns");
					break;
				case "fury":
					console.log(fighter_1.getName() + " increased his attack on 2 points" );
					break;
				case true:
					console.log(fighter_1.getName() + " could not deal damage to " + fighter_2.getName());
					break;
				default: 
					break;
			}
			break;
		case 2: 
			console.log( fighter_1.getName() + " dealt " + fighter_1.getAttack() + " damage to " + fighter_2.getName() );
			break;
		default: 
			break;
	}
}