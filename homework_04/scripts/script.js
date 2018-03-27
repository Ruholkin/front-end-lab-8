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
