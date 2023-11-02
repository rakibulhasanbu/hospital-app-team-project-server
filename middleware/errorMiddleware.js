const ErrorMiddleware = (error, res) => {
    error.statusCode = error.statusCode || 500;
    error.message = error.message || "Internal server error occurred";
    console.log("error middleware worked");
    res.status(error.statusCode).json({
        success: false,
        message: error.message
    })
}

module.exports = { ErrorMiddleware };