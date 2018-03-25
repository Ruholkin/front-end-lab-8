// Employee constructor
function Employee(nameEmployee){
	// private fields
	let _name = nameEmployee.name,
		_age = nameEmployee.age,
		_salary = nameEmployee.salary,
		_primarySkill = nameEmployee.primarySkill,
		_currentNameOfCompany = "";
	let _logs = [];
	let _totalTime = 0,
		_start = 0,
		_end = 0;
	this.getName = function(){
		return _name;
	}
	this.getSalary = function(){
		return _salary;
	}
	this.getAge = function(){
		return _age;
	}
	this.getStart = function(){
		return _start;
	}
	this.setSalary = function(salary){
		if(salary > _salary && Number.isFinite(salary) && salary > 0){
			console.log("Change salary from " + _salary + " to " + salary);
			_logs.push("Change salary from " + _salary + " to " + salary);
			_salary = salary;
		}else if(salary < _salary && Number.isFinite(salary)){
			console.log("Try to change salary from " + _salary + " to " + salary);
		}else{
			console.log("Salary format doesn't fit ");
		}
	}
	this.getWorkTimeInSeconds = function(){
		let time = new Date();
			return (time - _start + _totalTime) / 1000;	// convert total time from ms to sec
	}
	this.hire = function(nameOfCompany, time){
		_currentNameOfCompany = nameOfCompany;		// set property with name of the company
		_start = time;								// set start working time 
		_logs.push( _name + " is hired to " + nameOfCompany + " in " + _start);
	}
	this.fire = function(nameOfCompany, time){
		if(_currentNameOfCompany === nameOfCompany){
			_end = time;
			_logs.push(_name + " is fired from " + _currentNameOfCompany + " in " + _end);
			_currentNameOfCompany = "";						// set property with name of the company to ""
			_totalTime += _end - _start;					// update total working time
			_start = 0;										// set start working time to 0 in order to avoid mistakes in getWorkTimeInSeconds
		}else{
			console.log( _name + " doesn't work there");
		}
	}
	this.getHistory = function(){
		if( _logs.length > 0 ){
			for( let i of _logs ){
				console.log(i);
			}
		}
	}
}
// Company constructor
function Company(nameCompany){
	// private fields
	let timeCreation = new Date();
	let _name = nameCompany.name,
		_owner = nameCompany.owner,
		_maxCompanySize = nameCompany.maxCompanySize;
	let	_employees = [],
		_logs = [];

	// add first log about creation of the company
	_logs.push(_name + " was created in " + timeCreation);

	this.addNewEmployee = function(that){
		if( that instanceof Employee ){
			let start = new Date();
			if(_employees.length+1 > _maxCompanySize){
				let lowest = _employees[0].getSalary(),
					lowestIndex = 0;
				for( let i = 1; i < _employees.length; i++){	// looking for employee with the lowest salary				if(lowest > _employees[i]){
					if(lowest > _employees[i].getSalary()){
						lowest = _employees[i].getSalary();
						lowestIndex = i;
					}
				}
				this.removeEmployee(lowestIndex);
			}
			_employees.push(that);
			that.hire(_name, start);
			_employees[_employees.length - 1].startWorking = start;
			_logs.push(that.getName() + " starts working at " + _name + " in " + start);
		}else{
			console.log("Please try to add Employee instance");
		}
	}
	this.removeEmployee = function(index){
		let start = new Date();
		_logs.push( _employees[index].getName() + " ends working at " + _name + " in " + start);
		_employees[index].fire(_name, start);
		let removed = _employees.splice(index, 1);
	}
	this.getAvarageSalary = function(){
		if( _employees.length > 0 ){
			let avarageSalary = 0;
			for(let i = 0; i < _employees.length; i++){
				avarageSalary += _employees[i].getSalary();
			}
			return avarageSalary/_employees.length;
		}
		return 0;
	}
	this.getEmployees = function(){
		return _employees;
	}
	this.getFormattedListOfEmployees = function(){
		if( _employees.length > 0 ){
			let end = new Date();
			let formattedEmployees = [],
				timeInCompany = 0;
			for ( let i = 0; i < _employees.length; i++ ){
				timeInCompany = (end - _employees[i].getStart()) / 1000;
				formattedEmployees.push( _employees[i].getName() + " - works in " + _name + " " + timeInCompany + " seconds ");
			}
			return formattedEmployees;
		}
		return 0;		
	}
	this.getAvarageAge = function(){
		if( _employees.length > 0 ){
			let avarageAge = 0;
			for( let i = 0; i < _employees.length; i++ ){
				avarageAge += _employees[i].getAge();
			}
			return avarageAge/_employees.length;
		}
		return 0;
	}
	this.getHistory = function(){
		return _logs;
	}
}

let artem = new Employee({name: "Artem", age: 15, salary: 1000, primarySkill: "UX"});
let vova = new Employee({name: "Vova", age: 16, salary: 2000, primarySkill: "BE"});
let vasyl = new Employee({name: "Vasyl", age: 25, salary: 1000, primarySkill: "FE"});
let ivan = new Employee({name: "Ivan", age: 35, salary: 5000, primarySkill: "FE"});
let orest = new Employee({name: "Orest", age: 29, salary: 300, primarySkill: "AT"});
let anton = new Employee({name: "Anton", age: 19, salary: 500, primarySkill: "Manager"});

let epam = new Company({name: "Epam", owner: "Arkadii", maxCompanySize: 5});
epam.addNewEmployee(artem);
epam.addNewEmployee(vova);
epam.addNewEmployee(vasyl);
epam.addNewEmployee(ivan);
epam.addNewEmployee(orest);
epam.addNewEmployee(anton);

console.log(epam.getHistory());

/*
"Epam was created in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time)"
"Artem starts working at Epam in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time);"
"Vova starts working at Epam in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time);"
"Vasyl starts working at Epam in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time);"
"Ivan starts working at Epam in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time);"
"Orest starts working at Epam in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time);"
"Orest ends working at Epam in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time);"
"Anton starts working at Epam in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time);"
*/
epam.removeEmployee(2);


console.log(vasyl.getHistory());

/*
"Vasyl is hired to Epam in Mon Mar 12 2018 07:45:55 GMT+0200 (FLE Standard Time)"
"Vasyl is fired from Epam in Mon Mar 12 2018 07:45:55 GMT+0200 (FLE Standard Time)"
*/

console.log(epam.getAvarageSalary()); // -> 2125
console.log(epam.getAvarageAge());  // -> 21.25

epam.addNewEmployee(5,6,9,5); // -> Please try to add Employee instance

setTimeout(() => {
   epam.removeEmployee(1);
   console.log(artem.getWorkTimeInSeconds()); // -> 5.5744444444444445
}, 5000);

vova.setSalary(900);
vova.setSalary(2200);
console.log(vova.getHistory());
/*
"Vova is hired to Epam in Mon Mar 12 2018 08:08:48 GMT+0200 (FLE Standard Time)"
"try to change salary from 2000 to 900"
"change salary from 2000 to 2200"
*/

console.log(epam.getFormattedListOfEmployees());

// "Artem - works in Epam 0.013 seconds ", "Vova - works in Epam 0.013 seconds ", "Ivan - works in Epam 0.012 seconds ", "Anton - works in Epam 0.012 seconds "
