class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message)

        this.statusCode = statusCode
        console.log("ErrorHandler");
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = { ErrorHandler };