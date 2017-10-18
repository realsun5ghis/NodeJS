function home(res) {
    console.log("This is the home page.");
    res.writeHead(200, {'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: "This is home page."}));
    res.end();
}

function blog(res) {
    console.log("This is the blog page.");
    res.writeHead(200, {'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: "This is blog page."}));
    res.end();
}

exports.home = home;
exports.blog = blog;