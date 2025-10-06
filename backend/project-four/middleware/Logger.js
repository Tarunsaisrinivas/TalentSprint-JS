exports.Logger = (req, res, next) => {
  console.log(`Req url: ${req.url} Method: ${req.method}`);
  next();
};
exports.ErrorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}