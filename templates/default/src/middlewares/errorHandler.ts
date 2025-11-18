import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/ApiError';
import logger from '../utils/logger';
import { CONSTANTS } from '../config/constants';

export const errorHandler = (
    err: Error | ApiError,
    req: Request,
    res: Response,
    _next: NextFunction
): void => {
    let statusCode = CONSTANTS.HTTP_STATUS.INTERNAL_SERVER;
    let message = 'Internal Server Error';

    if (err instanceof ApiError) {
        statusCode = err.statusCode;
        message = err.message;
    } else if (err.name === 'ValidationError') {
        statusCode = CONSTANTS.HTTP_STATUS.BAD_REQUEST;
        message = err.message;
    } else if (err.name === 'CastError') {
        statusCode = CONSTANTS.HTTP_STATUS.BAD_REQUEST;
        message = 'Invalid ID format';
    } else if ((err as any).code === 11000) {
        statusCode = CONSTANTS.HTTP_STATUS.CONFLICT;
        message = 'Duplicate field value entered';
    }

    logger.error('Error:', {
        message: err.message,
        stack: err.stack,
        url: req.url,
        method: req.method,
        ip: req.ip,
    });

    res.status(statusCode).json({
        success: false,
        error: message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
};

export const notFound = (req: Request, res: Response, _next: NextFunction): void => {
    res.status(CONSTANTS.HTTP_STATUS.NOT_FOUND).json({
        success: false,
        error: `Route ${req.originalUrl} not found`,
    });
};
