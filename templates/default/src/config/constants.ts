export const CONSTANTS = {
    PASSWORD_MIN_LENGTH: 6,
    PASSWORD_MAX_LENGTH: 128,
    NAME_MIN_LENGTH: 2,
    NAME_MAX_LENGTH: 50,
    AGE_MIN: 0,
    AGE_MAX: 120,

    SALT_ROUNDS: 10,

    HTTP_STATUS: {
        OK: 200,
        CREATED: 201,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        CONFLICT: 409,
        INTERNAL_SERVER: 500,
    },

    MESSAGES: {
        USER_CREATED: 'User created successfully',
        USER_UPDATED: 'User updated successfully',
        USER_DELETED: 'User deleted successfully',
        USER_NOT_FOUND: 'User not found',
        USER_EXISTS: 'User with this email already exists',
        LOGIN_SUCCESS: 'Login successful',
        INVALID_CREDENTIALS: 'Invalid email or password',
        UNAUTHORIZED: 'Unauthorized access',
        TOKEN_EXPIRED: 'Token expired',
        INVALID_TOKEN: 'Invalid token',
    }
};
