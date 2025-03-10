require("dotenv").config();
const http = require("http");
const AppDataSource = require("./db");
const { isUndefined, isNotValidString, isNotValidInteger } = require('./validators');
const headers = require("./headers");
const errHandle = require("./errorHandle");

const requestListener = async (req, res) => {

  let body = "";
  req.on("data", (chunk) => {
    body += chunk
  })

  if (req.url === "/api/credit-package" && req.method === "GET") {
    
  } else if (req.url === "/api/credit-package" && req.method === "POST") {
    
  } else if (req.url.startsWith("/api/credit-package/") && req.method === "DELETE") {
    
  } else if (req.method === "OPTIONS") {
    res.writeHead(200, headers)
    res.end()
  } else {
    res.writeHead(404, headers)
    res.write(JSON.stringify({
      status: "failed",
      message: "無此網站路由",
    }))
    res.end()
  }
}

const server = http.createServer(requestListener)

async function startServer() {
  await AppDataSource.initialize()
  console.log("資料庫連接成功")
  server.listen(process.env.PORT)
  console.log(`伺服器啟動成功, port: ${process.env.PORT}`)
  return server;
}

module.exports = startServer();
