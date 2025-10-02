exports.ErrorHandling = (err, req, res, next) => {
  console.error("Error Handling Error:", err.stack);
  res.status(500).send({ error: err.message });
};
