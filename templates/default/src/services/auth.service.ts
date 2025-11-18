import User from '../models/User.model';
import { ApiError } from '../utils/ApiError';
import { CONSTANTS } from '../config/constants';
import { AuthResponse, LoginCredentials } from '../types';
import logger from '../utils/logger';

export class AuthService {
    async register(name: string, email: string, password: string, age?: number): Promise<AuthResponse> {
        try {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                throw new ApiError(CONSTANTS.HTTP_STATUS.CONFLICT, CONSTANTS.MESSAGES.USER_EXISTS);
            }

            const user = new User({ name, email, password, age });
            await user.save();

            const token = user.generateAuthToken();

            logger.info(`User registered: ${email}`);

            return {
                user: user.toJSON(),
                token,
            };
        } catch (error) {
            logger.error('Registration error:', error);
            throw error;
        }
    }

    async login(credentials: LoginCredentials): Promise<AuthResponse> {
        try {
            const { email, password } = credentials;

            const user = await User.findOne({ email }).select('+password');

            if (!user) {
                throw new ApiError(CONSTANTS.HTTP_STATUS.UNAUTHORIZED, CONSTANTS.MESSAGES.INVALID_CREDENTIALS);
            }

            if (!user.isActive) {
                throw new ApiError(CONSTANTS.HTTP_STATUS.FORBIDDEN, 'Account is deactivated');
            }

            const isPasswordValid = await user.comparePassword(password);
            if (!isPasswordValid) {
                throw new ApiError(CONSTANTS.HTTP_STATUS.UNAUTHORIZED, CONSTANTS.MESSAGES.INVALID_CREDENTIALS);
            }

            const token = user.generateAuthToken();

            logger.info(`User logged in: ${email}`);

            return {
                user: user.toJSON(),
                token,
            };
        } catch (error) {
            logger.error('Login error:', error);
            throw error;
        }
    }

    async verifyToken(token: string): Promise<any> {
        try {
            const jwt = require('jsonwebtoken');
            return jwt.verify(token, process.env.JWT_SECRET || 'secret');
        } catch (error) {
            throw new ApiError(CONSTANTS.HTTP_STATUS.UNAUTHORIZED, CONSTANTS.MESSAGES.INVALID_TOKEN);
        }
    }
}
