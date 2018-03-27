// Task 1
var defaults = { width: 100, height: 100 };
var options = { width: 150 };
var configs = assign({}, defaults, options);

function assign(object) {
    if (object === null || object === undefined) { // Error if undefined or null
      console.error("Cannot convert first argument to object");
      return false;
    }
    //
    let newObject = Object(object);
    for (let i = 1; i < arguments.length; i++) {
      let property = arguments[i];

      if (property != null) {
        for (let key in property) {
          // exclude properties of prototype
          if (Object.prototype.hasOwnProperty.call(property, key)) {
            newObject[key] = property[key];
          }
        }
      }
    }
    return newObject;
};
// Task 2

function Fighter(object){
	// set private fields
	this._name = object.name;
	this._attack = object.attack;
	this._totalHitpoints = object.hitpoints;
	this._currentHitpoints = object.hitpoints;
}
// set prototype methods
// to have opportunity to rewrite them 
// inside inherited classes
Fighter.prototype.getName = function(){
	return this._name;
}
Fighter.prototype.getHitpoints = function(){
	return this._currentHitpoints;
}
Fighter.prototype.setHitpoints = function(amount){
	this._currentHitpoints = amount;
}
Fighter.prototype.getTotalHitpoints = function(){
	return this._totalHitpoints;
}
Fighter.prototype.setTotalHitpoints = function(amount){
	this._totalHitpoints = amount;
}
Fighter.prototype.getAttack = function(){
	return this._attack;
}
Fighter.prototype.setAttack = function(amount){
	this._attack = amount;
}
Fighter.prototype.fight = function(fighter){
	if( this.getName() === fighter.getName() ){
		throw new TypeError( this.getName() + " cannot fight with himself");
	}
	if( fighter.isAlive() ){
		fighter.setHitpoints( fighter.getHitpoints() - this.getAttack() );
		if( fighter.getHitpoints() <= 0 ){
			fighter.setHitpoints(0);
		}
	}
}
Fighter.prototype.isAlive = function(){
	if( this._currentHitpoints > 0 ){
		return true;
	}
	return false;
}

// Champion constructor
function Champion(){
	Fighter.apply(this, arguments);
	this._defence = false;
}
// create objects Monster and Champion, using the prototype of the Champion 
// to inherit it's methods
Champion.prototype = Object.create(Fighter.prototype);
Champion.prototype.constructor = Champion;

Champion.prototype.heal = function(){
	if( this.getTotalHitpoints() > this.getHitpoints() ){
		this.setHitpoints( this.getHitpoints() + 5 );
	}
}
Champion.prototype.defence = function(){
	this.setDefence(true);
	this.setTotalHitpoints( this.getTotalHitpoints() + 1 );
}
Champion.prototype.getDefence = function(){
	return this._defence;
}
Champion.prototype.setDefence = function(boolean){
	this._defence = boolean;
}
Champion.prototype.fight = function(fighter){
	if( fighter.isAlive() ){
		Fighter.prototype.fight.call(this, fighter);
		if( !fighter.isAlive() ){
			this.setAttack( this.getAttack() + 1 );
		}
	}else{
		throw new RangeError("Enemy is already dead");
	}
}

// Monster constructor 
function Monster(){
	Fighter.apply(this, arguments);
	this._enrageAttack = 0;
	this._enrageTurns = 0;
	this._multiplier = 0;
}
// create objects Monster and Champion, using the prototype of the Champion 
// to inherit it's methods
Monster.prototype = Object.create(Fighter.prototype);
Monster.prototype.constructor = Monster;

Monster.prototype.getEnrageTurns = function(){
	return this._enrageTurns;
}
Monster.prototype.setEnrageTurns = function(amount){
	this._enrageTurns = amount;
}
Monster.prototype.getMultiplier = function(){
	return this._multiplier;
}
Monster.prototype.setMultiplier = function(amount){
	this._multiplier = amount;
}
Monster.prototype.enrage = function(){
	this.setMultiplier( this.getMultiplier() + 2 );
	this.setEnrageTurns(2);
}
Monster.prototype.fury = function(){
	if( this.getTotalHitpoints() <= 5 || this.getHitpoints <= 5 ){
		throw new RangeError("Not enough hitpoints");
	}
	this.setTotalHitpoints( this.getTotalHitpoints() - 5 );
	this.setHitpoints( this.getHitpoints() - 5 );
	this.setAttack( this.getAttack() + 2 );	
}
Monster.prototype.fight = function(fighter){
	if( this.getEnrageTurns() > 0 ){
		this.setAttack( this.getAttack() * this.getMultiplier() );
		Fighter.prototype.fight.call(this, fighter);
		this.setAttack( this.getAttack() / this.getMultiplier() );
		this.setEnrageTurns( this.getEnrageTurns() - 1 );
		if( !fighter.isAlive() ){
			this.setHitpoints( this.getHitpoints() + Math.round( 0.25 * fighter.getTotalHitpoints() ) );
			this.setTotalHitpoints( this.getTotalHitpoints() + Math.round( 0.1 * fighter.getTotalHitpoints() ) );
		}
	}else{
		Fighter.prototype.fight.call(this, fighter);
		if( !fighter.isAlive() ){
			this.setHitpoints( this.getHitpoints() + Math.round( 0.25 * fighter.getTotalHitpoints() ) );
			this.setTotalHitpoints( this.getTotalHitpoints() + Math.round( 0.1 * fighter.getTotalHitpoints() ) );
		}
	}
}

// check for task 2
var hunter = new Champion({name: "Rexxar", attack: 10, hitpoints: 60});
var beast = new Monster({name: "King Krush", attack: 8, hitpoints: 80});

hunter.fight(beast);
beast.getHitpoints(); // -> 70
beast.enrage();
hunter.fight(beast);
beast.getHitpoints(); // -> 60
beast.fight(hunter);
hunter.getHitpoints(); // -> 44
hunter.fight(beast);
hunter.fight(beast);
hunter.fight(beast);
hunter.fight(beast);
hunter.fight(beast);
hunter.fight(beast); // -> Enemy is already dead
beast.isAlive(); // -> false
hunter.getAttack(); // -> 11
hunter.getHitpoints(); // -> 44
hunter.heal();
hunter.getHitpoints(); // -> 49
