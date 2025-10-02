exports.Logger = (req, res, next) => {
  console.log(
    `URL: ${req.url} \tMethod: ${
      req.method
    } \tDate: ${new Date().toLocaleTimeString()}`
  );
  next();
};
