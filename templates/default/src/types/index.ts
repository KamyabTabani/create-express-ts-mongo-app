import { Request } from 'express';

export interface IUser {
    name: string;
    email: string;
    password: string;
    age?: number;
    role?: 'user' | 'admin';
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IUserMethods {
    comparePassword(candidatePassword: string): Promise<boolean>;
    generateAuthToken(): string;
}

declare global {
    namespace Express {
        interface Request {
            user?: {
                _id: string;
                name: string;
                email: string;
                age?: number;
                role?: string;
                isActive?: boolean;
                createdAt?: Date;
                updatedAt?: Date;
            };
        }
    }
}
//! OR
export interface AuthRequest extends Request {
    user?: {
        _id: string;
        name: string;
        email: string;
        age?: number;
        role?: string;
        isActive?: boolean;
        createdAt?: Date;
        updatedAt?: Date;
    };
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface TokenPayload {
    id: string;
    email: string;
    role: string;
}

export interface AuthResponse {
    user: Partial<IUser>;
    token: string;
    refreshToken?: string;
}
