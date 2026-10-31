const http = require("http");
const fs = require("fs");
const path = require("path");
const { version } = require("../package.json");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ status: "ok", version }));
  }
  const file = path.join(__dirname, "..", "public", "index.html");
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.createReadStream(file).pipe(res);
});

server.listen(PORT, () => {
  console.log("ShopEasy Lite running on port " + PORT);
});
