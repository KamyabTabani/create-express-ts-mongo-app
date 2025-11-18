import User, { IUserDocument } from '../models/User.model';
import { ApiError } from '../utils/ApiError';
import { CONSTANTS } from '../config/constants';
import logger from '../utils/logger';

export class UserService {
    async getAllUsers(page = 1, limit = 10): Promise<{ users: IUserDocument[]; total: number; page: number; pages: number }> {
        try {
            const skip = (page - 1) * limit;

            const [users, total] = await Promise.all([
                User.find().select('-password').skip(skip).limit(limit).sort({ createdAt: -1 }),
                User.countDocuments(),
            ]);

            return {
                users,
                total,
                page,
                pages: Math.ceil(total / limit),
            };
        } catch (error) {
            logger.error('Get all users error:', error);
            throw error;
        }
    }

    async getUserById(id: string): Promise<IUserDocument> {
        try {
            const user = await User.findById(id).select('-password');

            if (!user) {
                throw new ApiError(CONSTANTS.HTTP_STATUS.NOT_FOUND, CONSTANTS.MESSAGES.USER_NOT_FOUND);
            }

            return user;
        } catch (error) {
            logger.error('Get user by ID error:', error);
            throw error;
        }
    }

    async updateUser(id: string, updates: Partial<IUserDocument>): Promise<IUserDocument> {
        try {
            delete updates.password;
            delete updates.email;

            const user = await User.findByIdAndUpdate(id, updates, {
                new: true,
                runValidators: true,
            }).select('-password');

            if (!user) {
                throw new ApiError(CONSTANTS.HTTP_STATUS.NOT_FOUND, CONSTANTS.MESSAGES.USER_NOT_FOUND);
            }

            logger.info(`User updated: ${user.email}`);

            return user;
        } catch (error) {
            logger.error('Update user error:', error);
            throw error;
        }
    }

    async deleteUser(id: string): Promise<void> {
        try {
            const user = await User.findByIdAndDelete(id);

            if (!user) {
                throw new ApiError(CONSTANTS.HTTP_STATUS.NOT_FOUND, CONSTANTS.MESSAGES.USER_NOT_FOUND);
            }

            logger.info(`User deleted: ${user.email}`);
        } catch (error) {
            logger.error('Delete user error:', error);
            throw error;
        }
    }

    async changePassword(userId: string, oldPassword: string, newPassword: string): Promise<void> {
        try {
            const user = await User.findById(userId).select('+password');

            if (!user) {
                throw new ApiError(CONSTANTS.HTTP_STATUS.NOT_FOUND, CONSTANTS.MESSAGES.USER_NOT_FOUND);
            }

            const isPasswordValid = await user.comparePassword(oldPassword);
            if (!isPasswordValid) {
                throw new ApiError(CONSTANTS.HTTP_STATUS.UNAUTHORIZED, 'Current password is incorrect');
            }

            user.password = newPassword;
            await user.save();

            logger.info(`Password changed for user: ${user.email}`);
        } catch (error) {
            logger.error('Change password error:', error);
            throw error;
        }
    }
}
