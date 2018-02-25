function showResult(fighter) {
  console.log('Fighter', fighter.getName());
  console.log('- Combat stats:', fighter.getCombatHistory());
  console.log('- Properties:', fighter.getStats());
}

function fighter (objOfFighter) {
	let stats = objOfFighter,
		combatHistory = {
			wins: 0,
			loses: 0
	};


	return {
		getName: function(){
			return this.name;
		},
		block: function(){
			return Math.random() >= 0.5;
		},
		getStats: function(){
			return stats;
		},
		getCombatHistory: function(){
			return combatHistory;
		},
		fight: function(defender){
			if(!defender.block()){
				return false;
			}else {
				defender.hp -= this.attack;
				if(defender.hp <= 0){
					defender.hp = 0;
					defender.getCombatHistory.loses++;
					this.getCombatHistory.win++;
				}
				return true;
			}
		}
	}
}

var fighter1 = fighter({name: 'John', attack: 100, hp: 100});
var fighter2 = fighter({name: 'Kayn', attack: 50, hp: 300});
var fighter3 = fighter({name: 'Bill', attack: 40, hp: 100});

fighter1.fight(fighter2);
fighter1.fight(fighter3);

showResult(fighter1);

showResult(fighter2); 

showResult(fighter3);