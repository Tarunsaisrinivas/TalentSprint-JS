//CallBack in JS
let food = "Pizza";
// function order(food, fn) {
//   console.log(`You selected the ${food}`);
//   fn();
// }

// function place(fn) {
//   console.log("Your order is Placed");
//   fn();
// }

// function cook(fn) {
//   console.log("Your order is going to be cooked");
//   console.log("🔃");
//   setTimeout(() => {
//     fn();
//   }, 5000);
// }
// function partnerArrive(fn) {
//   console.log("Partner Arrived");
//   fn();
// }
// function OntheWay(fn) {
//   console.log("Your order is on the way");
//   fn();
// }

// function delivery() {
//   console.log("Your order is delivered");
// }

// order(food, () => {
//   place(() => {
//     cook(() => {
//       partnerArrive(() => {
//         OntheWay(() => {
//           delivery();
//         });
//       });
//     });
//   });
// });

// Promises in JS for the above code

console.log("----------------------------PROMISES--------------------------");
function order(food) {
  return new Promise((resolve, reject) => {
    console.log(`You selected the ${food}`);
    resolve();
  });
}

function place() {
  return new Promise((resolve, reject) => {
    console.log("Your order is Placed");
    resolve();
  });
}

function cook(fn) {
  return new Promise((resolve, reject) => {
    console.log("Your order is going to be cooked");
    console.log("🔃");
    setTimeout(() => {
    
      resolve("Your order is cooked");
      // reject("❌ Cooking failed! The chef is unavailable.");
    }, 2000);
    if (fn) fn();
  });
}

function partnerArrive(fn) {
  return new Promise((resolve, reject) => {
    console.log("Partner Arrived");
    resolve();
  });
}

function OntheWay() {
  return new Promise((resolve, reject) => {
    resolve("Your order is on the way");
  });
}

function delivery() {
  return new Promise((resolve, reject) => {
    console.log("Your order is delivered");
    resolve();
  });
}

order("Pizza")
  .then(place)
  .then(cook)
  .then((msg) => console.log(msg))

  .then(partnerArrive)
  .then(OntheWay)
  .then((msg) => console.log(msg))
  .then(delivery)
  .catch((error) => console.log("⚠️ Error:", error));
