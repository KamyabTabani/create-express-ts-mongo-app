import rateLimit from 'express-rate-limit';

export const generalLimiter = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'),
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
    message: 'Too many requests from this IP, please try again later',
    standardHeaders: true,
    legacyHeaders: false,
});

export const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: 'Too many authentication attempts, please try again later',
    skipSuccessfulRequests: true,
});

export const apiLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 30,
    message: 'API rate limit exceeded',
});
