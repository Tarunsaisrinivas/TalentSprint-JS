// Promise.all()
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, "resolved");
});
const promise2 = 93; 
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "resolved2");
}); 

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.log(err);
  });

// Promise.any()
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, "resolved");
});
const promise5 = 93; 
const promise6 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "resolved2");
});

Promise.any([promise4, promise5, promise6])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.log(err);
  });