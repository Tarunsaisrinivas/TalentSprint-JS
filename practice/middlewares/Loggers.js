exports.Logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};
exports.ErrorHandle = (err, req, res) => {
    console.error(err.message);
    res.status(500).send({ "something went wrong from error handling middleware" : err.message , status: 500 ,type:err.type});
}