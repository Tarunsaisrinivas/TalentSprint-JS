document.addEventListener("DOMContentLoaded", () => {
const toclist = document.querySelector("#toclist");
const headings = document.querySelectorAll("h1, h2, h3");

headings.forEach((ele) => {
  const listItem = document.createElement("li");
  listItem.textContent = ele.textContent; 
  toclist.appendChild(listItem);
});
});
// document.addEventListener("DOMContentLoaded", () => {
//   const toclist = document.querySelector("#toclist");
//   const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

//   headings.forEach((ele, index) => {
//     if (!ele.id) {
//       ele.id = "heading-" + index;
//     }

   
//     const listItem = document.createElement("li");
//     const link = document.createElement("a");
//     link.href = "#" + ele.id;
//     link.textContent = ele.textContent;

//     listItem.appendChild(link);
//     toclist.appendChild(listItem);
//   });
// });
