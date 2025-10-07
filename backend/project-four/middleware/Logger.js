exports.Logger = (req, res, next) => {
  console.log(`Req url: ${req.url} Method: ${req.method}`);
  next();
};
exports.ErrorHandler = (err, req, res, next) => {
  console.error(err.message);
  res.status(500).send({ "something went wrong from error handling middleware" : err.message , status: 500 ,type:err.type});
}