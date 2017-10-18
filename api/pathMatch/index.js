var vhttp = require("http");
var url = require("url");
var router = require("./route");

function onRequest(req, res) {
    var pathName = url.parse(req.url).pathname;
    router.route(pathName, res);
}

vhttp.createServer(onRequest).listen(3000);

console.log("Server has started to listen at port: 3000.");