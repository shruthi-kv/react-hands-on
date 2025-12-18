// let numbers = [1,3,4,5,6,2];

// let res = numbers.reduce((acc,curr)=>{return acc+curr},2);
// console.log(res)

let food = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve("Hello");
    }, 1000);
  } catch (err) {
    reject("Error Ocurred!");
  }
});

food
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));









const promise1 = new promise((resolve, reject) => {
  console.log(1);
  resolve("resolve1");
});
const promise2 = promise1.then((res) => {
  console.log(res);
});
console.log("promise1:", promise1);
console.log("promise2:", promise2);



