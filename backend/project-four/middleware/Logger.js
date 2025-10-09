const jwt = require("jsonwebtoken");

exports.Logger = (req, res, next) => {
  console.log(req.headers);
  // console.log(`Req authorization: ${req.headers.authorization}`);

  console.log(`Req url: ${req.url} Method: ${req.method}`);
  next();
};
exports.ErrorHandler = (err, req, res, next) => {
  console.error(err.message);
  res.status(500).send({
    "something went wrong from error handling middleware": err.message,
    status: 500,
    type: err.type,
  });
};

exports.AuthValidator = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error("Authorization header is missing");
  }
  const token = authHeader.split(" ")[1];
  try {
    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    console.log("req.user", req.user);
    console.log("req.user decode", req.user);
    next();
  } catch (error) {
    if (error.name == "TokenExpiredError") {
      return res.status(401).json({
        error: "Token has expired",
        expiredAt: error.expiredAt,
        status: 401,
      });
    }
    return res.status(401).json({ error: "Invalid token" });
  }
};
