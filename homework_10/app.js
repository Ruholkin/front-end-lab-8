class Input {
    constructor(placeHolder) {
        this.placeHolder = placeHolder || "Type...";
        this._value = "";
    }

    get value() {
        return this._value;
    }

    setValue(newValue) {
        this._value = newValue;
    }
}

class NumberInput extends Input {
    constructor(placeHolder){
        super(placeHolder);
        this.type = "number";
    }
}

function Decorator (object) {
  if("valid" in object) {
      delete object.valid;
    }
  if( AddRequiredValidation(object) &&
      AddNumberValidation(object) &&
      AddMaxLengthValidation(object, 3)){
    object.valid = true;
  } else {
    object.valid = false;
  }
}

function AddRequiredValidation (object) {
  if( object.value != undefined && object.value != "" ) {
    return true;
  } else {
    console.log("Validation require didn't pass.");
    return false;
  }
}

function AddMaxLengthValidation (object, maxLength) {
  if( object.value.toString().length <= maxLength ) {
      return true;
    } else {
      console.log("Validation length didn't pass.");
      return false;
    }
}

function AddNumberValidation (object) {
  if( typeof object.value === "number" ) {
      return true;
  } else {
    console.log("Validation number didn't pass.")
    return false;
  }
}

let numberInput = new NumberInput("Type numbers...");

Decorator(numberInput);
console.log(numberInput.valid);

numberInput.setValue("");
Decorator(numberInput); 
console.log(numberInput.valid); // false

numberInput.setValue("1");
Decorator(numberInput); 
console.log(numberInput.valid); // false

numberInput.setValue(1);
Decorator(numberInput); 
console.log(numberInput.valid); // true

numberInput.setValue(111111111111111);
Decorator(numberInput); 
console.log(numberInput.valid); // false