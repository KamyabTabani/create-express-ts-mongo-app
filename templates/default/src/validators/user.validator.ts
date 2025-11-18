import { body, param } from 'express-validator';
import { CONSTANTS } from '../config/constants';

export const registerValidator = [
    body('name')
        .trim()
        .isLength({ min: CONSTANTS.NAME_MIN_LENGTH, max: CONSTANTS.NAME_MAX_LENGTH })
        .withMessage(`Name must be between ${CONSTANTS.NAME_MIN_LENGTH} and ${CONSTANTS.NAME_MAX_LENGTH} characters`),

    body('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Please provide a valid email'),

    body('password')
        .isLength({ min: CONSTANTS.PASSWORD_MIN_LENGTH })
        .withMessage(`Password must be at least ${CONSTANTS.PASSWORD_MIN_LENGTH} characters`),

    body('age')
        .optional()
        .isInt({ min: CONSTANTS.AGE_MIN, max: CONSTANTS.AGE_MAX })
        .withMessage(`Age must be between ${CONSTANTS.AGE_MIN} and ${CONSTANTS.AGE_MAX}`),
];

export const loginValidator = [
    body('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Please provide a valid email'),

    body('password')
        .notEmpty()
        .withMessage('Password is required'),
];

export const updateUserValidator = [
    body('name')
        .optional()
        .trim()
        .isLength({ min: CONSTANTS.NAME_MIN_LENGTH, max: CONSTANTS.NAME_MAX_LENGTH })
        .withMessage(`Name must be between ${CONSTANTS.NAME_MIN_LENGTH} and ${CONSTANTS.NAME_MAX_LENGTH} characters`),

    body('age')
        .optional()
        .isInt({ min: CONSTANTS.AGE_MIN, max: CONSTANTS.AGE_MAX })
        .withMessage(`Age must be between ${CONSTANTS.AGE_MIN} and ${CONSTANTS.AGE_MAX}`),
];

export const idValidator = [
    param('id')
        .isMongoId()
        .withMessage('Invalid user ID'),
];

export const changePasswordValidator = [
    body('oldPassword')
        .notEmpty()
        .withMessage('Current password is required'),

    body('newPassword')
        .isLength({ min: CONSTANTS.PASSWORD_MIN_LENGTH })
        .withMessage(`New password must be at least ${CONSTANTS.PASSWORD_MIN_LENGTH} characters`),
];
