module.exports = (req, res, next) => {
    console.log(`IP Client: ${req.connection.remoteAddress}`);
    next();
};
