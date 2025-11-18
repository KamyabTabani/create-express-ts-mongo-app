import { Request, Response, NextFunction } from 'express';
import { validationResult, ValidationChain } from 'express-validator';
import { CONSTANTS } from '../config/constants';

export const validate = (validations: ValidationChain[]) => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await Promise.all(validations.map((validation) => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(CONSTANTS.HTTP_STATUS.BAD_REQUEST).json({
            success: false,
            errors: errors.array(),
        });
    };
};
