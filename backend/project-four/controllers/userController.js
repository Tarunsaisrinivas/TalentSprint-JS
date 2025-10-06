exports.getUser = (req, res) => {
  console.log(`Req url: ${req.url} Method: ${req.method}`);
  res.json({ message: 'User fetched successfully' });
}