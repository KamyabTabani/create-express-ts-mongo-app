import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { ApiResponse } from '../utils/ApiResponse';
import { CONSTANTS } from '../config/constants';

const authService = new AuthService();

export class AuthController {
    async register(req: Request, res: Response): Promise<void> {
        const { name, email, password, age } = req.body;

        const result = await authService.register(name, email, password, age);

        const response = ApiResponse.success(
            CONSTANTS.HTTP_STATUS.CREATED,
            CONSTANTS.MESSAGES.USER_CREATED,
            result,
        );
        res.status(response.statusCode).json(response);
    }

    async login(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body;

        const result = await authService.login({ email, password });

        const response = ApiResponse.success(
            CONSTANTS.HTTP_STATUS.OK,
            CONSTANTS.MESSAGES.LOGIN_SUCCESS,
            result,
        );
        res.status(response.statusCode).json(response);
    }

    async getProfile(req: Request, res: Response): Promise<void> {
        const response = ApiResponse.success(
            CONSTANTS.HTTP_STATUS.OK,
            'Profile retrieved successfully',
            req.user,
        );
        res.status(response.statusCode).json(response);
    }
}
