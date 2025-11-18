import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { IUser, IUserMethods } from '../types';
import { CONSTANTS } from '../config/constants';

export interface IUserDocument extends Omit<IUser, '_id'>, IUserMethods, Document {}

type UserModelType = Model<IUserDocument>;

const UserSchema = new Schema<IUserDocument>(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
            minlength: [CONSTANTS.NAME_MIN_LENGTH, `Name must be at least ${CONSTANTS.NAME_MIN_LENGTH} characters`],
            maxlength: [CONSTANTS.NAME_MAX_LENGTH, `Name cannot exceed ${CONSTANTS.NAME_MAX_LENGTH} characters`],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
            index: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [CONSTANTS.PASSWORD_MIN_LENGTH, `Password must be at least ${CONSTANTS.PASSWORD_MIN_LENGTH} characters`],
            select: false,
        },
        age: {
            type: Number,
            min: [CONSTANTS.AGE_MIN, 'Age cannot be negative'],
            max: [CONSTANTS.AGE_MAX, 'Age seems invalid'],
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(CONSTANTS.SALT_ROUNDS);
        this.password = await bcrypt.hash(this.password as string, salt);
        next();
    } catch (error: any) {
        next(error);
    }
});

UserSchema.methods.comparePassword = async function (
    candidatePassword: string
): Promise<boolean> {
    try {
        return await bcrypt.compare(candidatePassword, this.password as string);
    } catch (error) {
        return false;
    }
};

UserSchema.methods.generateAuthToken = function (): string {
    return jwt.sign(
        {
            id: this._id.toString(),
            email: this.email as string,
            role: this.role as string,
        },
        process.env.JWT_SECRET || 'secret',
        { expiresIn: process.env.JWT_EXPIRE || '7d' } as any
    );
};

UserSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.password;
    return obj;
};

const User = mongoose.model<IUserDocument, UserModelType>('User', UserSchema);

export default User;
