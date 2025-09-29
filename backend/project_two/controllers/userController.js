// need to write req,res logic in controller file
// then import that file here and use it in routes
// this is done to separate logic and routes and this is that controller file
exports.home = (req, res) => {
    res.send("Hello from Project Two - Home");
}
exports.getUser = (req, res) => {
    res.status(200).json({
        name: "John Doe",
        age: 30,
        email: "5E2yD@example.com"
    });
}
exports.aboutPost = (req, res) => {
    res.send("Hello from Project Two - About Post Request");
}   
exports.infoPut = (req, res) => {
    res.send("Hello from Project Two - Info Put Request");
}

exports.infoDelete = (req, res) => {
    res.send("Hello from Project Two - Info Delete Request");
}
module.exports = exports; 