/* A Promise is an object, created by passing in an executor function.
The executoris a function with two arguments:
resolve(value) → when the work succeeds.
reject(reason) → when the work fails.

*/
export function simplePromise(shouldResolve = true) {
  function promiseFunction(resolve, reject) {
    setTimeout(() => {
      shouldResolve ? resolve("succeeded") : reject("rejected");
    }, 1000);
  }
  return new Promise(promiseFunction);
}

export function promiseAll(promises) {
  const promiseFn = (resolve, reject) => {
    const promiseOutput = [];
    const len = promises.length;
    let completedPromises = 0;

    function attachHandler(index) {
      promises[index]
        .then((output) => {
          promiseOutput[index] = output;
          completedPromises++;
          if (completedPromises === len) {
            resolve(promiseOutput);
          }
        })
        .catch(reject);
    }

    for (let index = 0; index < len; index++) {
      attachHandler(index);
    }
  };
  return new Promise(promiseFn);
}

export function promiseRace(promises) {
  const promiseFn = (resolve, reject) => {
    const len = promises.length;
    let hasFinished = false;

    function attachHandler(index) {
      promises[index]
        .then((output) => {
          if (!hasFinished) {
            resolve(output);
            hasFinished = true;
          }
        })
        .catch((error) => {
          if (!hasFinished) {
            reject(error);
            hasFinished = true;
          }
        });
    }

    for (let index = 0; index < len; index++) {
      attachHandler(index);
    }
  };
  return new Promise(promiseFn);
}

const p3 = new Promise((resolve, reject) => setTimeout(resolve, 500, "Third"));
await p3;
