//check ip    93.77.141.242

let ip_adress = document.getElementById("ip-adress");
let table_container = document.getElementById("table-container");
let loader = document.getElementById("loader");
let validate_button = document.getElementById("validate");
let result = document.getElementById("result");

let value = {};

let url_get = `https://ipapi.co/${ip_adress.value}/json/`;
let url_post = `https://shrouded-garden-94580.herokuapp.com/`;

function onClick(){
  onLoad();

  http.get(url_get)
      .then(returnedVelue => {
      	value = returnedVelue;
      	tableOutput(JSON.parse(value));
      	validate_button.style.display = "block";
    }).catch( e => {
      throw new Error(e);
    });
}

function validate(){
  http.post(url_post, value)
      .then(returnedVelue => {
      	let value = returnedVelue;
      	result.style.display = "block";
      	result.innerHTML = value;
    }).catch( e => {
     throw new Error(e);
   });
}

function onLoad(){
  ip_adress = document.getElementById("ip-adress");
  if( ip_adress.value === "" ){
  	url_get = `https://ipapi.co/json/`;
  } else {
  	url_get = `https://ipapi.co/${ip_adress.value}/json/`;
  }
}

function tableOutput(object){
  table_container.style.display = "none";
  loader.style.display = "block";
  
  //table_container.style.display = "block";
  table_container.innerHTML = "";
  let table = document.createElement("table");

  for (let i in object) {

  	if( i === "ip" || 
  		i === "city" || 
  		i === "country_name" || 
  		i === "latitude" || 
  		i === "longitude"  ||  	
  		i === "continent_code" || 
  		i === "currency" || 
  		i === "org" ) {
  	  let tr = document.createElement("tr"),
          td_prop = document.createElement("td"),
          td_key = document.createElement("td");
      td_prop.innerText = i;
      td_key.innerText = object[i];
      tr.appendChild(td_prop);
      tr.appendChild(td_key);
      table.appendChild(tr);
  	}
      
  }

  table_container.appendChild(table);

  loader.style.display = "none";
  table_container.style.display = "block";
}


  // for (let i in object) {
  //   if (object.hasOwnProperty(i)) {
  //     let tr = document.createElement("tr"),
  //         td_prop = document.createElement("td"),
  //         td_key = document.createElement("td");
  //     td_prop.innerText = object[i];
  //     td_key.innerText = i;
  //     tr.appendChild(td_prop);
  //     tr.appendChild(td_key);
  //     table.appendChild(tr);
  //   } 
  // }