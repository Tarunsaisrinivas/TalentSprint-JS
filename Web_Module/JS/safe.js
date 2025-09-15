// function step1(fn) {
//   console.log("Step - 1");
//   fn();
// }

// function step2(fn) {
//   console.log("Step - 2");
//   fn();
// }

// function step3(fn) {
//   setTimeout(() => {
//     console.log("Step - 3");
//     fn();
//   }, 1000);
// }

// function step4(fn) {
//   setTimeout(() => {
//     console.log("Step - 4");
//     if (fn) {
//       fn();
//     } else {
//       console.log("Done for the day!!");
//     }
//   }, 1000);
// }

// function step5(fn) {
//   setTimeout(() => {
//     console.log("Step - 5");
//     if (fn) {
//       fn();
//     } else {
//       console.log("Done for the day!!");
//     }
//   }, 1000);
// }

// step1(() => {
//   step2(() => {
//     step3(() => {
//       step4();
//     });
//   });
// });

function OrderFood(food, callback) {
  setTimeout(() => {
    console.log(`Your Order has been placed: ${food}`);
    callback();
  }, 2000);
}

function cookingFood(food, callback) {
  setTimeout(() => {
    console.log(`Your food is being prepared: ${food}`);
    // callback();
  }, 3000);
}

function orderHasPicked(food, callback) {
  console.log(`Your order is on the way: ${food}`);
  callback();
}

function orderDelivered(food, callback) {
  console.log(`Your order is coming to door step: ${food}`);
  callback();
}

function enjoytheFood(food) {
  console.log(`My Food is delicious: ${food}`);
}

OrderFood("Pizza", function () {
  cookingFood("Pizza", function () {
    orderHasPicked("Pizza", function () {
      orderDelivered("Pizza", function () {
        enjoytheFood("Pizza");
      });
    });
  });
});
