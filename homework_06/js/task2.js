let ip_adress = document.getElementById("ip-adress");
let table_container = document.getElementById("table-container");
let loader = document.getElementById("loader");
let loader_r = document.getElementById("loader-r");
let validate_button = document.getElementById("validate");
let result = document.getElementById("result");

let value = {};

let url_get = `https://ipapi.co/${ip_adress.value}/json/`;
let url_post = `https://shrouded-garden-94580.herokuapp.com/`;

function onClick(){
  if(checkIpAddress(ip_adress)){
  	onLoad();

  	http.get(url_get)
	  .then(returnedVelue => {
		value = returnedVelue;
		loader.style.display = "block";

		tableOutput(JSON.parse(value));
		})
		.catch( e => {
	  	throw new Error(e);
		});
  }
}

function validate(){
	loader_r.style.display = "block";

  http.post(url_post, value)
	.then(returnedVelue => {
		let value = returnedVelue;
		result.innerHTML = value;

		setTimeout(() => {
      loader_r.style.display = "none";
		  result.style.display = "block";
		}, 2000);
	})
	.catch( e => {
	 		throw new Error(e);
  });
}

function onLoad(){
  ip_adress = document.getElementById("ip-adress");

  // if user doesn't enter ip-adress it will check his ip
  if( ip_adress.value === "" ){
	  url_get = `https://ipapi.co/json/`;
  } else {
	  url_get = `https://ipapi.co/${ip_adress.value}/json/`;
  }
}

function tableOutput(object){
  table_container.style.display = "none";
  table_container.innerHTML = "";
  let table = document.createElement("table");
  let tr = document.createElement("tr"),
		  td_prop = document.createElement("td"),
		  td_key = document.createElement("td");

  td_prop.innerText = "Property";
	td_key.innerText = "Value";
	tr.appendChild(td_prop);
	tr.appendChild(td_key);
	table.appendChild(tr);

   for (let i in object) {

		if( checkValue(i) ) {
			tr = document.createElement("tr"),
			td_prop = document.createElement("td"),
			td_key = document.createElement("td");

		  td_prop.innerText = i.charAt(0).toUpperCase() + i.slice(1);
		  td_key.innerText = object[i];
		  tr.appendChild(td_prop);
		  tr.appendChild(td_key);
		  table.appendChild(tr);
		}
   }

  table_container.appendChild(table);

  setTimeout(() => {
    loader.style.display = "none";
		table_container.style.display = "block";
		setTimeout(() => {
			validate_button.style.display = "block"
		}, 500);
	}, 2000);
}

function checkValue(value) {
  if( value === "ip" || value === "city" || 
		  value === "country_name" || value === "latitude" || 
		  value === "longitude"  ||  value === "continent_code" || 
		  value === "currency" || value === "org" ){
  	return true;
  }
  return false;
}

function checkIpAddress(ipadress) {  
  if ( /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(ipadress.value) 
  	   || ipadress.value === "") {  
    return true;  
  }  
  alert("You have entered an invalid IP address!");  
  return false;  
}  