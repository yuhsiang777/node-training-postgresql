const headers = require("./headers");

function errorHandle(res, statusCode, status, message) {
  res.writeHead(statusCode, headers);
  res.write(JSON.stringify(
    {
      'status': status,
      'message': message
    }
  ));
  res.end();
}

module.exports = { errorHandle }