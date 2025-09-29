const http = require("http");
// my code at beginning
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello from Project One\n");
//   })
//   .listen(3000, () => {
//     console.log("Server running at http://localhost:3000/");
//   });
// class code 
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//   if (req.url === "/about") {
//     res.write("About Page\n");
//   } else if (req.url === "/contact") {
//     res.write("Contact Page\n");
//   } else if (req.url === "/home") {
//     res.write("Home Page\n");
//   } else if (req.url === "/") {
//     res.write("Hello World\n");
//     res.write("Hello World\n");
//   }
// else {
//     res.write("Page Not Found\n");
//   }
//   res.end();
// });

// server.listen(3000, () => {
//   console.log(`Server running at http://localhost:3000/`);
// });

// Switch case implementation
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  switch (req.url) {
    case "/about":
      res.end("About Page\n");
      break;
    case "/contact":
      res.end("Contact Page\n");
      break;
    case "/home":
      res.end("Home Page\n");
      break;
    case "/":
      res.end("Hello World\nHello World\n");
      break;
    default:
      res.end("Page Not Found\n");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});