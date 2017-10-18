var http = require("http");
var url = require("url");
var querystring = require("querystring");

function onRequest(req, res) {
    var data = "";

    req.on('data', function (chunk) {
        data += chunk;
        console.log(data);
    });

    req.on('end', function () {
        data = querystring.parse(data);
        console.log(data);

        var obj = {
            id: data.id,
            name: data.name,
            timestamp: (new Date()).getTime()
        };
        res.writeHead(200, {'Content-Type': 'application/json' });
        res.write(JSON.stringify({ type: 'message', data: obj }));
        res.end(); 
    });     
}

http.createServer(onRequest).listen(3000, function () {
    console.log("Server has started and is listening on port 3000.");
});