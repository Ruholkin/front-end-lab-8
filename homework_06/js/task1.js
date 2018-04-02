const http = {
  get: url => {
  	return new Promise(( resolve, reject ) => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);

      xhr.onload = () => {
	      if ( xhr.readyState === 4 ) {
          if ( xhr.status === 200 ) {
	      	  resolve(xhr.responseText);
	      	} else {
	      	  reject(xhr.statusText);
	      	}
	      } else {
	      	reject(xhr.statusText);
	      }
      };

      xhr.onerror = () => {
      	reject(xhr.statusText);
      };

      xhr.send();
  	});
  },
  post: ( url, requestBody ) => {
  	return new Promise(( resolve, reject ) => {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url, requestBody);

      xhr.onload = e => {
      	if ( xhr.readyState === 4 ) {
      	  if( xhr.status === 200 ){
      	    resolve(xhr.responseText);
      	  } else {
      	    reject(xhr.statusText);
      	  }
      	} else {
      	  reject(xhr.statusText);
      	}
      };

      xhr.onerror = () => {
      	reject(xhr.statusText);
      };

      xhr.send(requestBody);
  	});
  }
}