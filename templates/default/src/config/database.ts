import mongoose from 'mongoose';
import logger from '../utils/logger';

const connectDB = async (): Promise<void> => {
    try {
        const mongoURI = process.env.MONGODB_URI;

        await mongoose.connect(mongoURI!);

        logger.info('✅ MongoDB Connected Successfully');
        logger.info(`📦 Database: ${mongoose.connection.name}`);
        logger.info(`🌐 Host: ${mongoose.connection.host}`);
    } catch (error) {
        logger.error('❌ MongoDB Connection Error:', error);
        process.exit(1);
    }
};

mongoose.connection.on('connected', () => {
    logger.info('Mongoose connected to DB');
});

mongoose.connection.on('error', (err) => {
    logger.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    logger.warn('Mongoose disconnected');
});

process.on('SIGINT', async () => {
    await mongoose.connection.close();
    logger.info('Mongoose connection closed due to app termination');
    process.exit(0);
});

export default connectDB;
