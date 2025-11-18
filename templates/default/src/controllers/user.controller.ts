import {Request, Response} from 'express';
import {UserService} from '../services/user.service';
import {ApiResponse} from '../utils/ApiResponse';
import {CONSTANTS} from '../config/constants';

const userService = new UserService();

export class UserController {
    async getAllUsers(req: Request, res: Response): Promise<void> {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        const result = await userService.getAllUsers(page, limit);

        const response = ApiResponse.success(CONSTANTS.HTTP_STATUS.OK, 'Users retrieved successfully', result);
        res.status(response.statusCode).json(response);
    }

    async getUserById(req: Request, res: Response): Promise<void> {
        const {id} = req.params;

        const user = await userService.getUserById(id);

        const response = ApiResponse.success(CONSTANTS.HTTP_STATUS.OK, 'User retrieved successfully', user);
        res.status(response.statusCode).json(response);
    }

    async updateUser(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const updates = req.body;

        const user = await userService.updateUser(id, updates);

        const response = ApiResponse.success(CONSTANTS.HTTP_STATUS.OK, CONSTANTS.MESSAGES.USER_UPDATED, user);
        res.status(response.statusCode).json(response);
    }

    async deleteUser(req: Request, res: Response): Promise<void> {
        const {id} = req.params;

        await userService.deleteUser(id);

        const response = ApiResponse.success(CONSTANTS.HTTP_STATUS.OK, CONSTANTS.MESSAGES.USER_DELETED, null);
        res.status(response.statusCode).json(response);
    }

    async changePassword(req: Request, res: Response): Promise<void> {
        const {oldPassword, newPassword} = req.body;
        const userId = req.user?._id;

        if (!userId) {
            const response = ApiResponse.error(
                CONSTANTS.HTTP_STATUS.UNAUTHORIZED,
                'User not authenticated',
            );
            res.status(response.statusCode).json(response);
            return;
        }

        await userService.changePassword(userId, oldPassword, newPassword);

        const response = ApiResponse.success(CONSTANTS.HTTP_STATUS.OK, 'Password changed successfully', null);
        res.status(response.statusCode).json(response);
    }
}
