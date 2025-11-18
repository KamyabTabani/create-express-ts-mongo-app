import app from './app';
import connectDB from './config/database';
import dotenv from 'dotenv';
import logger from './utils/logger';
import fs from 'fs';
import path from 'path';

const envFile = process.env.NODE_ENV === 'production'
    ? '.env.production'
    : '.env.development';

dotenv.config({ path: path.resolve(process.cwd(), envFile) });

const PORT = process.env.PORT || 5000;

const logsDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

connectDB();

const server = app.listen(PORT, () => {
    logger.info('='.repeat(50));
    logger.info(`🚀 Server running on port ${PORT}`);
    logger.info(`🌍 Environment: ${process.env.NODE_ENV}`);
    logger.info(`📡 API: http://localhost:${PORT}/api`);
    logger.info(`📚 Documentation: http://localhost:${PORT}/api-docs`);
    logger.info(`💚 Health: http://localhost:${PORT}/health`);
    logger.info('='.repeat(50));
});

const gracefulShutdown = (signal: string) => {
    logger.info(`\n${signal} signal received: closing HTTP server`);
    server.close(() => {
        logger.info('HTTP server closed');
        process.exit(0);
    });

    setTimeout(() => {
        logger.error('Forcing shutdown');
        process.exit(1);
    }, 10000);
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

process.on('unhandledRejection', (err: Error) => {
    logger.error('Unhandled Rejection:', err);
    gracefulShutdown('unhandledRejection');
});

process.on('uncaughtException', (err: Error) => {
    logger.error('Uncaught Exception:', err);
    gracefulShutdown('uncaughtException');
});

export default server;
