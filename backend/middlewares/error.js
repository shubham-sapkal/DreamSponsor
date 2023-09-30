class ErrorHandler extends Error
{
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err, req, res, next) => {

    // Default Error Message
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    console.log("Error: "+ err.message);

    return res.status(statusCode).json({
        success: false,
        message: err.message
    });

}

export default ErrorHandler;