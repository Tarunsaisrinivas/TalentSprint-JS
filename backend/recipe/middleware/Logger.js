exports.Logger = (req, res, next) => {
    console.log(`Req url: ${req.url} Method: ${req.method}`);
    next();
}
exports.ErrorHandle = (err, req, res, next) => {
    console.error(err.message);
    res.status(500).send({ error: err.message });
}