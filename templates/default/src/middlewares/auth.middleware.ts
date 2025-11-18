import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.model';
import { ApiError } from '../utils/ApiError';
import { CONSTANTS } from '../config/constants';
import { TokenPayload } from '../types';

export const authenticate = async (
    req: Request,
    _res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new ApiError(
                CONSTANTS.HTTP_STATUS.UNAUTHORIZED,
                'No token provided'
            );
        }

        const token = authHeader.substring(7);

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET || 'secret'
        ) as TokenPayload;

        const user = await User.findById(decoded.id).select('-password');

        if (!user) {
            throw new ApiError(
                CONSTANTS.HTTP_STATUS.UNAUTHORIZED,
                CONSTANTS.MESSAGES.USER_NOT_FOUND
            );
        }

        if (!user.isActive) {
            throw new ApiError(
                CONSTANTS.HTTP_STATUS.FORBIDDEN,
                'Account is deactivated'
            );
        }

        const userObj = user.toObject();

        req.user = {
            _id: String(userObj._id),
            name: String(userObj.name),
            email: String(userObj.email),
            age: userObj.age,
            role: String(userObj.role || 'user'),
            isActive: Boolean(userObj.isActive),
            createdAt: userObj.createdAt,
            updatedAt: userObj.updatedAt,
        };

        next();
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            next(
                new ApiError(
                    CONSTANTS.HTTP_STATUS.UNAUTHORIZED,
                    CONSTANTS.MESSAGES.INVALID_TOKEN
                )
            );
        } else if (error instanceof jwt.TokenExpiredError) {
            next(
                new ApiError(
                    CONSTANTS.HTTP_STATUS.UNAUTHORIZED,
                    CONSTANTS.MESSAGES.TOKEN_EXPIRED
                )
            );
        } else {
            next(error);
        }
    }
};

export const authorize = (...roles: string[]) => {
    return (req: Request, _res: Response, next: NextFunction): void => {
        if (!req.user) {
            throw new ApiError(
                CONSTANTS.HTTP_STATUS.UNAUTHORIZED,
                CONSTANTS.MESSAGES.UNAUTHORIZED
            );
        }

        if (!roles.includes(req.user.role || 'user')) {
            throw new ApiError(
                CONSTANTS.HTTP_STATUS.FORBIDDEN,
                'Access denied'
            );
        }

        next();
    };
};
