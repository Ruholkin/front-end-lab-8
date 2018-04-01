const waitFewSec = (msec, triggerFail) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (triggerFail) {
        reject(false);
        return;
      }

      resolve(true);
    }, msec);
  });
};
const asyncFn = async () => {
  const result = await waitFewSec(1000);
  return result;
};
  
async function doAsyncMagic () {
  for ( let i = 0; i < 4; i++ ){
    try {
      let result = await asyncFn();
      console.log(result);
    } catch (e) {
      throw new Error (e);
    }
  }
}

doAsyncMagic(); // [true, true, true, true]

async function* rangeGen() {

  for (let i = 1; i <= 15; i++) {
    yield i;
  }
}

async function iterateRange () {
  let sum = 0;
  try {

    for await( let i of rangeGen() ){
      sum += i;
    }
    
    console.log(sum);
    return sum;
  } catch (e) {
    console.log(e);
  }
}

iterateRange(); // Promise {<resolved>: 120}